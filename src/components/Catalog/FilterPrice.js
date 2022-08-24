import Slider from "@mui/material/Slider"
import { formatCurrency } from "../../utils"

function valueText(value) {
  return `${formatCurrency(value)}đ`
}

function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(0) + "K"
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M"
  } else if (num < 900) {
    return num
  }
}

const FilterPrice = ({ minMaxPrice, priceSlider, setPriceSlider }) => {
  const handleChange = (event, newValue) => {
    setPriceSlider(newValue)
  }

  return (
    <>
      <h2>Giá sản phẩm</h2>
      <div>
        <p style={{ margin: "15px 0 10px" }}>
          Từ {formatCurrency(minMaxPrice[0])}đ - Đến{" "}
          {formatCurrency(minMaxPrice[1])}đ
        </p>
        <Slider
          sx={{ width: "90%" }}
          getAriaLabel={() => "Price slider"}
          value={priceSlider}
          onChange={handleChange}
          // valueLabelDisplay="off"
          getAriaValueText={valueText}
          min={minMaxPrice[0]}
          max={minMaxPrice[1]}
          valueLabelDisplay="auto"
          valueLabelFormat={numFormatter}
        />
      </div>
    </>
  )
}

export default FilterPrice
