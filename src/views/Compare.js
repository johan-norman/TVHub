import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import CompareTable from '../components/Compare/CompareTable.js'
import PriceQuiz from '../components/Compare/PriceQuiz.js'
import CenterWrapper from '../components/CenterWrapper'

export default () => (
  <Page>
    <CenterWrapper>
      <h1>Den första boxen som kopplar samman all din digitala underhållning med dina tv-kanaler</h1>
    </CenterWrapper>
    <CompareTable></CompareTable>
    <PriceQuiz></PriceQuiz>
    <Helmet title='Compare' />
  </Page>
)
