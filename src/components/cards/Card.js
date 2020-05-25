import React from "react";
import CountUp from "react-countup";
import { Grid as MuGrid, Card as MuCard, CardContent as MuCardContent, Typography as MuTypography } from "@material-ui/core";
import styles from "src/components/cards/Card.module.css";
import cx from "classnames";

const Card = ({
  title,
  value,
  variant,
  description,
  lastUpdatedAt
}) => (
    <MuGrid item component={MuCard} xs={12} md={3} className={cx([styles.card, styles[variant]])}>
      <MuCardContent>
        <MuTypography color="textSecondary" gutterBottom>
          {title}
        </MuTypography>
        <MuTypography variant="h5">
          <CountUp
            start={0}
            end={value}
            duration={3}
            separator=","
          />
        </MuTypography>
        <MuTypography color="textSecondary">{lastUpdatedAt}</MuTypography>
        <MuTypography variant="body2">{description}</MuTypography>
      </MuCardContent>
    </MuGrid>
  );

export default Card;