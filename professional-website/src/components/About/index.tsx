import React from "react"
import styled from "@emotion/styled"
import Navbar from "../Navbar"
import image from "../../../assets/cd-headshot.jpg"

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

const ImageContainer = styled.div`
  margin-bottom: 28px;
`

const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const PhotoCredit = styled.div`
  max-width: 450px;
  margin: auto;
  font-size: 10px;
  padding-top: 16px;
  @media only screen and (max-width: 736px) {
    max-width: 325px;
  }
`

const BioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 736px) {
    margin: 0 20px;
  }
`

const Img = styled.img`
  height: 450px;
  border-radius: 34%;
  @media only screen and (max-width: 736px) {
    height: 325px;
  }
`

const Bio = styled.div`
  font-size: 17px;
  max-width: 450px;
`

const BioItem = styled.div`
  padding-bottom: 20px;
`

export default function About() {
  return (
    <Container>
      <Navbar />
      <ImageContainer>
        <Image>
          <Img src={image} />
        </Image>
        <PhotoCredit>Photograph by Monica Acosta</PhotoCredit>
      </ImageContainer>
      <BioContainer>
        <Bio>
          <BioItem>
            Born and raised in Los Angeles, CD Eskilson is a trans poet, editor, and 
            educator. Their work appears or is forthcoming in <i>Hobart</i>, <i>Pleiades</i>, <i>Cosmonauts Avenue</i>,
            {" "}the <i>Washington Square Review</i>,{" "}the <i>minnesota review</i>,
            {" "}and and they are a 2022 <i>Best of the Net</i> Finalist.
          </BioItem>
          <BioItem>
            CD is assistant poetry editor for <i>Split Lip Magazine</i> and poetry editor of <i>Exposition Review</i>. They serve as outreach coordinator for the Open Mouth Literary Center based in Fayetteville, Arkansas.
          </BioItem>
          <BioItem>
            CD is currently an MFA candidate at the University of Arkansas where 
            they received the Walton Family Fellowship in Poetry. They’re an alum 
            of Tin House, The Speakeasy Project, and Winter Tangerine. Once, they 
            were in a punk band. 
          </BioItem>
        </Bio>
      </BioContainer>
    </Container>
  )
}
