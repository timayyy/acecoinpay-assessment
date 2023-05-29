import { TbWifi } from "react-icons/tb";
import MCChip from "../../assets/mc-chip.png";
import MCImage from "../../assets/mastercard-2.svg";
import {
  StyledCheckoutInfoWrapper,
  StyledCheckoutWrapper,
} from "./checkout.style";
import { CheckoutDataSection } from "./checkout-data-section/checkout-data-section";

export function CheckoutSection() {
  return (
    <StyledCheckoutWrapper>
      <div className="blue-shadow" />
      <StyledCheckoutInfoWrapper>
        <div className="credit-card">
          <div className="credit-card-head">
            <img className="mc-chip-image" src={MCChip} alt="mc-chip" />
            <TbWifi fontSize={30} />
          </div>
          <div className="credit-card-body">
            <p className="card-holder">jonathan michael</p>
            <div className="card-digits">
              <div className="hidden-digits">
                <span className="digit-circle"></span>
                <span className="digit-circle"></span>
                <span className="digit-circle"></span>
                <span className="digit-circle"></span>
              </div>
              <span className="visible-digits">3456</span>
            </div>
          </div>
          <div className="credit-card-footer">
            <p className="expiry-date">09/22</p>
            <img
              src={MCImage}
              alt="master card logo"
              className="master-card-logo"
            />
          </div>
          <div className="card-circle">
            <div className="inner-circle"></div>
          </div>
        </div>
        <CheckoutDataSection />
      </StyledCheckoutInfoWrapper>
    </StyledCheckoutWrapper>
  );
}
