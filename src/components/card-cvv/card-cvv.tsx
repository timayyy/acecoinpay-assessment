import { StyledColumnGrid } from "../form-area/form-section/form-section.style";
import { useState } from "react";
import { FormLabel } from "../form-label";
import { Input } from "../input/input";

export function CardCVV() {
  const [cvvVal, setCvvVal] = useState("");
  function handleCvvChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (isNaN(Number(e.target.value))) {
      return;
    }
    setCvvVal(e.target.value);
  }
  return (
    <StyledColumnGrid>
      <div className="col-1">
        <FormLabel
          title="CVV number"
          subTitle="Enter the 3 or 4 digit number on the card"
        />
      </div>
      <div className="col-2">
        <Input
          type="password"
          endAdornment
          isCvv
          maxLength={4}
          placeholder="****"
          onChange={handleCvvChange}
          value={cvvVal}
        />
      </div>
    </StyledColumnGrid>
  );
}
