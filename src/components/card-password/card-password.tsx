import { StyledColumnGrid } from "../form-area/form-section/form-section.style";
import { FormLabel } from "../form-label";
import { Input } from "../input/input";

export function CardPassword() {
  return (
    <StyledColumnGrid>
      <div className="col-1">
        <FormLabel title="Password" subTitle="Enter your Dynamic password" />
      </div>
      <div className="col-2">
        <Input
          // placeholder="********"
          maxLength={8}
          type="password"
          endAdornment
          alignment="leftAlign"
        />
      </div>
    </StyledColumnGrid>
  );
}
