import React, { useState } from "react"
import Address from "./Address"
import Bank from "./Bank"
import BankModal from "./BankModal"
import CreditModal from "./CreditModal"
import Info from "./Info"
import Orders from "./Orders"
import Vouchers from "./Vouchers"

const Main = ({ page }) => {
  const [isOpenCreditModal, setIsOpenCreditModal] = useState(false)
  const [isOpenBankModal, setIsOpenBankModal] = useState(false)
  switch (page) {
    case "information":
      return <Info />

    case "bank":
      return (
        <>
          <Bank
            setIsOpenCreditModal={setIsOpenCreditModal}
            setIsOpenBankModal={setIsOpenBankModal}
          />
          <CreditModal
            isOpenCreditModal={isOpenCreditModal}
            setIsOpenCreditModal={setIsOpenCreditModal}
          />
          <BankModal
            isOpenBankModal={isOpenBankModal}
            setIsOpenBankModal={setIsOpenBankModal}
          />
        </>
      )
    case "address":
      return <Address />
    case "orders":
      return <Orders />
    case "vouchers":
      return <Vouchers />
    default:
      return <></>
  }
}

export default Main
