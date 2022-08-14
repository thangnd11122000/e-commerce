import { useState } from "react"
import UserAddress from "../UserAddress"

const Address = () => {
  const [currentAddressId, setCurrentAddressId] = useState(null)
  return (
    <div className="section-box">
      <div className="user__header">
        <h3>Địa chỉ</h3>
      </div>
      <div className="user__body">
        <UserAddress
          currentAddressId={currentAddressId}
          setCurrentAddressId={setCurrentAddressId}
        />
      </div>
    </div>
  )
}

export default Address
