import { Alert, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import React from "react"
import { useAxios } from "../../hook/useAxios"

const Payment = ({ paymentType,setPaymentType }) => {
  const { response } = useAxios({ url: "/api/payments" })
  return (
    <div className="section-box checkout__payment">
      <h3 className="section-box__title">Phương thức thanh toán</h3>
      {response?.data && (
        <FormControl>
          <RadioGroup
            aria-labelledby="radio-buttons-payment-group-label"
            name="radio-buttons-payment-group"
          >
            {response.data.map((payment) => (
              <FormControlLabel
                key={payment.id}
                value={payment.id}
                control={<Radio />}
                label={payment.payment_name}
                onClick={() => setPaymentType(payment.id)}
              />
            ))}
            {!paymentType && <Alert variant="outlined" severity="warning">Hãy chọn phương thức thanh toán!</Alert> }
          </RadioGroup>
        </FormControl>
      )}
    </div>
  )
}

export default Payment
