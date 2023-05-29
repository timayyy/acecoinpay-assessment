import { GiSwipeCard } from "react-icons/gi";
import { StyledHeader } from "./header.style";

export function Header() {
  return (
    <StyledHeader>
      <div className="logo-wrapper">
        <div className="logo-circle">
          <GiSwipeCard fontSize={25} />
        </div>
        <h1 className="logo-text">
          AceCoin<span className="light-text">Pay</span>
        </h1>
      </div>
      <div className="clock-timer">
        <div className="timer-number">0</div>
        <div className="timer-number">1</div>
        <div className="timer-divider">:</div>
        <div className="timer-number">1</div>
        <div className="timer-number">9</div>
      </div>
    </StyledHeader>
  );
}
