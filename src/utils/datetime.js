const date = new Date()
const hours = date.getHours()
const minus = date.getMinutes()
const seconds = date.getSeconds()

const leadingZeroTime = (time) => (Number(time) >= 10 ? time : `0${time}`)

export const CURRENT_TIME = `${leadingZeroTime(hours)}:${leadingZeroTime(
  minus
)}:${leadingZeroTime(seconds)}`

export const CURRENT_DATE = date
  .toLocaleDateString("vi-VN")
  .split("/")
  .map((d) => (d.length === 1 ? `0${d}` : d))
  .reverse()
  .join("-")
