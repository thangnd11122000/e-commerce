import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import React from "react"

const Payment = () => {
  return (
    <div className="section-box checkout__payment">
      <h3 className="section-box__title">Phương thức thanh toán</h3>
      <FormControl>
        <RadioGroup
          aria-labelledby="radio-buttons-payment-group-label"
          defaultValue={1}
          name="radio-buttons-payment-group"
        >
          <FormControlLabel
            value={1}
            control={<Radio />}
            label="Thanh toán bằng tiền mặt"
          />
          <FormControlLabel
            value={2}
            control={<Radio />}
            label="Thanh toán bằng Internet Banking"
          />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default Payment
