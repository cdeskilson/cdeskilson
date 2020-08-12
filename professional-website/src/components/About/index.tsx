import React from "react"
import styled from "@emotion/styled"
import Navbar from "../Navbar"
import image from "../../../assets/portrait-bw.jpg"

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
  max-width: 300px;
  margin: auto;
  font-size: 10px;
  padding-top: 16px;
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
          <img src={image} style={{ height: "450px" }} />
        </Image>
        <PhotoCredit>Photograph by Monica Acosta</PhotoCredit>
      </ImageContainer>
      <BioContainer>
        <Bio>
          <BioItem>
            Born and raised in Southern California, CD Eskilson is a queer 
            nonbinary poet, editor, and educator. Their work appears or is 
            forthcoming in <i>Cosmonauts Avenue</i>,{" "}<i>Anti-Heroin Chic</i>,{" "} 
            <i>Homology Lit</i>,{" "}<i>Redivider</i>,{" "}and <i>Barren Magazine</i>, 
            among others.
          </BioItem>
          <BioItem>
            CD is Poetry Editor of <i>Exposition Review</i> and reads for 
            <i>Split Lip Magazine</i>. They are a past editor of <i>foothill: 
            a journal of poetry</i>. 
          </BioItem>
          <BioItem>
            They are an alum of Tin House, Winter Tangerine’s NYC Workshop, 
            the Speakeasy Project, and a scholarship recipient from the New 
            York State Summer Writers Institute. They are currently an MFA 
            candidate at the University of Arkansas. Ask about their houseplants. 
          </BioItem>
        </Bio>
      </BioContainer>
    </Container>
  )
}
