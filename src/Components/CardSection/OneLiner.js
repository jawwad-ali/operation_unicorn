import React from 'react'
import "./StyleCardSection"
import { useStyles } from "./StyleCardSection"
import { graphql, useStaticQuery } from 'gatsby'
import { Typography } from '@material-ui/core'

export default function OneLiner() {
    const result = useStaticQuery(
        graphql`
            query {
                allContentfulCardSectioOneLiner {
                    edges {
                        node {
                            oneLiner
                            id
                        }
                    }
                }
            }
        `
    )
    const classes = useStyles();
    return (
        <>
            <div>
                {
                    result.allContentfulCardSectioOneLiner.edges.map((edge) => (
                        <div key={edge.node.id}>
                            <Typography className={classes.text} >
                                {edge.node.oneLiner}
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </>
    )
}