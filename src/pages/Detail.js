import { useEffect, useState } from "react"
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
import { MoonLoader } from "react-spinners"
import { css } from "@emotion/react"
import axios from "axios"
import { useCallback } from "react"
import { useAxios } from "../hook/useAxios"

const override = css`
  display: block;
  margin: 60px auto;
`

const Detail = () => {
  const params = useParams()

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [product, setProduct] = useState([])
  const [ratings, setRatings] = useState([])
  const [productsByCategory, setProductsByCategory] = useState([])
  const [loadingProductsByCategory, setLoadingProductsByCategory] =
    useState(true)
  const productApi = useAxios({ url: `/api/product/${params.id}` })
  // const ratingsApi = useAxios({ url: `/ratings?product_id=${params.id}` })

  productApi.error && console.log(productApi.error.message)
  // ratingsApi.error && console.log(ratingsApi.error.message)

  // const getProductsByCategory = useCallback(
  //   (id) => {
  //     axios
  //       .get(`/products?category_id=${product.category_id}`)
  //       .then((res) => {
  //         setProductsByCategory(res.data)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //       .finally(() => {
  //         setLoadingProductsByCategory(false)
  //       })
  //   },
  //   [product.category_id]
  // )
  useEffect(() => {
    if (productApi.response !== null) {
      setProduct(productApi.response.data)
    }
  }, [productApi.response])
console.log(product);
  // useEffect(() => {
  //   if (ratingsApi.response !== null) {
  //     setRatings(ratingsApi.response)
  //   }
  // }, [ratingsApi.response])

  // useEffect(() => {
  //   product && getProductsByCategory(product.category_id)
  // }, [getProductsByCategory, product])

  // const relatedProduct = productsData.filter(
  //   (e) => e.category_id === product.category_id
  // )
  return (
    <>
      <PageLinks links={[{ name: "Sản phẩm 1", link: "/san-pham" }]} />
      <div className="detail">
        <>
          <div className="detail__toggle" onClick={() => setIsOpenModal(true)}>
            <InfoOutlined />
          </div>

          <div className="detail__left">
            {productApi.loading ? (
              <div className="section-box">
                <MoonLoader color="#0032FE" size={40} css={override} />
              </div>
            ) : (
              <Preview product={product} />
            )}

            {productApi.loading ? (
              <div className="section-box">
                <MoonLoader color="#0032FE" size={40} css={override} />
              </div>
            ) : (
              <Description description={product.description} />
            )}

            {/* {ratingsApi.loading ? (
              <div className="section-box">
                <MoonLoader color="#0032FE" size={40} css={override} />
              </div>
            ) : (
              <Review ratings={ratings} />
            )} */}
          </div>
          <div className="detail__right">
            <Services />
            <Specifications
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
            />
          </div>

          <SpecificationsModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        </>
      </div>
      <div className="detail__related">
        <div className="home__header">
          <h3>Sản phẩm liên quan</h3>
          <span>Xem tất cả {">"}</span>
        </div>
        <ProductSlider
          products={productsByCategory}
          loading={loadingProductsByCategory}
        />
      </div>
    </>
  )
}

export default Detail
