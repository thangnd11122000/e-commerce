import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Description from "../components/Detail/Description"
import Preview from "../components/Detail/Preview"
import Review from "../components/Detail/Review"
import Services from "../components/Detail/Services"
import PageLinks from "../components/PageLinks"
import ProductSlider from "../components/Product/ProductSlider"
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

  const [product, setProduct] = useState([])
  const [productsByCategory, setProductsByCategory] = useState([])
  const [loadingProductsByCategory, setLoadingProductsByCategory] =
    useState(true)
  const productApi = useAxios({ url: `/api/product/${params.id}` })

  const getProductsByCategory = useCallback((id) => {
    axios
      .get(`/api/product?category_id=${id}&_page=1&_limit=12`)
      .then((res) => {
        setProductsByCategory(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoadingProductsByCategory(false)
      })
  }, [])

  useEffect(() => {
    if (productApi.response !== null) {
      setProduct(productApi.response.data)
    }
  }, [productApi.response])

  // useEffect(() => {
  //   if (ratingsApi.response !== null) {
  //     setRatings(ratingsApi.response)
  //   }
  // }, [ratingsApi.response])

  useEffect(() => {
    product?.category_id && getProductsByCategory(product.category_id)
  }, [getProductsByCategory, product])

  // const relatedProduct = productsData.filter(
  //   (e) => e.category_id === product.category_id
  // )

  return (
    <>
      <PageLinks links={[{ name: "Sản phẩm 1", link: "/san-pham" }]} />
      <div className="detail">
        <>
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
            <Review productId={product?.id} />
          </div>
          <div className="detail__right">
            <Services />
            <img
              style={{ borderRadius: "5px", width: "100%" }}
              src="https://i.pinimg.com/564x/9c/9a/8c/9c9a8c86a69d8e7ea15d4c0bcd6770f1.jpg"
              alt="quang-cao"
              width={100}
            />
          </div>
        </>
      </div>
      <div className="detail__related">
        <div className="home__header">
          <h3>Sản phẩm liên quan</h3>
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
