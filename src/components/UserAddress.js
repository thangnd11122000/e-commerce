import { Add, BorderColor, Delete } from "@mui/icons-material"
import axios from "axios"
import { useCallback } from "react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {
  deleteAddressAPI,
  getAllAddressAPI,
  getDistrictsAPI,
  getProvincesAPI,
  getWardsAPI,
  setAddressAPI,
} from "../api/address"
import ConfirmDialog from "./ConfirmDialog"
import AddressModal from "./Modal/AddressModal"

const UserAddress = ({ currentAddressId, setCurrentAddressId }) => {
  const { user } = useSelector((state) => state.auth)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    type: "",
    title: "",
    onConfirm: () => {},
  })
  const [allAddress, setAllAddress] = useState([])
  const [provinces, setProvinces] = useState([])
  const [loading, setLoading] = useState(true)
  const [addressSelected, setAddressSelected] = useState(null)

  const handleSetDefaultAddress = (address_id) => {
    setCurrentAddressId(address_id)
    setAddressAPI(address_id, user?.id)
  }

  useEffect(() => {
    getProvincesAPI().then((data) => setProvinces(data))
  }, [])

  const getProvinceDetail = useCallback(
    (province_id) => {
      const currProvince = provinces.filter((p) => p.ProvinceID === province_id)
      return currProvince ? currProvince[0]?.ProvinceName : ""
    },
    [provinces]
  )

  const getDistrictDetail = (province_id, district_id) => {
    return getDistrictsAPI(province_id).then((data) => {
      const currDistrict = data.filter((d) => d.DistrictID === district_id)
      return currDistrict ? currDistrict[0]?.DistrictName : ""
    })
  }

  const getWardDetail = (district_id, ward_id) => {
    return getWardsAPI(district_id).then((data) => {
      const currWard = data.filter((w) => w.WardCode === `${ward_id}`)
      return currWard ? currWard[0]?.WardName : ""
    })
  }

  const getAddressDetail = useCallback(() => {
    setLoading(true)
    user &&
      getAllAddressAPI(user.id)
        .then(async (data) => {
          let temp = []
          data.forEach(async (d) => {
            const { province_id, district_id, ward_id } = d
            d.province_detail = await getProvinceDetail(province_id)
            d.district_detail = await getDistrictDetail(
              province_id,
              district_id
            )
            d.ward_detail = await getWardDetail(district_id, ward_id)
            if (d.province_detail && d.district_detail && d.ward_detail) {
              temp = [...temp, d]
            }
            setAllAddress(temp)
          })
        })
        .then(() => setLoading(false))
        .catch((error) => {
          console.log(error)
          setLoading(false)
        })
  }, [getProvinceDetail, user])

  const getDefaultAddressId = useCallback(() => {
    if (user) {
      axios(`/api/address/default`, { method: "GET" }).then((res) => {
        res.data?.data && setCurrentAddressId(res.data.data.id)
      })
    }
  }, [setCurrentAddressId, user])

  const handleDeleteAddress = (id) => {
    setConfirmDialog({
      isOpen: true,
      type: "confirm",
      title: "Xóa địa chỉ này?",
      onConfirm: () => {
        deleteAddressAPI(id, user?.id).then(
          (code) => code === 200 && getAddressDetail()
        )
      },
    })
  }

  useEffect(() => {
    getAddressDetail()
  }, [getAddressDetail])

  useEffect(() => {
    getDefaultAddressId()
  }, [getDefaultAddressId])

  return (
    <>
      <div className="user-address">
        {!loading &&
          (allAddress || [])?.map((address) => (
            <div
              className={`user-address__item ${
                currentAddressId === address.id && "user-address__item--active"
              }`}
              key={address.id}
              onClick={() => handleSetDefaultAddress(address.id)}
            >
              <div className="user-address__info">
                <h5>{user?.fullname}</h5>
                <div className="user-address__action">
                  <BorderColor
                    onClick={() => {
                      setIsOpenModal(true)
                      setAddressSelected(address)
                    }}
                  />
                  <Delete onClick={() => handleDeleteAddress(address.id)} />
                </div>
              </div>
              <p>{user?.phone}</p>
              <p>{`${address.address}, ${address.ward_detail}, ${address.district_detail}, ${address.province_detail}`}</p>
            </div>
          ))}
        <div
          className="user-address__item user-address__item--center"
          onClick={() => setIsOpenModal(true)}
        >
          <div className="user-address__add">
            <Add />
            <span>Thêm địa chỉ</span>
          </div>
        </div>
      </div>
      <AddressModal
        isOpenModal={isOpenModal}
        addressSelected={addressSelected}
        provinces={provinces}
        onOk={() => {
          getAddressDetail()
          setAddressSelected(null)
          setIsOpenModal(false)
        }}
        onClose={() => {
          setAddressSelected(null)
          setIsOpenModal(false)
        }}
      />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  )
}

export default UserAddress
