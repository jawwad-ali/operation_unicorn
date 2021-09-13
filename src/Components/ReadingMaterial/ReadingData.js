import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { Container, Typography } from '@material-ui/core';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "./style.css"

function ReadingData() {
    const result = useStaticQuery(
        graphql`
            query  {
                allContentfulReadingMaterial {
                    edges {
                        node {
                            heading
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
    const data = result.allContentfulReadingMaterial.edges
    console.log("DATA", data)
    return (
        <>
            <Container maxWidth="lg" style={{ marginTop: "7rem" }}>
                <Grid container spacing={3} >
                    {
                        data.map((edge) => (
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="readingSectionData" key={edge.node.id}>
                                <div className="material">
                                    <Typography className="heading" variant="h1" component="h2">
                                        {edge.node.heading}
                                    </Typography>
                                    <Typography component={"div"} className="text" variant="body1">
                                        {documentToReactComponents(JSON.parse(edge.node.text.raw))}
                                    </Typography>
                                </div>
                            </Grid>
                        ))
                    }

                </Grid>
            </Container>
        </>
    )
}

export default ReadingData
