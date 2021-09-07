import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { useStyles } from "./StyleStrategySection"
import StrategyVideoSection from './StrategyVideoSection';

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
                            urduVideoUrl
                            englishUrlVideo
                        }
                    }
                }
            }
        `
    )
    const videoUrl = result.allContentfulHomepage.edges
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={3} >
                    <Grid item lg={5} xs={12} className={classes.strategySection}>
                        {
                            result.allContentfulHomepage.edges.map((edge) => {
                                return (
                                    <>
                                        <div key={edge.node.id}>
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
                    <Grid lg={7} xs={12} className={classes.videoSectionContainer} >
                        <StrategyVideoSection videoUrl={videoUrl} />
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default StrategySection
