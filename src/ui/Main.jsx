import { styled } from "styled-components";

const StyledMain = styled.main`
  background-color: var(--color-grey-100);
  overflow: auto;
  padding: 4rem 4.8rem 6.4rem;
`;

//eslint-disable-next-line
function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
