import Address from "./Address"
import Info from "./Info"
import Orders from "./Orders"
import Vouchers from "./Vouchers"

const Main = ({ page }) => {
  switch (page) {
    case "information":
      return <Info />

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

// const [isOpenCreditModal, setIsOpenCreditModal] = useState(false)
// const [isOpenBankModal, setIsOpenBankModal] = useState(false)
// case "bank":
//   return (
//     <>
//       <Bank
//         setIsOpenCreditModal={setIsOpenCreditModal}
//         setIsOpenBankModal={setIsOpenBankModal}
//       />
//       <CreditModal
//         isOpenCreditModal={isOpenCreditModal}
//         setIsOpenCreditModal={setIsOpenCreditModal}
//       />
//       <BankModal
//         isOpenBankModal={isOpenBankModal}
//         setIsOpenBankModal={setIsOpenBankModal}
//       />
//     </>
//   )
