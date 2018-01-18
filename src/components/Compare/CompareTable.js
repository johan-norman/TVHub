import React, { Component } from 'react'
import CenterWrapper from '../CenterWrapper'
import { Flex, Box } from 'grid-styled'
import styled from 'styled-components'
import CheckMarkIcon from '../images/checkmark.svg'
//import CrossIcon from '../images/cross.svg'

const StyledCompareTable = styled.section`
    .product-table-head {
      background: rgba(5, 17, 33, 0.7);
      height: 100%;
      text-align: center;
      padding: 20px 0px;

      h2 {
        font-size: 17px;
        text-transform: uppercase;
      }

    }

    .product-table-desc {
      position: relative;

      padding: 10px 0px;

      p {
        font-size: 15px;
        margin: 0;
      }

      a {
        color: rgba(186, 186, 186, .6);
        font-weight: 400;
        font-size: 15px;
        &: hover {
          color: #fff;
        }
      }

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        width: 90%;
        left: 0%;
        background: rgba(255, 255, 255, 0.15);
      }

    }

    .product-table-body {
      background: rgba(5, 17, 33, 0.7);
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 1px;
        width: 70%;
        left: 15%;
        background: rgba(255, 255, 255, 0.15);
      }

      span {
        text-align: center;
        width: 100%;
      }

    }

    .yes-container {
      position: relative;
      left: -6px;
      &:before {
        content: url(${CheckMarkIcon});
        width: 17px;
        display: inline-block;
        margin-right: 12px;
      }
    }

    .hidden {
      display: none;
    }

`;

function ResetButton(props) {

  if (!props.visible) {
    return null;
  }

  return (
    <div className='reset-table'>
      <button className="btn-reset-table" onClick={props.onClick}>Återställ tabell</button>
    </div>
  );
}

class CompareTable extends Component {
  constructor () {
    super();
    this.state = {
      tivoIsHidden: false,
      digitalboxIsHidden: false,
      tvmodulIsHidden: false,
      appletvIsHidden: false
    }
    this.resetTable = this.resetTable.bind(this);
  }

  hideTivo () { this.setState({ tivoIsHidden: !this.state.tivoIsHidden }) }
  hideDigitalbox () { this.setState({ digitalboxIsHidden: !this.state.digitalboxIsHidden }) }
  hideTvmodul () { this.setState({ tvmodulIsHidden: !this.state.tvmodulIsHidden }) }
  hideAppletv () { this.setState({ appletvIsHidden: !this.state.appletvIsHidden }) }

  componentDidUpdate() {

  }

  resetTable() {
    this.setState({
      tivoIsHidden: false,
      digitalboxIsHidden: false,
      tvmodulIsHidden: false,
      appletvIsHidden: false
    })
  }

  render() {

    const showResetButton = this.state.tivoIsHidden || this.state.digitalboxIsHidden || this.state.tvmodulIsHidden || this.state.appletvIsHidden;

    return (
      <StyledCompareTable>
        <CenterWrapper>

          <ResetButton onClick={this.resetTable} visible={showResetButton} />

          {/* Table Head */}
          <Flex pt="100px">
            <Box flex='1 0 0' px={15} pt="0px">
            </Box>

            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-head">
                <h2>Tv Hub</h2>
                <span>1 695 SEK</span>
              </div>
            </Box>

            <Box className={this.state.tivoIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-head">
                <button className="btn-hide-column" onClick={this.hideTivo.bind(this)} >
                  <span>X</span>
                </button>
                <h2>Tivo</h2>
                <span>1 695 SEK</span>
              </div>
            </Box>

            <Box className={this.state.digitalboxIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-head">
                <button className="btn-hide-column" onClick={this.hideDigitalbox.bind(this)} >
                  <span>X</span>
                </button>
                <h2>Digital-box</h2>
                <span>1 695 SEK</span>
              </div>
            </Box>

            <Box className={this.state.tvmodulIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-head">
                <button className="btn-hide-column" onClick={this.hideTvmodul.bind(this)} >
                  <span>X</span>
                </button>
                <h2>Tv-modul</h2>
                <span>1 695 SEK</span>
              </div>
            </Box>

            <Box className={this.state.appletvIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-head">
                <button className="btn-hide-column" onClick={this.hideAppletv.bind(this)} >
                  <span>X</span>
                </button>
                <h2>Apple-tv</h2>
                <span>1 695 SEK</span>
              </div>
            </Box>

          </Flex>


          {/* Table Body Row */}
          <Flex>
            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-desc">
                <p>Linjär-tv och tv-guide 1</p>
                <a href="/features">Läs mer</a>
              </div>
            </Box>

            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tivoIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.digitalboxIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tvmodulIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.appletvIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

          </Flex>

          {/* Table Body Row */}
          <Flex>
            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-desc">
                <p>Linjär-tv och tv-guide</p>
                <a href="/features">Läs mer</a>
              </div>
            </Box>

            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tivoIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.digitalboxIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tvmodulIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.appletvIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

          </Flex>

          {/* Table Body Row */}
          <Flex>
            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-desc">
                <p>Linjär-tv och tv-guide</p>
                <a href="/features">Läs mer</a>
              </div>
            </Box>

            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tivoIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.digitalboxIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tvmodulIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.appletvIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

          </Flex>

          {/* Table Body Row */}
          <Flex>
            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-desc">
                <p>Linjär-tv och tv-guide</p>
                <a href="/features">Läs mer</a>
              </div>
            </Box>

            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tivoIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.digitalboxIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tvmodulIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.appletvIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

          </Flex>

          {/* Table Body Row */}
          <Flex>
            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-desc">
                <p>Linjär-tv och tv-guide</p>
                <a href="/features">Läs mer</a>
              </div>
            </Box>

            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tivoIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.digitalboxIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tvmodulIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.appletvIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

          </Flex>

          {/* Table Body Row */}
          <Flex>
            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-desc">
                <p>Linjär-tv och tv-guide</p>
                <a href="/features">Läs mer</a>
              </div>
            </Box>

            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tivoIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.digitalboxIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tvmodulIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.appletvIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

          </Flex>

          {/* Table Body Row */}
          <Flex>
            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-desc">
                <p>Linjär-tv och tv-guide</p>
                <a href="/features">Läs mer</a>
              </div>
            </Box>

            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tivoIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.digitalboxIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tvmodulIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.appletvIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

          </Flex>

          {/* Table Body Row */}
          <Flex>
            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-desc">
                <p>Linjär-tv och tv-guide</p>
                <a href="/features">Läs mer</a>
              </div>
            </Box>

            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tivoIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.digitalboxIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tvmodulIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.appletvIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

          </Flex>

          {/* Table Body Row */}
          <Flex pb="100px">
            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-desc">
                <p>Linjär-tv och tv-guide</p>
                <a href="/features">Läs mer</a>
              </div>
            </Box>

            <Box flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tivoIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.digitalboxIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.tvmodulIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

            <Box className={this.state.appletvIsHidden ? "hidden" : ""} flex='1 0 0' px={15} pt="0px">
              <div className="product-table-body">
                <span className="yes-container">Ja</span>
              </div>
            </Box>

          </Flex>

        </CenterWrapper>
      </StyledCompareTable>
    )
  }
}

export default CompareTable;
