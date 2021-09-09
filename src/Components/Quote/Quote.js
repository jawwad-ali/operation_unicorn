import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useStyles } from "./StyleQuote"
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

function Quote() {

    const classes = useStyles()
    const data = useStaticQuery(
        graphql`
            query  {
                allContentfulQuote {
                    nodes {
                        quoteData {
                            id
                            quote
                            quoteBy
                        }
                    }
                }
            }
        `
    )
    const result = data.allContentfulQuote.nodes[0]

    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={3} className={classes.quoteContainer}>
                    <FormatQuoteIcon className={classes.quoteIcon} />
                    {
                        result.quoteData.map((qData) => (
                            <div key={qData.id}>
                                <Grid xs={12} sm={12} md={12} lg={12} xl={12}  >
                                    <Typography variant="body1" component="p" className={classes.quote}>
                                        {qData.quote}
                                    </Typography>
                                    <div className={classes.quoteByDiv}>
                                        <Typography className={classes.quoteBy}>
                                            {qData.quoteBy}
                                        </Typography>
                                    </div>
                                </Grid>
                            </div>
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}

export default Quote
