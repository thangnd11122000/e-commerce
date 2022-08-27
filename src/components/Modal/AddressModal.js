import Modal from "@mui/material/Modal"
import { Close, SearchOutlined } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { useEffect, useMemo, useState } from "react"
import axios from "axios"
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { containsText } from "../../utils/string"
import { insertAddressAPI, updateAddressAPI } from "../../api/address"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { showNotify } from "../../store/notifySlice"

const AddressModal = ({
  isOpenModal,
  currentAddress,
  provinces,
  onClose,
  onOk,
  handleSetDefaultAddress,
}) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])
  const [detail, setDetail] = useState("")
  const [isSubmit, setIsSubmit] = useState(false)

  const resetData = useCallback(() => {
    setSelectedProvince("")
    setSelectedDistrict("")
    setSelectedWard("")
    setDetail("")
  }, [])

  useEffect(() => {
    if (currentAddress) {
      handleChangeProvince(currentAddress.province_id)
      handleChangeDistrict(currentAddress.district_id)
      setSelectedWard(currentAddress.ward_id)
      setDetail(currentAddress.address)
    } else {
      resetData()
    }
  }, [currentAddress, resetData])

  const [selectedProvince, setSelectedProvince] = useState("")
  const [searchProvince, setSearchProvince] = useState("")
  const displayedProvinces = useMemo(
    () =>
      provinces.filter((provinces) =>
        containsText(provinces.ProvinceName, searchProvince)
      ),
    [provinces, searchProvince]
  )
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [searchDistrict, setSearchDistrict] = useState("")
  const displayedDistricts = useMemo(
    () =>
      districts.filter((district) =>
        containsText(district.DistrictName, searchDistrict)
      ),
    [districts, searchDistrict]
  )
  const [selectedWard, setSelectedWard] = useState("")
  const [searchWard, setSearchWard] = useState("")
  const displayedWards = useMemo(
    () => wards.filter((wards) => containsText(wards.WardName, searchWard)),
    [wards, searchWard]
  )

  const handleChangeProvince = (value) => {
    setSelectedProvince(value)
    setSelectedDistrict("")
    setSelectedWard("")
    axios(
      "https://online-gateway.ghn.vn/shiip/public-api/master-data/district",
      {
        method: "POST",
        headers: {
          Token: "897b0fc3-e1e2-11eb-9389-f656af98cb33",
        },
        data: {
          province_id: value,
        },
      }
    ).then((res) => {
      setDistricts(res.data.data)
    })
  }

  const handleChangeDistrict = (value) => {
    setSelectedDistrict(value)
    setSelectedWard("")
    axios(
      "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id",
      {
        method: "POST",
        headers: { Token: "897b0fc3-e1e2-11eb-9389-f656af98cb33" },
        data: { district_id: value },
      }
    ).then((res) => {
      setWards(res.data.data)
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setIsSubmit(true)
    if (selectedProvince && selectedDistrict && selectedWard && detail) {
      if (currentAddress) {
        updateAddressAPI(currentAddress.id, {
          id: user.id,
          customer_id: user.id,
          address: detail,
          district_id: selectedDistrict,
          ward_id: selectedWard,
          province_id: selectedProvince,
        })
          .then(() => {
            dispatch(
              showNotify({
                isOpen: true,
                message: "Sửa địa chỉ thành công",
                type: "success",
              })
            )

            resetData()
            setIsSubmit(false)
            onOk()
          })
          .catch((error) => {
            console.log(error)
            dispatch(
              showNotify({
                isOpen: true,
                message: "Sử địa chỉ thất bại",
                type: "error",
              })
            )
          })
      } else {
        insertAddressAPI({
          id: user.id,
          customer_id: user.id,
          address: detail,
          district_id: selectedDistrict,
          ward_id: selectedWard,
          province_id: selectedProvince,
        })
          .then(() => {
            dispatch(
              showNotify({
                isOpen: true,
                message: "Thêm địa chỉ thành công",
                type: "success",
              })
            )
            resetData()
            setIsSubmit(false)
            onOk()
          })
          .catch((error) => {
            console.log(error)
            dispatch(
              showNotify({
                isOpen: true,
                message: "Đã có lỗi xảy ra",
                type: "error",
              })
            )
          })
      }
    }
  }

  return (
    <>
      <Modal
        open={isOpenModal}
        onClose={onClose}
        aria-labelledby="address-title"
        aria-describedby="address-description"
      >
        <div className="modal section-box">
          <Close onClick={onClose} />
          <form onSubmit={onSubmit} id="address">
            <div className="modal__box" style={{ marginBottom: "30px" }}>
              <h3>Thông tin người nhận</h3>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Họ và tên"
                variant="outlined"
                value={user?.fullname}
                disabled
              />
              <br />
              <br />
              <div className="modal__flex">
                <TextField
                  sx={{ width: "49%" }}
                  id="outlined-basic"
                  label="Số điện thoại"
                  variant="outlined"
                  value={user?.phone}
                  disabled
                />
                <TextField
                  sx={{ width: "49%" }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={user?.email}
                  disabled
                />
              </div>
            </div>
            <div className="modal__box">
              <h3>Địa chỉ nhận hàng</h3>
              <div className="modal__flex">
                <FormControl
                  sx={{ width: "49%" }}
                  error={isSubmit && !selectedProvince}
                >
                  <InputLabel id="search-province">Tỉnh / Thành phố</InputLabel>
                  <Select
                    name="abc"
                    MenuProps={{ autoFocus: false }}
                    labelId="search-province"
                    id="search-province"
                    value={selectedProvince}
                    label="Tỉnh / Thành phố"
                    onChange={(e) => handleChangeProvince(e.target.value)}
                    onClose={() => setSearchProvince("")}
                  >
                    <ListSubheader>
                      <TextField
                        size="small"
                        autoFocus
                        placeholder="Tìm kiếm tỉnh / thành phố"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchOutlined />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setSearchProvince(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== "Escape") {
                            e.stopPropagation()
                          }
                        }}
                      />
                    </ListSubheader>
                    {displayedProvinces.map((option, i) => (
                      <MenuItem key={i} value={option.ProvinceID}>
                        {option.ProvinceName}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    {isSubmit &&
                      !selectedProvince &&
                      "Vui lòng chọn tỉnh / thành phố"}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  sx={{ width: "49%" }}
                  error={isSubmit && !selectedDistrict}
                >
                  <InputLabel id="search-district">Quận / Huyện</InputLabel>
                  <Select
                    MenuProps={{ autoFocus: false }}
                    labelId="search-district"
                    id="search-district"
                    value={selectedDistrict}
                    label="Quận / Huyện"
                    onChange={(e) => handleChangeDistrict(e.target.value)}
                    onClose={() => setSearchDistrict("")}
                  >
                    <ListSubheader>
                      <TextField
                        size="small"
                        autoFocus
                        placeholder="Tìm kiếm quận / huyện"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchOutlined />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setSearchDistrict(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== "Escape") {
                            e.stopPropagation()
                          }
                        }}
                      />
                    </ListSubheader>
                    {displayedDistricts.map((option, i) => (
                      <MenuItem key={i} value={option.DistrictID}>
                        {option.DistrictName}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    {isSubmit &&
                      !selectedDistrict &&
                      "Vui lòng chọn quận / huyện"}
                  </FormHelperText>
                </FormControl>
              </div>
              <br />
              <div className="modal__flex">
                <FormControl
                  sx={{ width: "49%" }}
                  error={isSubmit && !selectedWard}
                >
                  <InputLabel id="search-ward">Phường / xã</InputLabel>
                  <Select
                    MenuProps={{ autoFocus: false }}
                    labelId="search-ward"
                    id="search-ward"
                    value={selectedWard}
                    label="Phường / xã"
                    onChange={(e) => setSelectedWard(e.target.value)}
                    onClose={() => setSearchWard("")}
                  >
                    <ListSubheader>
                      <TextField
                        size="small"
                        autoFocus
                        placeholder="Tìm kiếm phường / xã"
                        fullWidth
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchOutlined />
                            </InputAdornment>
                          ),
                        }}
                        onChange={(e) => setSearchWard(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== "Escape") {
                            e.stopPropagation()
                          }
                        }}
                      />
                    </ListSubheader>
                    {displayedWards.map((option, i) => (
                      <MenuItem key={i} value={option.WardCode}>
                        {option.WardName}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>
                    {isSubmit && !selectedWard && "Vui lòng chọn phường / xã"}
                  </FormHelperText>
                </FormControl>

                <TextField
                  sx={{ width: "49%" }}
                  id="outlined-basic"
                  label="Địa chỉ chi tiết"
                  variant="outlined"
                  onChange={(e) => setDetail(e.target.value)}
                  value={detail}
                  error={isSubmit && !detail}
                  helperText={
                    isSubmit && !detail && "Vui lòng nhập địa chỉ chi tiết"
                  }
                />
              </div>
            </div>
            <br />
            <div className="modal__button">
              <button type="button" className="btn-secondary" onClick={onClose}>
                Hủy
              </button>
              <button type="submit" className="btn-primary">
                Lưu
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default AddressModal
