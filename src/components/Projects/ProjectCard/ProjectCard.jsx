import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";

export const ProjectCard = ({
  image,
  url,
  repoUrl = null,
  repoFront = null,
  repoBack = null,
  title,
  description,
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });
  return (
    <Card
      sx={
        isTabletOrMobile
          ? {
              maxWidth: 300,
              borderRadius: 5,
              marginTop: 2,
            }
          : { maxWidth: 500, margin: 2, borderRadius: 5 }
      }
    >
      <CardMedia component="img" height="140" image={image} />
      <CardContent>
        <h1 className="text-3xl font-bold py-3 text-sky-600">{title}</h1>
        <p className="font-semibold">{description}</p>
      </CardContent>
      <CardActions className="flex flex-wrap justify-evenly">
        <a
          href={url}
          className="px-5 py-2 m-2 border-solid border-2 rounded-md  hover:bg-sky-600 hover:text-white duration-500 font-bold text-sky-600"
          rel="noreferrer"
          target="_blank"
        >
          Deploy
        </a>
        {repoUrl && (
          <a
            href={repoUrl}
            className="px-5 py-2 m-2 border-solid border-2 rounded-md  hover:bg-sky-600 hover:text-white duration-500 font-bold text-sky-600"
            rel="noreferrer"
            target="_blank"
          >
            Repo
          </a>
        )}
        {repoFront && (
          <a
            href={repoFront}
            className="px-5 py-2 m-2 border-solid border-2 rounded-md  hover:bg-sky-600 hover:text-white duration-500 font-bold text-sky-600"
            rel="noreferrer"
            target="_blank"
          >
            Repo Front
          </a>
        )}
        {repoBack && (
          <a
            href={repoBack}
            className="px-5 py-2 m-2 border-solid border-2 rounded-md  hover:bg-sky-600 hover:text-white duration-500 font-bold text-sky-600"
            rel="noreferrer"
            target="_blank"
          >
            Repo Back
          </a>
        )}
      </CardActions>
    </Card>
  );
};
