import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import avatar from "../../assets/img/common/user.png"
import LazyLoad from "react-lazyload"

const Info = () => {
  const { user } = useSelector((state) => state.auth)
  const [gender, setGender] = useState("female")
  const [fullname, setFullname] = useState(user?.fullname)

  const handleChangeGender = (event) => {
    setGender(event.target.value)
  }
  const handleChangeFullname = (event) => {
    setFullname(event.target.value)
  }
  useEffect(() => {
    setFullname(user?.fullname)
  }, [user?.fullname])

  return (
    <div className="section-box">
      <div className="user__header">
        <h3>Thông tin của tôi</h3>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>
      <div className="user__body user--flex">
        <form className="user-form">
          <div className="user-form__group">
            <p>Họ và tên</p>
            <input
              type="text"
              value={fullname || ""}
              onChange={handleChangeFullname}
              required
            />
          </div>
          <div className="user-form__group">
            <p>Email</p>
            <p>{user?.email}</p>
          </div>
          <div className="user-form__group">
            <p>Số điện thoại</p>
            <p>{user?.phone}</p>
          </div>

          <div className="user-form__group">
            <p>Giới tính</p>
            <div className="user-form__radio">
              <FormControl>
                <RadioGroup
                  aria-labelledby="gender"
                  name="gender"
                  value={gender}
                  onChange={handleChangeGender}
                  row
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="user-form__button">
            <button className="btn-primary">Lưu</button>
          </div>
        </form>
        <div className="user__avatar">
          {user?.avatar ? (
            <LazyLoad>
              <img src={user.avatar} alt="" />
            </LazyLoad>
          ) : (
            <LazyLoad>
              <img src={avatar} alt="" />
            </LazyLoad>
          )}
          <button className="btn-primary">Chọn ảnh</button>
        </div>
      </div>
    </div>
  )
}

export default Info
