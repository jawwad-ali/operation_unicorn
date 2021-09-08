import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Typography, Grid } from '@material-ui/core';
import { useStyles } from "./StyleMission"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function Mission() {
    const classes = useStyles()
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulMission {
                    edges {
                        node {
                            heading
                            image
                            id
                            text {
                                raw
                            }
                        }
                    }
                }
            }
        `
    )
    const result = data.allContentfulMission.edges
    console.log(result)

    return (
        <div>
            <Container maxWidth="lg" style={{ marginTop: "120px" }}>
                {
                    result.map((edge, i) => (
                        <div key={i}>
                            <Grid className={i % 2 ? `${classes.missionContainer}` : `${classes.missionContainerAlternate} `} container spacing={3} >
                                <Grid xs={12} sm={12} md={6} lg={6} style={{ padding: "10px" }}>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {edge.node.heading}
                                    </Typography>
                                    <Typography variant="body1" component="p" className={classes.text}>
                                        {documentToReactComponents(JSON.parse(edge.node.text.raw))}
                                    </Typography>
                                </Grid>

                                <Grid xs={12} sm={12} md={6} lg={6} className={classes.imgDiv}>
                                    <img className={classes.img} src={edge.node.image} />
                                </Grid>
                            </Grid>
                        </div>
                    ))
                }
            </Container>
        </div>
    )
}

export default Mission