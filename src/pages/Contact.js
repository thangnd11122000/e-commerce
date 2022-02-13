import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormControl from "../components/Form/FormControl"
import EmailIcon from "@mui/icons-material/Email"
import { Mail } from "@mui/icons-material"
const Contact = () => {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    feedback: "",
  }
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Nhập họ và tên"),
    email: Yup.string()
      .email("Nhập đúng định dạng email")
      .required("Nhập email"),
    phone: Yup.string().required("Nhập số điện thoại"),
    feedback: Yup.string().required("Nhập phản hồi"),
  })
  const onSubmit = (values) => {
    console.log(values)
  }
  const contacts = [
    {
      title: "Email",
      content: [
        { icon: <Mail />, text: "example@gmail.com" },
        { icon: <Mail />, text: "example@gmail.com" },
      ],
    },
    {
      title: "Liên hệ",
      content: [{ icon: <Mail />, text: "123456789" }],
    },
    {
      title: "Địa chỉ",
      content: [{ icon: <Mail />, text: "Tp HCM" }],
    },
  ]

  return (
    <div className="contact">
      <h1>Liên hệ với chúng tôi</h1>
      <div className="contact__top">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4445190146457!2d106.62615621458986!3d10.853755692269106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1643452427199!5m2!1svi!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <div className="contact__form">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <FormControl
                  control="input"
                  type="text"
                  placeholder="Họ và tên"
                  name="fullName"
                />
                <FormControl
                  control="input"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <FormControl
                  control="input"
                  type="number"
                  placeholder="Số điện thoại"
                  name="phone"
                />
                <FormControl
                  control="textarea"
                  placeholder="Phản hồi"
                  name="feedback"
                />

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="btn-primary"
                >
                  Gửi phản hồi
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="contact__bottom">
        {contacts.map((contact, index) => (
          <div key={index} className="contact__box section-box">
            <h3>{contact.title}</h3>
            {contact.content?.map((c, i) => (
              <div key={i}>
                {c.icon}
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
