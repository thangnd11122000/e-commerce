import Slider from "@mui/material/Slider"

function valueText(value) {
  return `${value}$`
}

const FilterPrice = ({ minMaxPrice, priceSlider, setPriceSlider }) => {
  const marks = [
    {
      value: minMaxPrice[0],
      label: `${minMaxPrice[0]}d`,
    },
    {
      value: minMaxPrice[1],
      label: `${minMaxPrice[1]}d`,
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
          Ranger: {minMaxPrice[0]}$ - {minMaxPrice[1]}$
        </p>
        <Slider
          sx={{ width: 200 }}
          getAriaLabel={() => "Price slider"}
          value={priceSlider}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valueText}
          min={minMaxPrice[0]}
          max={minMaxPrice[1]}
          marks={marks}
        />
      </div>
    </>
  )
}

export default FilterPrice
