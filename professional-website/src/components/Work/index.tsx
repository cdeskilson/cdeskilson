import React from "react"
import styled from "@emotion/styled"
import { config } from "./config"
import Navbar from "../Navbar"
import image from "../../../assets/publication_image.jpg"

const Container = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  margin: 50px 200px;
  @media only screen and (max-width: 736px) {
    margin: 50px 40px;
  }
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  @media only screen and (max-width: 736px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 28px;
`

const PublicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 25px;
  @media only screen and (max-width: 736px) {
    padding-right: 0;
  }
`

const Item = styled.div`
  padding-bottom: 10px;
  font-size: 14px;
`

const ItemLink = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`

type Publication = {
  name: string
  link: string
}

export default function Work() {
  return (
    <Container>
      <Navbar />
      <BodyContainer>
        <ImageContainer>
          <img src={image} style={{ height: "450px" }} />
        </ImageContainer>
        <PublicationContainer>
          {config.map((publication: Publication) => (
            <Item key={publication.name}>
              <ItemLink
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {publication.name}
              </ItemLink>
            </Item>
          ))}
          <Item>& others</Item>
        </PublicationContainer>
      </BodyContainer>
    </Container>
  )
}
