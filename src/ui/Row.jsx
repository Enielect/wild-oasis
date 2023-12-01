import { styled, css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(prop) =>
    prop.type === "horizontal" &&
    css`
      align-items: center;
      justify-content: space-between;
    `}

  ${(prop) =>
    prop.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "horizontal",
};

export default Row;
