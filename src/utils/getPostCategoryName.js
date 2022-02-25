const getPostCategoryName = (array, id) => {
  let temp = array?.filter((arr) => arr.id === id)
  return temp ? temp[0].name : ""
}
export default getPostCategoryName
