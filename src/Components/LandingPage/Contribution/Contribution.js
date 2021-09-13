import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useStyles } from "./StyleContribution"
import { CardActions, Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function Contribution() {

    const classes = useStyles();
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulContribution {
                    nodes {
                        heading {
                            heading
                        }
                        contributionData {
                            id
                            heading
                            text
                            btn
                        }
                    }
                }
            }
        `
    )

    const result = data.allContentfulContribution.nodes[0]
    return (
        <div>
            <Container maxWidth="lg" className={classes.contributionSectionContainer}>
                <Grid container spacing={3} >
                    <div className={classes.titleDiv}>
                        <Typography variant="h1" component="h2" className={classes.title}>
                            {result.heading.heading}
                        </Typography>
                    </div>

                    {
                        result.contributionData.map((d) => (
                            <Grid item lg={4} key={d.id}>
                                <div >
                                    <Card className={classes.card}>
                                        <CardContent className={classes.CardContent}>
                                            <Typography component={"div"} className={classes.cardTitle} color="textSecondary" gutterBottom>
                                                {d.heading}
                                            </Typography>
                                            <Typography component={"div"} className={classes.cardText} variant="body1">
                                                {d.text}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <div className={classes.btnDiv}>
                                                <Button size="small" className={classes.cardBtn}>
                                                    <Typography component={"div"} className={classes.btnText}>{d.btn}</Typography>
                                                </Button>
                                            </div>
                                        </CardActions>
                                    </Card>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div >
    )
}

export default Contribution