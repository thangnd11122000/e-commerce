import Slider from "@mui/material/Slider"
import { formatCurrency } from "../../utils"

function valueText(value) {
  return `${formatCurrency(value)}đ`
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
          sx={{ width: 200 }}
          getAriaLabel={() => "Price slider"}
          value={priceSlider}
          onChange={handleChange}
          valueLabelDisplay="off"
          getAriaValueText={valueText}
          min={minMaxPrice[0]}
          max={minMaxPrice[1]}
        />
      </div>
    </>
  )
}

export default FilterPrice
