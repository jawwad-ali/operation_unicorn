import React from 'react'
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { useStyles } from "./StyleFooter"
import { Link } from "gatsby"

function Footer() {
    const classes = useStyles()

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3} >
                <footer className={classes.footer}>
                    I provide my service on
                    <Link className={classes.upwork} to="https://www.upwork.com/freelancers/~01ca7cb675ae58479b">Upwork</Link>
                </footer>
            </Grid>
        </Container>
    )
}

export default Footer
