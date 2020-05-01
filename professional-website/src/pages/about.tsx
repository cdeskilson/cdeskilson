import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import About from "../components/About"
import SEO from "../components/seo"

import favicon16 from "../../assets/favicon-16x16.png"
import favicon32 from "../../assets/favicon-32x32.png"

console.log({ favicon16 })

const AboutPage = () => (
  <div>
    <Helmet
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: `${favicon32}`,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: `${favicon16}`,
        },
      ]}
    >
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
    </Helmet>
    <SEO title="About" />
    <About />
    <Link to="/work/">Work</Link>
  </div>
)

export default AboutPage
