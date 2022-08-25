import Address from "./Address"
import Info from "./Info"
import Orders from "./Orders"
import Vouchers from "./Vouchers"

const Main = ({ page }) => {
  switch (page) {
    case "thong-tin":
      return <Info />
    case "dia-chi":
      return <Address />
    case "don-hang":
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
