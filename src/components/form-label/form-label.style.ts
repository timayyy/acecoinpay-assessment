import styled from "styled-components";

export const StyledFormLabel = styled.div`
  .title {
    text-transform: capitalize;
    font-size: 1.76rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors?.textMain};
    margin-bottom: 0.5rem;
  }
  .sub-title {
    font-size: 1.232em;
    font-weight: 500;
    color: #8e96a3;
  }
`;
