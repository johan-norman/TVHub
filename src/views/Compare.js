import React from 'react'
import Helmet from 'react-helmet'
import Page from '../components/Page'
import CompareTable from '../components/Compare/CompareTable.js'
import PriceQuiz from '../components/Compare/PriceQuiz.js'

export default () => (
  <Page>
    <h1>Den första boxen som kopplar samman all din digitala underhållning med dina tv-kanaler</h1>
    <CompareTable></CompareTable>
    <PriceQuiz></PriceQuiz>
    <Helmet title='Compare' />
  </Page>
)
