import React from "react"
import styled from '@emotion/styled';
import { config } from './config';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 200px;
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Bio = styled.div`
  font-size: 17px;
  max-width: 525px;
`;

const BioItem = styled.div`
  padding-bottom: 20px;
`;

// interface AboutProps {
//   bio_config?: [string];
// }

export default function About(props) {
  return (
    <Container>
      <BioContainer>
        <Bio>
        {config.map(item => <BioItem>{item}</BioItem>)}
        </Bio>
      </BioContainer>
    </Container>
  )
};
