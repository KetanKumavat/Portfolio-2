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
import { HoverEffect } from "./ui/card-hover-effect";
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

function  Projects() {
  const starredRepositories = useStarredRepositories();
  const orderedRepositories = [
    // Add your desired repo(s) here first
    // For example, to display a repo with name "my-repo" first:
    ...starredRepositories.filter((repo) => repo.name === "Insightify"),
    ...starredRepositories.filter((repo) => repo.name === "CoinCanvas"),
    ...starredRepositories.filter((repo) => repo.name === "echo"),
    ...starredRepositories.filter((repo) => repo.name === "SuperWOMEN"),
    ...starredRepositories.filter((repo) => repo.name === "Lumi"),
    ...starredRepositories.filter((repo) => repo.name === "WeatheX"),

    ...starredRepositories.filter(
      (repo) =>
        repo.name !== "Insightify" &&
        repo.name !== "Lumi" &&
        repo.name !== "CoinCanvas" &&
        repo.name !== "echo" &&
        repo.name !== "SuperWOMEN" &&
        repo.name !== "WeatheX"
    ),
  ];

  const projectImages = [
    "./insightify.jpeg",
    "./coincanvas.png",
    "./echo.png",
    "./superwomen.png",
    "./lumi.png",
    "./weathex.png",
    "./megablog.png",
    "./joke-gen.png"
  ];

  return (
    <HoverEffect
      items={orderedRepositories.map((repo) => ({
        title: repo.name,
        description: repo.description || "Work in Progress...",
        link: repo.url,
        homepageUrl: repo.homepageUrl || "",
        image: projectImages[orderedRepositories.indexOf(repo)],
      }))}
    />
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
