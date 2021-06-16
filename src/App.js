import React from 'react'

import styled from 'styled-components'
import { colors, fonts } from './styles/variables'

const CardWrapper = styled.div`
  display: flex;

  width: 1440px;

  background: ${colors.blue};
  border-radius: .8rem;
  overflow: hidden;
`;

const CardInfo = styled.div`
  font-family: ${fonts.primary};

  flex: 0 0 50%;
  display: grid;
  place-content: center;

  height: 100%;

  padding: 6rem;

  h1{
    font-size: 2.6rem;
    color: ${colors.whiteMain};

    margin-bottom: 2rem;
  }

  p{
    font-size: 1.2rem;
    line-height: 2.2rem;
    color: ${colors.whiteText};

    margin-bottom: 2rem;
  }

  span{
    color: ${colors.purple};
  }
`

const CardInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin-top: 3rem;

  h3{
    font-size: 1.8rem;
    color: ${colors.whiteMain};

    margin-bottom: .4rem;
  }

  span{
    font-size: .9rem;
    text-transform: uppercase;
    font-family: ${fonts.secondary};
    color: ${colors.whiteHeadings};
  }
`

const Img = styled.div`
  position: relative;
  z-index: 1;

  flex: 0 0 50%;

  img{
    width: 100%;
  }

  &:after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    height: 100%;
    width: 100%;

    background: hsla(277, 64%, 61%, 0.6);
  }
`

const App = () => {
  return (
    <CardWrapper>
      <CardInfo>
        <h1>Get <span>insights</span> that help your business grow.</h1>

        <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

        <CardInfoGrid>
          <div>
            <h3>10k+</h3>
            <span>Companies</span>
          </div>

          <div>
            <h3>314</h3>
            <span>Templates</span>
          </div>

          <div>
            <h3>12M+</h3>
            <span>Queries</span>
          </div>
        </CardInfoGrid>
      </CardInfo>

      <Img>
        <img src='/image-header-desktop.jpg' />
      </Img>
    </CardWrapper>
  )
}

export default App
