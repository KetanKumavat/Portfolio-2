"use client";
import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
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
              starredRepositories(first: 20) {
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

function Projects() {
  const starredRepositories = useStarredRepositories();

  const orderedRepositories = [
    ...starredRepositories.filter((repo) => repo.name === "Insightify"),
    ...starredRepositories.filter((repo) => repo.name === "Ascend"),
    ...starredRepositories.filter((repo) => repo.name === "CoinCanvas"),
    ...starredRepositories.filter((repo) => repo.name === "echo"),
    ...starredRepositories.filter((repo) => repo.name === "badbusiness-events"),
    ...starredRepositories.filter((repo) => repo.name === "SuperWOMEN"),
    ...starredRepositories.filter((repo) => repo.name === "PixelPaws"),
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
        repo.name !== "MegaBlog" &&
        repo.name !== "badbusiness-events" &&
        repo.name !== "Ascend" &&
        repo.name !== "PixelPaws"
    ),
  ];

  const projectImages = [
    "./insightify.webp",
    "./ascend.webp",
    "./coincanvas.webp",
    "./echo.webp",
    "./badbusiness-events.webp",
    "./superwomen.webp",
    "./pixelpaws.webp",
    "./lumi.webp",
    "./megablog.webp",
    "./weathex.webp",
    "./todo.webp",
  ];

  const controls = useAnimation();

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
      <div className="w-full h-fit text-white flex-col overflow-x-hidden">
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
            description: repo.description || "",
            link: repo.url,
            homepageUrl: repo.homepageUrl || "Work in Progress...",
            image: projectImages[orderedRepositories.indexOf(repo)],
          }))}
        />
      </motion.span>
    </div>
  );
}

export default Projects;
