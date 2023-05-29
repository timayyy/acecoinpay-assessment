import { MdEdit } from "react-icons/md";
import { StyledColumnGrid } from "../form-area/form-section/form-section.style";
import { FormLabel } from "../form-label";
import { StyledCardNumberWrapper } from "./card-number.style";
import { CardNumberInput } from "./card-number-input";

export function CardNumber() {
  return (
    <>
      <StyledColumnGrid>
        <StyledCardNumberWrapper className="col-full">
          <FormLabel
            title="card number"
            subTitle="Enter the 15-digit card number on the card"
          />
          <div className="edit-icon">
            <MdEdit fontSize={20} />
            <p className="edit-text">Edit</p>
          </div>
        </StyledCardNumberWrapper>
      </StyledColumnGrid>
      <StyledColumnGrid>
        <div className="col-full">
          <CardNumberInput />
        </div>
      </StyledColumnGrid>
    </>
  );
}
