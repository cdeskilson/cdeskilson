import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import About from "../components/About"
import SEO from "../components/seo"

const AboutPage = () => (
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
    </Helmet>
    <SEO title="About" />
    <About />
    <Link to="/work/">Work</Link>
  </div>
)

export default AboutPage
