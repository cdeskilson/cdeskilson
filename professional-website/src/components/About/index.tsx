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
    margin: 50px 40px;
  }
`

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 28px;
`

const BioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
        <img src={image} style={{ height: "450px" }} />
      </ImageContainer>
      <BioContainer>
        <Bio>
          <BioItem>
            Born and raised in Southern California, CD Eskilson is a queer
            nonbinary poet, editor, and educator. Their work appears or is
            forthcoming in <i>Redivider</i>, <i>Barren Magazine</i>,
            <i>Vagabond City Lit</i>, <i>Yes Poetry</i>, and <i>Peach Mag</i>,
            among others.
          </BioItem>
          <BioItem>
            CD is Poetry Editor of <i>Exposition Review</i> and a reader for{" "}
            <i>Split Lip Magazine</i>. They are a past editor of{" "}
            <i>foothill: a journal of poetry</i>.
          </BioItem>
          <BioItem>
            They are an alum of Tin House, Winter Tangerine’s NYC Workshop, and
            a scholarship recipient from the New York State Summer Writers
            Institute. They live in Los Angeles and drink too much coffee.
          </BioItem>
        </Bio>
      </BioContainer>
    </Container>
  )
}
