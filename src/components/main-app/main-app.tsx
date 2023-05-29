import { CheckoutSection } from "../checkout-section";
import { FormArea } from "../form-area";
import { StyledMainAppContainer, StyledMainSection } from "./main-app.style";
import { MdOutlineClose } from "react-icons/md";

function MainApp() {
  return (
    <StyledMainAppContainer>
      <div className="close-btn">
        <MdOutlineClose fontSize={25} />
      </div>
      <StyledMainSection>
        <div className="form-input-section">
          <FormArea />
        </div>
        <div className="payment-info-section">
          <CheckoutSection />
        </div>
      </StyledMainSection>
    </StyledMainAppContainer>
  );
}

export { MainApp };
