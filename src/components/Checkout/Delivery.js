import UserAddress from "../UserAddress"

const Delivery = ({ currentAddressId, setCurrentAddressId }) => {
  return (
    <div className="section-box checkout__delivery">
      <h3 className="section-box__title">Thông tin nhận hàng</h3>
      <UserAddress
        currentAddressId={currentAddressId}
        setCurrentAddressId={setCurrentAddressId}
      />
    </div>
  )
}

export default Delivery
