import React from "react"
import LandingPage from "../Components/LandingPage/LandingPage"
import Layout from "../Components/Layout/Layout"
import SEO from "../Components/seo"

export default function Home() {
  return <>
    <SEO title="Home" />
    <Layout>
      <LandingPage />
    </Layout>
  </>
}
