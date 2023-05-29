import { handleInputKeyDown, handleInputPaste } from "../../../utils/input";

import MCLogo from "../../../assets/mc_logo.svg";
import VerifiedLogo from "../../../assets/verified.svg";
import {
  StyledCustomInput,
  StyledInputWrapper,
} from "./card-number-input.style";

export function CardNumberInput() {
  return (
    <StyledInputWrapper>
      <div className="inner-wrapper">
        <div>
          <img src={MCLogo} alt="mc-logo" className="mc-logo" />
        </div>
        <StyledCustomInput
          placeholder="0000"
          type="tel"
          pattern="[0-9]{4}"
          maxLength={4}
          onKeyDown={(e) => handleInputKeyDown(e, 4)}
          onPaste={(e) => handleInputPaste(e, 4)}
        />
        -
        <StyledCustomInput
          style={{}}
          placeholder="0000"
          type="tel"
          pattern="[0-9]{4}"
          maxLength={4}
          onKeyDown={(e) => handleInputKeyDown(e, 4)}
          onPaste={(e) => handleInputPaste(e, 4)}
        />
        -
        <StyledCustomInput
          placeholder="0000"
          type="tel"
          pattern="[0-9]{4}"
          maxLength={4}
          onKeyDown={(e) => handleInputKeyDown(e, 4)}
          onPaste={(e) => handleInputPaste(e, 4)}
        />
        -
        <StyledCustomInput
          placeholder="0000"
          type="tel"
          pattern="[0-9]{4}"
          maxLength={4}
          onKeyDown={(e) => handleInputKeyDown(e, 4)}
          onPaste={(e) => handleInputPaste(e, 4)}
        />
      </div>
      <div>
        <img src={VerifiedLogo} alt="verified-icon" className="verified-icon" />
      </div>
    </StyledInputWrapper>
  );
}
