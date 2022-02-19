import { useState } from "react"
import { useParams } from "react-router-dom"
import Description from "../components/Detail/Description"
import Preview from "../components/Detail/Preview"
import Review from "../components/Detail/Review"
import Services from "../components/Detail/Services"
import PageLinks from "../components/PageLinks"
import ProductSlider from "../components/Product/ProductSlider"
import { productsData } from "../data"
import Specifications from "../components/Detail/Specifications"
import SpecificationsModal from "../components/Detail/SpecificationsModal"
import { InfoOutlined } from "@mui/icons-material"
const Detail = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const params = useParams()
  const product = productsData.find((e) => e.id === parseInt(params.id))
  const relatedProduct = productsData.filter(
    (e) => e.category_id === product.category_id
  )
  return (
    <>
      <PageLinks links={[{ name: "Sản phẩm 1", link: "/catalog" }]} />
      <div className="detail">
        <div className="detail__toggle" onClick={() => setIsOpenModal(true)}>
          <InfoOutlined />
        </div>

        <div className="detail__left">
          <Preview product={product} />
          <Description />
          <Review />
        </div>
        <div className="detail__right">
          <Services />
          <Specifications
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        </div>
      </div>
      <div className="detail__related">
        <div className="home__header">
          <h3>Sản phẩm liên quan</h3>
          <span>Xem tất cả {">"}</span>
        </div>
        <ProductSlider products={relatedProduct} />
      </div>

      <SpecificationsModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </>
  )
}

export default Detail
