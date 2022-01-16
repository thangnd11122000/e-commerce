const options = [
  { value: "", name: "Mặc định" },
  { value: "DISCOUNT", name: "Khuyến mãi" },
  { value: "DOWN", name: "Giá giảm dần" },
  { value: "UP", name: "Giá tăng dần" },
]

const Sorting = ({ setSorting }) => {
  const handleChange = (event) => {
    setSorting(event.target.value)
  }

  return (
    <div className="catalog__sorting">
      <label htmlFor="sorting">Sắp xếp</label>
      <select id="sorting" onClick={handleChange}>
        {options.map((o, i) => (
          <option key={i} value={o.value}>
            {o.name}
          </option>
        ))}

        {/* <option value="BESTSELLER">Bán chạy</option> */}
      </select>
    </div>
  )
}

export default Sorting
