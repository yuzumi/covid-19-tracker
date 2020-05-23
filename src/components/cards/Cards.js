import React from 'react';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import isEmpty from "lodash/fp/isEmpty";
import cx from "classnames";
import styles from "src/components/cards/Cards.module.css";

const Cards = ({ data }) => {
  const { confirmed, recovered, deaths, lastUpdate } = data;

  const lastUpdatedAt = new Date(lastUpdate).toDateString();

  if (isEmpty(data)) {
    return (
      <Typography>No data to show</Typography>
    );
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx([styles.card, styles.infected])}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{lastUpdatedAt}</Typography>
            <Typography variant="body2">Number of active cases of Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx([styles.card, styles.recovered])}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{lastUpdatedAt}</Typography>
            <Typography variant="body2">Number of recoveries from Covid-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx([styles.card, styles.deaths])}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{lastUpdatedAt}</Typography>
            <Typography variant="body2">Number of deaths by Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;