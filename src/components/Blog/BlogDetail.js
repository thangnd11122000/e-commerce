import { HeartBroken, RemoveRedEye } from "@mui/icons-material"
import { Button } from "@mui/material"
import BlogComment from "./BlogComment"

const BlogDetail = () => {
  return (
    <div className="blog__detail">
      <h1 className="blog__detail--title">Headphone Sony 2022 mới nhất</h1>
      <div className="blog__detail--info">
        <p>Biên tập: Doãn Thắng - 26/01/2022</p>
        <div>
          <p>
            <RemoveRedEye /> <span>4</span>
          </p>
          <p>
            <RemoveRedEye /> <span>4</span>
          </p>
        </div>
      </div>
      <div className="blog__detail--content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam animi a
        corrupti rem fugit mollitia labore tenetur nulla veniam. Voluptatum
        consequuntur sit iste, beatae deserunt asperiores error consectetur
        quaerat molestiae ullam eius aspernatur debitis quas optio corrupti
        voluptatem in obcaecati ut unde? Maiores esse ut doloremque officiis
        reprehenderit voluptate quaerat ullam? Dolores corrupti consectetur
        maxime inventore nam saepe illum, fuga ratione earum aperiam nobis ex
        est, explicabo veritatis voluptatibus doloremque sapiente aspernatur id?
        Delectus, maxime exercitationem quis asperiores dicta unde vitae
        voluptatum sunt doloremque dolorum nesciunt mollitia quae explicabo illo
        aut laudantium assumenda libero tempore ipsum nulla reprehenderit!
        Voluptate. <br /> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam animi a
        corrupti rem fugit mollitia labore tenetur nulla veniam. Voluptatum
        consequuntur sit iste, beatae deserunt asperiores error consectetur
        quaerat molestiae ullam eius aspernatur debitis quas optio corrupti
        voluptatem in obcaecati ut unde? Maiores esse ut doloremque officiis
        reprehenderit voluptate quaerat ullam? Dolores corrupti consectetur
        maxime inventore nam saepe illum, fuga ratione earum aperiam nobis ex
        est, explicabo veritatis voluptatibus doloremque sapiente aspernatur id?
        Delectus, maxime exercitationem quis asperiores dicta unde vitae
        voluptatum sunt doloremque dolorum nesciunt mollitia quae explicabo illo
        aut laudantium assumenda libero tempore ipsum nulla reprehenderit!
        Voluptate. <br />
      </div>
      <div className="blog__detail--btn">
        <Button variant="contained" startIcon={<HeartBroken />} sx={{ mr: 1 }}>
          Thích
        </Button>
        <Button variant="contained" startIcon={<HeartBroken />}>
          Chia sẻ
        </Button>
      </div>

      <BlogComment />
    </div>
  )
}

export default BlogDetail
