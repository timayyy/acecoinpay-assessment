import styled from "styled-components";

export const StyledCheckoutDataWrapper = styled.div`
  width: 100%;
  border-radius: 1.6rem;

  .dash-line {
    position: absolute;
    width: 100%;
    border: 2px dashed #d3d3d3;
    display: flex;
    align-items: center;
    left: 0;
    right: 0;

    .left-half-circle,
    .right-half-circle {
      position: absolute;
      height: 3.5rem;
      width: 3.5rem;
      background-color: ${({ theme }) => theme.colors?.white};
      border-radius: 50%;
    }
    .left-half-circle {
      left: -1.5rem;
    }
    .right-half-circle {
      right: -1.5rem;
    }
  }
`;
