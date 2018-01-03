import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import CompareTable from '../components/Compare/CompareTable.js'
import PriceQuiz from '../components/Compare/PriceQuiz.js'
import CenterWrapper from '../components/CenterWrapper'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'

const StyledHeadline = styled.section`
    text-align: center;
    h1 {
      text-align: center;
      text-transform: uppercase;
      font-weight: 300;
      margin: 0 auto;
      max-width: 855px;
      font-size: 3.1vw;
      color: #FFFFFF;
      letter-spacing: 0;
    }
`;

export default () => (
  <Page>
    <CenterWrapper>
      <Flex>
        <Box width={1} px={1} pt="100px">
          <StyledHeadline>
            <h1>Den första boxen som kopplar samman all din digitala underhållning med dina tv-kanaler</h1>
          </StyledHeadline>
        </Box>
      </Flex>
    </CenterWrapper>
    <CompareTable></CompareTable>
    <PriceQuiz></PriceQuiz>
    <Helmet title='Compare' />
  </Page>
)
