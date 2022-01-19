import React from "react"
import Content from "./Content"
import Images from "./Images"

const Preview = ({product}) => {
  return (
    <div className="detail__preview">
      <Images />
      <Content product={product} />
    </div>
  )
}

export default Preview
