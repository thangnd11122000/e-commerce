import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { MoonLoader } from "react-spinners"
import {
  closeDropdown,
  closeMenuSidebar,
  handleDropdown,
} from "../../features/toggle/toggleSlice"
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material"
import { css } from "@emotion/react"

const override = css`
  display: block;
  margin: 20px auto;
`

const CategoriesDropdown = () => {
  const [data, setData] = useState([])

  const dropdownRef = useRef(null)

  const isOpenDropdown = useSelector((state) => state.toggle.isOpenDropdown)
  const { loading, response, error } = useSelector(
    (state) => state.categoriesApi
  )
  error && console.log(error)
  const dispatch = useDispatch()

  const submenuToggle = (e) => e.target.classList.toggle("active")

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(closeDropdown())
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dispatch, dropdownRef])

  useEffect(() => {
    if (response !== null) {
      setData(response)
    }
  }, [response])

  return (
    <div className="cat-dropdown" ref={dropdownRef}>
      <div
        className="cat-dropdown__close"
        onClick={() => {
          dispatch(closeMenuSidebar())
        }}
      >
        Đóng cửa sổ
      </div>
      <div
        className={`cat-dropdown__title ${
          isOpenDropdown ? "cat-dropdown__title--active" : ""
        }`}
        onClick={() => dispatch(handleDropdown(isOpenDropdown))}
      >
        <p>Danh mục sản phẩm</p>
        {isOpenDropdown ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
      </div>
      <ul
        className={`navigation-menu ${
          isOpenDropdown ? "navigation-menu--active" : ""
        }`}
      >
        {loading ? (
          <MoonLoader color="#0032FE" css={override} size={30} />
        ) : (
          <>
            {data &&
              data.map((m, i) => (
                <li key={i}>
                  {m?.submenu ? (
                    <Link
                      to={m.link}
                      className="navigation-menu__link"
                      onClick={(e) => {
                        e.preventDefault()
                        submenuToggle(e)
                      }}
                    >
                      {m.name}
                    </Link>
                  ) : (
                    <Link
                      to={m.link}
                      className="navigation-menu__link"
                      onClick={() => dispatch(closeDropdown())}
                    >
                      {m.name}
                    </Link>
                  )}

                  {m.submenu && (
                    <div className="navigation-submenu">
                      {m.submenu.map((s, sIndex) => (
                        <div
                          key={sIndex}
                          className="navigation-submenu__content"
                        >
                          <p className="navigation-submenu__title">{s.title}</p>
                          <ul className="navigation-submenu__list">
                            {s.link.map((l, lIndex) => (
                              <li
                                key={lIndex}
                                className="navigation-submenu__item"
                              >
                                <Link to={l.path}>{l.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
          </>
        )}
      </ul>
    </div>
  )
}

export default CategoriesDropdown
