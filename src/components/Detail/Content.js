import { Fragment, useEffect, useState } from "react"
import { Rating } from "@mui/material"
import { useDispatch } from "react-redux"
import { addItem } from "../../store/cartItemsSlice"
import { useNavigate } from "react-router-dom"
import getDiscount from "../../utils/getDiscount"
import { formatCurrency } from "../../utils"
import { showNotify } from "../../store/notifySlice"

const Content = ({ product }) => {
  const [rangePrice, setRangePrice] = useState(0)
  const [options, setOptions] = useState({})
  const [numberOptions, setNumberOptions] = useState(0)
  const [selectedOptionsNumber, setSelectedOptionsNumber] = useState([])
  const [selectedOption, setSelectedOption] = useState([])
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [alertMessage, setAlertMessage] = useState("")

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const discountValue = getDiscount(product.discount, product.price)

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1)
    } else {
      setQuantity(quantity === 1 ? 1 : quantity - 1)
    }
  }
  const addToCart = () => {
    if (price > 0) {
      setAlertMessage("")
      dispatch(
        addItem({
          ...product,
          quantity,
          price,
          selectedOption,
          selectedOptionsNumber,
        })
      )
      dispatch(
        showNotify({
          isOpen: true,
          message: "Thêm sản phẩm thành công",
          type: "success",
        })
      )
    } else setAlertMessage("Hãy chọn các biến thể")
  }

  const goToCart = () => {
    if (price > 0) {
      setAlertMessage("")
      dispatch(
        addItem({
          ...product,
          quantity,
          price,
          selectedOption,
          selectedOptionsNumber,
        })
      )
      navigate("/gio-hang")
    } else setAlertMessage("Hãy chọn các biến thể")
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  useEffect(() => {
    setQuantity(1)
  }, [product])

  useEffect(() => {
    if (product && product.list_option.length) {
      let prices = product.list_option
        ?.flat()
        .filter((option) => option.price)
        .map((option) => +option.price)
      prices = [...new Set(prices)]
      prices.length > 0
        ? setRangePrice(
            `${formatCurrency(prices[0])}đ - ${formatCurrency(prices[1])}đ`
          )
        : setRangePrice(prices[0])
    }
  }, [product])

  useEffect(() => {
    if (product && product.list_option.length) {
      const optionsName = product.list_option?.[0]
        .filter((list) => list.option)
        .map((list) => list.option)

      const listOption = product.list_option
        ?.flat()
        .filter((list) => list.option)

      let options = {}
      optionsName.forEach((name) => {
        const temp = listOption.filter((option) => option.option === name)
        options[name] = [
          ...new Map(temp.map((item) => [item["option_id"], item])).values(),
        ]
      })
      setNumberOptions(optionsName?.length || 0)
      setOptions(options)
    }
  }, [product])

  useEffect(() => {
    if (
      product &&
      product.list_option?.length &&
      numberOptions > 0 &&
      numberOptions === selectedOption.length
    ) {
      const optionsId = selectedOption.map((option) => option.option_id).sort()
      setSelectedOptionsNumber(optionsId)
      product.list_option.forEach((list) => {
        let count = 0
        list.forEach((option) => {
          if (optionsId.includes(option.option_id)) {
            count++
          }
        })
        if (count === optionsId.length) {
          const prices = list.filter((option) => option.price)
          setPrice(prices[0].price)
        }
      })
    }
  }, [numberOptions, product, selectedOption])

  const renderOptions = () =>
    Object.keys(options).map((key) => (
      <div key={key} className="detail-content__option">
        <p>{key}:</p>
        <div className="radio-toolbar">
          {options[key].map((option) => (
            <Fragment key={option.option_id}>
              <input
                id={key + option.option_id}
                type="radio"
                name={key}
                value={option.option_id}
                onChange={() => {
                  setAlertMessage("")
                  const temp = selectedOption.filter(
                    (s) => s.option !== option.option
                  )
                  setSelectedOption([...temp, option])
                }}
              />
              <label htmlFor={key + option.option_id}>
                <p>{option.detail}</p>
              </label>
            </Fragment>
          ))}
        </div>
      </div>
    ))

  return (
    <>
      <div className="detail-content">
        <div className="detail-content__name">{product.product_name}</div>
        <div className="detail-content__review">
          <Rating name="content-review" value={product.rating} readOnly />
          <p className="line">|</p>
          <p>3 đánh giá</p>
        </div>
        <div className="detail-content__price">
          {/* {discountValue ? (
            <p className="discount">
              {formatCurrency(discountValue)}đ{" "}
              <del>{formatCurrency(product.price)}đ</del>
            </p>
          ) : (
            <p className="normal">{formatCurrency(product.price)}đ</p>
          )} */}
          {price > 0 ? formatCurrency(price) + "đ" : rangePrice}
        </div>
        <hr />
        <p className="detail-content__description">
          {product.short_description}
        </p>
        {renderOptions()}
        <p style={{ color: "red" }}>{alertMessage}</p>
        <div className="detail__actions">
          <div className="detail__actions--quantity">
            <button onClick={() => updateQuantity("minus")}>-</button>
            <input
              type="number"
              name=""
              id=""
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={() => updateQuantity("plus")}>+</button>
          </div>
          <button className="btn-primary" onClick={addToCart}>
            Thêm vào giỏ
          </button>
          <button className="btn-secondary" onClick={goToCart}>
            Mua ngay
          </button>
        </div>
        <div className="detail-content__socials">
          <p>Thêm vào yêu thích</p>
        </div>
        <div className="detail-content__category">
          <p>Danh mục: {product.category_name}</p>
        </div>
        <div className="detail-content__category">
          <p>Nhà cung cấp: {product.supplier_name}</p>
        </div>
      </div>
    </>
  )
}

export default Content
