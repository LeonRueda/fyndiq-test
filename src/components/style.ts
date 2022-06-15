import styled from "styled-components"
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
  }
`
