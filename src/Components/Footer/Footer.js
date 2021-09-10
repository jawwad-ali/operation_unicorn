import React from 'react'
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { useStyles } from "./StyleFooter"

function Footer() {
    const classes = useStyles()

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3} >
                <footer className={classes.footer}>
                    I provide my service on
                    <a className={classes.upwork} href="https://www.upwork.com/freelancers/~01ca7cb675ae58479b">Upwork</a>
                </footer>
            </Grid>
        </Container>
    )
}

export default Footer
