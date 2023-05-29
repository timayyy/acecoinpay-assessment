import { Button } from "../../button";
import {
  StyledColumnGrid,
  StyledFormSection,
  StyledFormSectionGrid,
} from "./form-section.style";

import { CardNumber } from "../../card-number";
import { CardCVV } from "../../card-cvv";
import { CardExpiry } from "../../card-expiry";
import { CardPassword } from "../../card-password";

export function FormSection() {
  return (
    <StyledFormSection>
      <StyledFormSectionGrid>
        <CardNumber />
        <CardCVV />
        <CardExpiry />
        <CardPassword />
        <StyledColumnGrid>
          <div className="col-full">
            <Button variant="primary" fullWidth>
              Pay now
            </Button>
          </div>
        </StyledColumnGrid>
      </StyledFormSectionGrid>
    </StyledFormSection>
  );
}
