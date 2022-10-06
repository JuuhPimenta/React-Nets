import styled from "styled-components"
import { colors } from "styles/GlobalStyle"
export const Cabecalho = styled.header`
  display: flex;
  border-bottom: 0.5rem solid ${colors.black};
  background-color: ${colors.black};
  picture svg {
    height: 6rem;
    width: 6rem;
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      li {
        margin: 0 1.2em;
        a {
          text-decoration: none;
          font-size: 1.5em;
          color: ${colors.white};
        }
        button {
          display: flex;
          gap: 0.5rem;  background-color: ${colors.black}
          background-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
`