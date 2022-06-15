import styled from "styled-components"
import {maxWidthBreakpoint} from "../../theme/globalStyle";

export const CardText = styled.div`
  padding-left: 5%;
  padding-top: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #385f6a;
`
export const ArticleElement = styled.article`
  width: 16%;
  height: 45vh;
  margin: 1%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    box-shadow: 0 0 15px -4px #000000;
  }

  @media only screen and (max-width: ${maxWidthBreakpoint}) {
    width: 45%;
  }
`
export const ArticleImgContainer = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
`
export const ArticleImg = styled.img`
  height: 100%;
`

export const PriceText = styled(CardText)`
  font-weight: bolder;
  font-size: 2rem;
  color: var(--secondary-color)
`
export const InfoText = styled(CardText)`
  color: var(--primary-color)
`
export const ArticlesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
