import React from "react"
import styled from "@emotion/styled"
import Navbar from "../Navbar"
import image from "../../../assets/cd-headshot-2022.jpg"

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
            CD Eskilson is a trans poet, editor, and 
            translator. Their work appears in <i>The Offing</i>,{" "}<i>Pleiades</i>,{" "}<i>Hayden's Ferry Review</i>,
            {" "}<i>Ninth Letter</i>, and others. They are a recipient of the C.D. Wright/Academy of American Poets Prize, as well as a <i>Best of the Net</i>,{" "}<i>Best New Poets,</i> and Pushcart Prize nominee. Their debut poetry collection,{" "}<i>Scream / Queen</i>{" "}, is forthcoming from Acre Books in 2025. 
          </BioItem>
          <BioItem>
            CD is assistant poetry editor for <i>Split Lip Magazine</i> and a member of the editorial board for <i>Exposition Review</i>, where they were previously poetry editor. They also served as the Series Coordinator for the Open Mouth Literary Center. They are currently an MFA candidate at the University of Arkansas where 
            they've received the Walton Family Fellowship in Poetry, the James T. Whithead Award in Poetry, and the Lily Peter Fellowship in Translation. Once, they were in a punk band.
            were in a punk band. 
          </BioItem>
        </Bio>
      </BioContainer>
    </Container>
  )
}
