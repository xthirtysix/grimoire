import React from "react";
import { Accordion, AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Skeleton } from "@material-ui/lab";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    levelHeader: {
      margin: "0.8rem 0",
    },
    spellList: {
      marginBottom: "1rem",
    },
    spellSubheader: {
      alignSelf: "center",
      marginLeft: "auto",
    },
  })
);

export const GrimoireSpellsSkeleton = () => {
  const classes = useStyles();

  return (
    <>
      <Skeleton className={classes.levelHeader} width={67} height={25 }/>
      <div className={classes.spellList}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Skeleton width={90} />
            <Skeleton width={65} className={classes.spellSubheader} />
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Skeleton width={80} />
            <Skeleton width={70} className={classes.spellSubheader} />
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Skeleton width={110} />
            <Skeleton width={65} className={classes.spellSubheader} />
          </AccordionSummary>
        </Accordion>
      </div>
    </>
  );
};
