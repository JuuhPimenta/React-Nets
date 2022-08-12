import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Section = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: ${colors.black};
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  form {
    background-color: ${colors.black};
    border: 0.2rem solid ${colors.black};
    border-radius: 1rem;
    padding: 1.5rem;
    label{
      color: ${colors.white}
    }
    div {
      background-color: ${colors.white};
      border: 0.15rem solid ${colors.black};
      border-radius: 0.6rem;
      display: flex;
      margin: 0.5rem 0;
      svg {
        height: 3rem;
        width: 3rem;
        padding: 0.3rem;
        color: ${colors.black};
      }
      input {
        width: 100%;
        font-size: 1rem;
        border: 0;
        background-color: transparent;
      }
    }
    p {
      margin-top: 1rem;
      color: ${colors.white};
      a {
        text-decoration: none;
        color: ${colors.white};
        font-weight: bold;
      }
    }
  }
`