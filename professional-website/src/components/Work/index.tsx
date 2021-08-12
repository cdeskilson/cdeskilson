import React from "react"
import styled from "@emotion/styled"
import { reviewsConfig, publishedConfig, awardsConfig } from "./config"
import Navbar from "../Navbar"
import image from "../../../assets/publication_image.jpg"

const Container = styled.div`
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  margin: 50px 200px;
  @media only screen and (max-width: 736px) {
    margin: 50px 0;
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
  margin-bottom: 28px;
`

const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const PublicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 25px;
  @media only screen and (max-width: 736px) {
    padding-right: 0;
    margin: 0 20px;
  }
`

const Item = styled.div`
  padding-bottom: 15px;
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

const PhotoCredit = styled.div`
  max-width: 300px;
  margin: auto;
  font-size: 10px;
  padding-top: 16px;
`

const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 24px;
  letter-spacing: 3px;
  text-transform: uppercase;
`

const Padding = styled.div`
  padding-bottom: 40px;
`

type Publication = {
  title: string
  journal: string
  link?: string
  year?: string
}

export default function Work() {
  return (
    <Container>
      <Navbar />
      <BodyContainer>
        <PublicationContainer>
          <SectionTitle>Selected Poetry</SectionTitle>
          {publishedConfig.map((publication: Publication) => (
            <Item key={publication.title}>
              <ItemLink
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>{publication.title}</b> in <i>{publication.journal}</i>
              </ItemLink>
            </Item>
          ))}
          <Item>& others</Item>
          <Padding />
          <SectionTitle>Awards</SectionTitle>
          {awardsConfig.map((award: Publication) => (
            <Item key={award.title}>
              <b><span dangerouslySetInnerHTML={{ __html: award.title }} /></b>,  
              {award.journal && (
                award.link ? 
                <ItemLink
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <i>{award.journal}, </i>
                </ItemLink> :  <i>{award.journal}, </i>
              )}
              <span>{award.year}</span>
            </Item>
          ))}
          <Padding />
          <SectionTitle>Reviews</SectionTitle>
          {reviewsConfig.map((publication: Publication) => (
            <Item key={publication.title}>
              <ItemLink
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <b><span dangerouslySetInnerHTML={{ __html: publication.title }} /></b> in <i>{publication.journal}</i>
              </ItemLink>
            </Item>
          ))}
        </PublicationContainer>
      </BodyContainer>
    </Container>
  )
}
