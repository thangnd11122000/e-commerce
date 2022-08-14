import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MoonLoader } from "react-spinners"
import {
  closeDropdown,
  closeMenuSidebar,
  handleDropdown,
} from "../../store/toggle/toggleSlice"
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material"
import { css } from "@emotion/react"

const override = css`
  display: block;
  margin: 20px auto;
`

const CategoriesDropdown = () => {
  const dropdownRef = useRef(null)
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const isOpenDropdown = useSelector((state) => state.toggle.isOpenDropdown)
  const {
    loading,
    response: categories,
    error,
  } = useSelector((state) => state.categoriesApi)
  error && console.log(error)
  const dispatch = useDispatch()

  const submenuToggle = (e) => e.target.classList.toggle("active")

  function getWindowSize() {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
  }

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
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  useEffect(() => {
    if (windowSize.innerWidth > 1200) {
      dispatch(closeMenuSidebar())
    }
  }, [dispatch, windowSize.innerWidth])

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
            {categories &&
              categories.map((category) => (
                <li key={category.id}>
                  {category.submenu.length ? (
                    <p
                      // to={m.link}
                      className="navigation-menu__link"
                      onClick={(e) => {
                        e.preventDefault()
                        submenuToggle(e)
                      }}
                    >
                      {category.category_name}
                    </p>
                  ) : (
                    <p
                      // to={m.link}
                      className="navigation-menu__link"
                      onClick={() => dispatch(closeDropdown())}
                    >
                      {category.category_name}
                    </p>
                  )}

                  {category.submenu && (
                    <div className="navigation-submenu">
                      {category.submenu.map((subCategory) => (
                        <div
                          key={subCategory.id}
                          className="navigation-submenu__content"
                        >
                          <p className="navigation-submenu__title">
                            {subCategory.category_name}
                          </p>
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
