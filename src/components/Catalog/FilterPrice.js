import Slider from "@mui/material/Slider"
import { formatCurrency } from "../../utils"

function valueText(value) {
  return `${formatCurrency(value)}đ`
}

const FilterPrice = ({ minMaxPrice, priceSlider, setPriceSlider }) => {
  const marks = [
    {
      value: minMaxPrice[0],
      label: `${formatCurrency(minMaxPrice[0])}đ`,
    },
    {
      value: minMaxPrice[1],
      label: `${formatCurrency(minMaxPrice[1])}đ`,
    },
  ]

  const handleChange = (event, newValue) => {
    setPriceSlider(newValue)
  }

  return (
    <>
      <h2>Giá </h2>
      <div>
        <p>
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
          // marks={marks}
        />
      </div>
    </>
  )
}

export default FilterPrice
