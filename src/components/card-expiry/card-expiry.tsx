import {
  handleInputChange,
  handleInputKeyDown,
  handleInputPaste,
} from "../../utils/input";
import { StyledColumnGrid } from "../form-area/form-section/form-section.style";
import { FormLabel } from "../form-label";
import { InputField } from "../input/input.style";
import { StyledCardExpiryInputWrapper } from "./card-expiry.style";

export function CardExpiry() {
  return (
    <StyledColumnGrid>
      <div className="col-1">
        <FormLabel
          title="Expiry date"
          subTitle="Enter the expiration date of the card"
        />
      </div>
      <StyledCardExpiryInputWrapper id="date-input" className="col-2">
        <InputField
          placeholder="MM"
          type="tel"
          pattern="[0-9]{2}"
          maxLength={2}
          onChange={handleInputChange}
          onKeyDown={(e) => handleInputKeyDown(e, 2, true)}
          onPaste={(e) => handleInputPaste(e, 2)}
        />
        /
        <InputField
          id="year-input"
          placeholder="YY"
          type="tel"
          pattern="[0-9]{2}"
          maxLength={2}
          onChange={handleInputChange}
          onKeyDown={(e) => handleInputKeyDown(e, 2)}
          onPaste={(e) => handleInputPaste(e, 2)}
        />
        {/* </div> */}
      </StyledCardExpiryInputWrapper>
    </StyledColumnGrid>
  );
}
