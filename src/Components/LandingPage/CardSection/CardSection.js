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

function CardSection() {
    const classes = useStyles();

    const data = useStaticQuery(
        graphql`
            query  {
                allContentfulCard {
                    nodes {
                        card {
                            id
                            name
                            image
                        }
                        oneliner {
                            oneliner
                        }
                    }
                }
            }
        `
    )
    const result = data.allContentfulCard.nodes[0]
    return (
        <>
            <Container maxWidth="lg" className={classes.cardSectionContainer} >
                <Grid container spacing={3} >
                    {
                        result.card.map((edge) => {
                            return (
                                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} key={edge.id} className={classes.innerCardContainer}>
                                    <Card >
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={edge.image}
                                                title="Tech Giants"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom component={"span"} className={classes.name}>
                                                    {edge.name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })
                    }
                    <div className={classes.oneLinerContainer}>
                        <Typography component={"div"} className={classes.text}>
                            {result.oneliner.oneliner}
                        </Typography>
                    </div>
                </Grid>
            </Container>
        </>
    )
}
export default CardSection