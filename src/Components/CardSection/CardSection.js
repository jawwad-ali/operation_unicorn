import React from 'react'
import "./StyleCardSection"
import { useStyles } from "./StyleCardSection"
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import OneLiner from "./OneLiner"

function CardSection() {
    const classes = useStyles();

    const result = useStaticQuery(
        graphql`
        query{
            allContentfulCardSection {
                    edges {
                        node {
                            name
                            picture
                            id
                        }
                    }
                }
            }
        `
    )
    return (
        <>
            <Container maxWidth="lg" className={classes.cardSectionContainer} >
                <Grid container spacing={3} >
                    { 
                        result.allContentfulCardSection.edges.map((edge) => {
                            return (
                                <Grid xs={12} sm={12} md={4} lg={4} xl={4} key={edge.node.id} className={classes.innerCardContainer}>
                                    <Card >
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={edge.node.picture}
                                                title="Tech Giants"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom className={classes.name}>
                                                    {edge.node.name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <OneLiner />
            </Container>
        </>
    )
}

export default CardSection
