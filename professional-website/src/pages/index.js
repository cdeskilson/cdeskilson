import React from "react"
import { Link } from "gatsby"

import About from "../components/About"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="About" />
    <About />
    <Link to="/work/">Work</Link>
  </div>
)

export default IndexPage
