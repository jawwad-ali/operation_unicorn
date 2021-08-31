import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { useStyles } from "./StyleStrategySection"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function StrategySection() {
    const classes = useStyles();
    const result = useStaticQuery(
        graphql`
            query MyQuery {
                allContentfulHomepage {
                    edges {
                        node {
                            id
                            heading
                            startegytext
                        }
                    }
                }
            }
        `
    )
    console.log(result)
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={3} >
                    <Grid item lg={5} xs={12} className={classes.strategySection}>
                        {
                            result.allContentfulHomepage.edges.map((edge, i) => {
                                return (
                                    <>
                                        <div key={i}>
                                            <Typography className={classes.strategyHeading} variant="h1" component="h2">
                                                {edge.node.heading}
                                            </Typography>
                                            <Typography variant="body1" className={classes.startegytext} >
                                                {edge.node.startegytext}
                                            </Typography>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default StrategySection
