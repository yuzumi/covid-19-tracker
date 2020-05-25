import React from 'react';
import Card from "src/components/cards/Card";
import { Grid, Typography } from "@material-ui/core";
import styles from "src/components/cards/Cards.module.css";
import isEmpty from "lodash/fp/isEmpty";

const Cards = ({ data }) => {
  const { confirmed, recovered, deaths, lastUpdate } = data;

  const lastUpdatedAt = new Date(lastUpdate).toDateString();

  const datasets = [
    {
      title: "Infected",
      value: confirmed?.value,
      variant: "infected",
      description: "Number of active cases of Covid-19",
      lastUpdatedAt
    },
    {
      title: "Recovered",
      value: recovered?.value,
      variant: "recovered",
      description: "Number of recoveries from Covid-19",
      lastUpdatedAt
    },
    {
      title: "Deaths",
      value: deaths?.value,
      variant: "deaths",
      description: "Number of deaths by Covid-19",
      lastUpdatedAt
    },
  ];

  if (isEmpty(data)) {
    return (
      <Typography>No data to show</Typography>
    );
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {datasets.map(dataset => (
          <Card {...{ key: dataset.title, ...dataset }} />
        ))}
      </Grid>
    </div>
  );
};

export default Cards;