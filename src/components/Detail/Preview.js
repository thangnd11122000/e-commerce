import Content from "./Content"
import Images from "./Images"

const Preview = ({ product }) => {
  return (
    <div className="detail__preview">
      <Images image={product.image} gallery={product.gallery} />
      <Content product={product} />
    </div>
  )
}

export default Preview
