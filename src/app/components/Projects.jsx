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
  const orderedRepositories = [
    // Add your desired repo(s) here first
    // For example, to display a repo with name "my-repo" first:
    ...starredRepositories.filter(repo => repo.name === "Insightify"),
    ...starredRepositories.filter(repo => repo.name === "Lumi"),
    // Then add the rest of the repositories
    ...starredRepositories.filter(repo => repo.name !== "Insightify" && repo.name !== "Lumi"),
  ];

  return (
  
  <div>
  <h1 className="text-white text-3xl font-semibold text-center mt-[20vh]">
    Yap Yap
  </h1>
    <div className="w-full grid grid-cols-2 place-items-center">
    {orderedRepositories.map((repo) => {
      const imageUrls = extractImageUrls(repo.readmeText || "");
      return (
        // eslint-disable-next-line react/jsx-key
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <div id="cards" className="w-full flex justify-center">
            <div
              key={repo.id}
              className="p-6 w-3/5 z-50 aspect-square rounded-xl shadow-2xl border-solid border-2 border-zinc-white/13"
              style={{
                border: "2px solid transparent",
                background: "rgba(0, 0, 0, 0.8)",
                boxShadow:
                  "5px 5px 10px rgba(0, 0, 0, 0.6), -5px 5px 10px rgba(0, 0, 0, 0.6), 0 5px 10px rgba(0, 0, 0, 0.6)",
              }}>
              <h2 className="text-white font-bold text-center text-3xl mt-4 mb-4">
                {repo.name}
              </h2>
              {repo.description && (
                <p className="text-gray-200 mt-10 text-center">
                  {repo.description}
                </p>
              )}
              <div className="mt-24 flex justify-center items-center flex-col gap-10">
                {repo.homepageUrl && (
                  <a
                    href={repo.homepageUrl}
                    className="bg-neutral-700 text-center text-white font-semibold w-1/2 flex justify-center py-3 rounded-full hover:bg-zinc-800"
                    target="_blank"
                    rel="noopener noreferrer">
                    View Project
                  </a>
                )}
                <a
                  href={repo.url}
                  className="text-white text-md mb-4 font-lightweight text-center hover:underline"
                  target="_blank"
                  rel="noopener noreferrer">
                  View Github Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
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
