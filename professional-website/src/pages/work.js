import React from "react"
import { Link } from "gatsby"

import Work from "../components/Work"
import SEO from "../components/seo"

const SecondPage = () => (
  <div>
    <SEO title="Work" />
    <Work />
    <Link to="/">About</Link>
  </div>
)

export default SecondPage
