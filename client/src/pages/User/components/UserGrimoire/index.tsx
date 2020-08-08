import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  User,
  User_user_grimoires_result_characterClasses,
} from "../../../../lib/graphql/queries/User/__generated__/User";
import { Paper, Typography, Grid, Button } from "@material-ui/core";

interface Props {
  userGrimoires: User["user"]["grimoires"];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      margin: "2rem 0 4rem -8px",
      padding: 0,
      listStyle: "none",
    },
    cardContainer: {
      boxSizing: "border-box",
      padding: "1rem 2rem",
    },
    cardHeader: {
      position: "relative",
      padding: "1rem 2rem",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      color: "white",
      background: "#667eea",
      backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    characterLevel: {
      position: "absolute",
      top: "5px",
      right: "1rem",
      fontSize: "0.85rem",
      color: "white",
    },
    characterClass: {
      color: "black",
    },
    classEntry: {
      display: "block",
      marginBottom: "0",
    },
    button: {
      marginTop: "2rem",
    },
  })
);

export const UserGrimoire = ({ userGrimoires }: Props) => {
  const classes = useStyles();
  const total = userGrimoires ? userGrimoires.total : null;
  const result = userGrimoires ? userGrimoires.result : null;

  const grimoireList =
    total && result ? (
      <Grid
        container
        component={"ul"}
        className={classes.grid}
        spacing={2}
        justify="flex-start"
      >
        {result.map((grimoire) => {
          return (
            <Grid item component={"li"} key={grimoire.id} xs={12} sm={6} md={3}>
              <Paper>
                <div className={classes.cardHeader}>
                  <Typography>{grimoire.name}</Typography>
                  <Typography className={classes.characterLevel}>
                    level{" "}
                    {grimoire.characterClasses.reduce(
                      (
                        acc: number,
                        cur: User_user_grimoires_result_characterClasses
                      ) => {
                        return acc + cur.level;
                      },
                      0
                    )}
                  </Typography>
                </div>
                <div className={classes.cardContainer}>
                  <Typography className={classes.characterClass}>
                    {grimoire.characterClasses.map((cls) => {
                      return (
                        <span className={classes.classEntry} key={cls.class}>
                          <span>
                            {cls.class.charAt(0).toUpperCase() +
                              cls.class.slice(1)}
                          </span>
                          , level <span>{cls.level}</span>
                        </span>
                      );
                    })}
                  </Typography>
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    href={`/grimoire/${grimoire.id}`}
                  >
                    Open
                  </Button>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    ) : null;

  return <>{grimoireList}</>;
};
