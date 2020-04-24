import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import background from "../../assets/background.jpg"
import About from "../components/About"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <img src={background} />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400|Open+Sans:300,400"
        rel="stylesheet"
      />
    </Helmet>
    <SEO title="About" />
    <About />
    <Link to="/work/">Work</Link>
  </div>
)

export default IndexPage
