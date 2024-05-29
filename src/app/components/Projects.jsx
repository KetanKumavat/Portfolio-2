"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

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
  const regex = /<img.*?src="([^"]*)".*?>/g;
  const matches = [];
  let match;
  while ((match = regex.exec(text))) {
    matches.push(match[1]);
  }
  return matches;
}

function Projects() {
  const starredRepositories = useStarredRepositories();
  const [readmeImages, setReadmeImages] = useState([]);

  useEffect(() => {
    const fetchReadmeImages = async () => {
      const imagesPromises = starredRepositories.map(async (repo) => {
        const readmeResponse = await fetch(
          `https://raw.githubusercontent.com/KetanKumavat/${repo.name}/main/README.md`
        );
        const readmeText = await readmeResponse.text();
        const images = extractImageUrls(readmeText);
        return { repoName: repo.name, images };
      });
      const imagesData = await Promise.all(imagesPromises);
      setReadmeImages(imagesData);
    };

    fetchReadmeImages();
  }, [starredRepositories]);

  const orderedRepositories = [
    ...starredRepositories.filter((repo) => repo.name === "Insightify"),
    ...starredRepositories.filter((repo) => repo.name === "CoinCanvas"),
    ...starredRepositories.filter((repo) => repo.name === "echo"),
    ...starredRepositories.filter((repo) => repo.name === "SuperWOMEN"),
    ...starredRepositories.filter((repo) => repo.name === "Lumi"),
    ...starredRepositories.filter((repo) => repo.name === "MegaBlog"),
    ...starredRepositories.filter((repo) => repo.name === "WeatheX"),
    ...starredRepositories.filter((repo) => repo.name === "Todo"),

    ...starredRepositories.filter(
      (repo) =>
        repo.name !== "Insightify" &&
        repo.name !== "Lumi" &&
        repo.name !== "CoinCanvas" &&
        repo.name !== "echo" &&
        repo.name !== "SuperWOMEN" &&
        repo.name !== "WeatheX" &&
        repo.name !== "Todo" &&
        repo.name !== "MegaBlog"
    ),
  ];

  const projectImages = [
    "./insightify.webp",
    "./coincanvas.webp",
    "./echo.webp",
    "./superwomen.webp",
    "./lumi.webp",
    "./megablog.webp",
    "./weathex.webp",
    "./todo.webp",
    "./joke-gen.webp",
  ];

  const controls = useAnimation();
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        controls.start({ opacity: 1 });
      } else {
        controls.start({ opacity: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div>
      <div className="w-full h-fit text-white flex-col">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto cursor-default">
            turning ideas into real life products is{" "}
            <Highlight className="text-white">my calling</Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>
      <div className="w-full h-fit flex font-bold">
        <h1 className="text-white md:text-5xl text-4xl flex justify-center w-full items-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.2, delay: 0 }}
            className="inline-block mt-4">
            Explore My Projects
          </motion.span>
        </h1>
      </div>
      {/* project card */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.2, delay: 0 }}
        className="inline-block mt-4">
        <HoverEffect
          items={orderedRepositories.map((repo) => ({
            title: repo.name,
            description: repo.description || "Work in Progress...",
            link: repo.url,
            homepageUrl: repo.homepageUrl || "",
            image: projectImages[orderedRepositories.indexOf(repo)],
          }))}
        />
      </motion.span>
    </div>

    // <HoverEffect
    //   items={orderedRepositories.map((repo) => ({
    //     title: repo.name,
    //     description: repo.description || "Work in Progress...",
    //     link: repo.url,
    //     homepageUrl: repo.homepageUrl || "",
    //     image:
    //       readmeImages.find((readme) => readme.repoName === repo.name)
    //         ?.images[0] || "",
    //   }))}
    // />
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
