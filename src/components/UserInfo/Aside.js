import { Close, ExpandLess, ExpandMore, Person } from "@mui/icons-material"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeMenuUser } from "../../store/toggleSlice"
import avatar from "../../assets/img/common/user.png"
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { BsCardList, BsPersonSquare } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import LazyLoad from "react-lazyload"

const Aside = ({ setPage }) => {
  const { user } = useSelector((state) => state.auth)
  const menuRef = useRef(null)
  const isOpenMenuUser = useSelector((state) => state.toggle.isOpenMenuUser)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        dispatch(closeMenuUser())
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dispatch])

  return (
    <div
      className={`user__aside section-box  ${
        isOpenMenuUser ? "user__aside--active" : ""
      }`}
      ref={menuRef}
    >
      <Close
        className="user__aside--icon"
        onClick={() => dispatch(closeMenuUser())}
      />
      <div className="user__info">
        {user?.avatar ? (
          <LazyLoad>
            <img src={user.avatar} alt="" />
          </LazyLoad>
        ) : (
          <LazyLoad>
            <img src={avatar} alt="" />
          </LazyLoad>
        )}
        <div>
          <span>Xin chào</span>
          <p>{user?.fullname}</p>
        </div>
      </div>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Hồ sơ" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                setPage("thong-tin")
                dispatch(closeMenuUser())
              }}
            >
              <ListItemIcon>
                <BsPersonSquare />
              </ListItemIcon>
              <ListItemText primary="Thông tin" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                setPage("dia-chi")
                dispatch(closeMenuUser())
              }}
            >
              <ListItemIcon>
                <GoLocation />
              </ListItemIcon>
              <ListItemText primary="Địa chỉ" />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
        <ListItemButton
          onClick={() => {
            setPage("don-hang")
            dispatch(closeMenuUser())
          }}
        >
          <ListItemIcon>
            <BsCardList />
          </ListItemIcon>
          <ListItemText primary="Đơn hàng" />
        </ListItemButton>
      </List>
    </div>
  )
}

export default Aside
