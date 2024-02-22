// components/Projects.jsx
"use client";
import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Image from "next/image";

function useStarredRepositories() {
  const [starredRepositories, setStarredRepositories] = useState([]);

  useEffect(() => {
    const fetchStarredRepositories = async () => {
      const httpLink = createHttpLink({
        uri: "https://api.github.com/graphql",
      });

      const authLink = setContext((_, { headers }) => {
        return {
          headers: {
            ...headers,
            authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
          },
        };
      });

      const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
      });

      const { data } = await client.query({
        query: gql`
          {
            user(login: "KetanKumavat") {
              starredRepositories(first: 10) {
                edges {
                  node {
                    ... on Repository {
                      id
                      name
                      url
                      description
                      createdAt
                      primaryLanguage {
                        name
                      }
                      homepageUrl
                    }
                  }
                }
              }
            }
          }
        `,
      });

      if (data?.user?.starredRepositories?.edges) {
        const starredRepositoriesData = data.user.starredRepositories.edges.map(
          ({ node }) => node
        );
        const repositoriesWithReadme = await Promise.all(
          starredRepositoriesData.map(async (repo) => {
            const readmeResponse = await fetch(
              `https://raw.githubusercontent.com/KetanKumavat/${repo.name}/main/README.md`
            );
            const readmeText = await readmeResponse.text();
            return { ...repo, readmeText };
          })
        );
        setStarredRepositories(repositoriesWithReadme);
      }
    };

    fetchStarredRepositories();
  }, []);

  return starredRepositories;
}

function extractImageUrls(text) {
  const regex = /<img.*?src="(.*?)".*?>/g;
  const matches = [];
  let match;
  while ((match = regex.exec(text))) {
    matches.push(match[1]);
  }
  return matches;
}

function Projects() {
  const starredRepositories = useStarredRepositories();

  return (
    <div className="w-full h-screen overflow-y-scroll grid place-items-center">
      {starredRepositories.map((repo) => {
        const imageUrls = extractImageUrls(repo.readmeText || "");
        return (
          <div
            key={repo.id}
            className="bg-zinc-950 p-6 my-4 w-2/5 aspect-square rounded-lg shadow-lg">
            <h2 className="text-white font-bold text-xl">{repo.name}</h2>
            {repo.description && (
              <p className="text-gray-300 mt-2">{repo.description}</p>
            )}
            <div className="flex flex-wrap mt-4">
              {imageUrls.map((imageUrl, index) => (
                <Image
                  key={index}
                  src={imageUrl}
                  alt={`Image ${index}`}
                  className="w-32 h-32 object-cover mr-2 mb-2 rounded-lg"
                />
              ))}
            </div>
            <div className="mt-4">
              <a
                href={repo.url}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                View Github Repository
              </a>
              {repo.homepageUrl && (
                <a
                  href={repo.homepageUrl}
                  className="ml-4 text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer">
                  View Project
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;

// function usePinnedrepos() {
//   const [pinnedrepos, setPinnedrepos] = useState([]);

//   useEffect(() => {
//     const fetchPinnedrepos = async () => {
//       const httpLink = createHttpLink({
//         uri: "https://api.github.com/graphql",
//       });

//       const authLink = setContext((_, { headers }) => {
//         return {
//           headers: {
//             ...headers,
//             authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
//           },
//         };
//       });

//       const client = new ApolloClient({
//         link: authLink.concat(httpLink),
//         cache: new InMemoryCache(),
//       });

//       const { data } = await client.query({
//         query: gql`
//           {
//             user(login: "KetanKumavat") {
//               starredRepositories(first: 10) {
//                 totalCount
//                 edges {
//                   node {
//                     ... on Repository {
//                       id
//                       name
//                       url
//                       description
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         `,
//       });

//       if (data?.user?.pinnedrepos?.edges) {
//         const pinnedreposData = data.user.pinnedrepos.edges.map(
//           ({ node }) => node
//         );
//         setPinnedrepos(pinnedreposData);
//       }
//     };

//     fetchPinnedrepos();
//   }, []);

//   return pinnedrepos;
// }

// for pinned repo

// function Projects() {
//   const pinnedrepos = usePinnedrepos();

//   return (
//     <div className="w-full h-screen flex justify-center repos-center">
//       {pinnedrepos &&
//         pinnedrepos.map((repo) => {
//           return (
//             <div
//               key={repo.id}
//               className="bg-white p-4 rounded-lg shadow-lg m-4">
//               <h2 className="text-black font-bold">{repo.name}</h2>
//               {repo.description && (
//                 <p className="text-gray-700">{repo.description}</p>
//               )}
//               <a
//                 href={repo.url}
//                 className="text-blue-500 hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 View Github Repository
//               </a>
//               {repo.deployments &&
//                 repo.deployments.nodes &&
//                 repo.deployments.nodes.length > 0 && (
//                   <a
//                     href={repo.deployments.nodes[0].latestStatus.environmentUrl}
//                     className="text-blue-500 hover:underline"
//                     target="_blank"
//                     rel="noopener noreferrer">
//                     View Deployment
//                   </a>
//                 )}
//             </div>
//           );
//         })}
//     </div>
//   );
// }

//for starred repo
