import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import About from "../components/About"
// import Home from "../components/Home"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Playfair+Display&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="assets/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="assets/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="assets/favicon-16x16.png"
      />
    </Helmet>
    <SEO title="About" />
    <About />
  </div>
)

export default IndexPage
