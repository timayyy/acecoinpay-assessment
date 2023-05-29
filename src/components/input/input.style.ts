import styled from "styled-components";
import { IInputProps } from "./i-input";

export const AdornmentWrapperDiv = styled.div`
  position: absolute;
  cursor: pointer;
  height: 2.5rem;

  &.end {
    right: 2rem;
  }
`;

export const InputFieldWrapperDiv = styled.div<{
  fullWidth?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  ${({ fullWidth }) => fullWidth && "width: 100%;"};
  z-index: 100;
`;

export const InputField = styled.input<IInputProps>`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.8rem;
  font-weight: 600;
  appearance: none;
  border-radius: 6px;
  padding: 0 ${({ endAdornment }) => (endAdornment ? "5.5rem 0 2rem" : "2rem")};
  border: 1px solid ${({ theme }) => theme.colors?.inputBorder};
  background-color: #fbfbfb;
  height: 7rem;
  color: ${({ theme }) => theme.colors?.textMain};
  text-align: ${({ alignment }) =>
    alignment === "leftAlign" ? "left" : "center"};
  letter-spacing: 0.3em;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors?.activeBorder};
    background-color: #ecf3fe;
    color: ${({ theme }) => theme.colors?.activeBorder};

    .dots-icon {
      color: ${({ theme }) => theme.colors?.activeBorder};
    }
  }
  &::placeholder {
    font-weight: 400;
    opacity: 0.5;
  }
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const PasswordControlButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  .dots-icon {
    opacity: 0.5;
  }
`;
