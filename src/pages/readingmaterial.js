import React from 'react'
import Layout from "../Components/Layout/Layout"
import Home from '../Components/ReadingMaterial'
import SEO from '../Components/seo'

function ReadingMaterial() {
    return (
        <>
            <SEO title="Reading Material" />
            <Layout>
                <Home />
            </Layout>
        </>
    )
}

export default ReadingMaterial
