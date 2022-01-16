const Display = ({ layout, setLayout, setIsSwitchLayout, width }) => {
  const handleClick = (number) => {
    setLayout(number)
    setIsSwitchLayout(true)
  }

  return (
    <div
      className="catalog__display"
      style={{ display: width < 600 ? "none" : "" }}
    >
      <div
        className={`catalog__display--column ${layout === 2 && "active"}`}
        onClick={() => handleClick(2)}
      >
        <span></span>
        <span></span>
      </div>
      <div
        className={`catalog__display--column ${layout === 3 && "active"}`}
        onClick={() => handleClick(3)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`catalog__display--column ${layout === 4 && "active"}`}
        onClick={() => handleClick(4)}
        style={{ display: width < 800 ? "none" : "" }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`catalog__display--column ${layout === 5 && "active"}`}
        onClick={() => handleClick(5)}
        style={{ display: width < 900 ? "none" : "" }}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <List
        
      >
        <span></span>
        <span></span>
        <span></span>
      </List> */}
    </div>
  )
}

export default Display
