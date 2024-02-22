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
        setStarredRepositories(starredRepositoriesData);
      }
    };

    fetchStarredRepositories();
  }, []);

  return starredRepositories;
}

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

function Projects() {
  const starredRepositories = useStarredRepositories();
   return (
     <div className="w-full h-screen flex flex-col justify-center items-center">
       {starredRepositories.map((repo) => (
         <div
           key={repo.id}
           className="bg-gray-800 p-6 my-4 w-96 rounded-lg shadow-lg">
           <h2 className="text-white font-bold text-xl">{repo.name}</h2>
           {repo.description && (
             <p className="text-gray-300 mt-2">{repo.description}</p>
           )}
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
                 View Deployment
               </a>
             )}
           </div>
         </div>
       ))}
     </div>
   );
}



export default Projects;