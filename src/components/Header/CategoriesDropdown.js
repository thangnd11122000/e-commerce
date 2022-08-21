import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MoonLoader } from "react-spinners"
import {
  closeDropdown,
  closeMenuSidebar,
  handleDropdown,
} from "../../store/toggleSlice"
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material"
import { css } from "@emotion/react"
import { Link } from "react-router-dom"

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
                  <Link
                    to={`/danh-sach?_cat=${category.id}`}
                    className="navigation-menu__link active"
                    onClick={() => {
                      dispatch(closeDropdown())
                      dispatch(closeMenuSidebar())
                    }}
                  >
                    {category.category_name}
                  </Link>

                  {category.submenu && (
                    <div className="navigation-submenu">
                      {category.submenu.map((subCategory) => (
                        <div
                          key={subCategory.id}
                          className="navigation-submenu__content"
                        >
                          <Link
                            to={`/danh-sach?_cat=${subCategory.id}`}
                            className="navigation-submenu__title"
                            onClick={() => {
                              dispatch(closeDropdown())
                              dispatch(closeMenuSidebar())
                            }}
                          >
                            {subCategory.category_name}
                          </Link>
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
