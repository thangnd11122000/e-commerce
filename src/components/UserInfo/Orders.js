import { Box, Tab, Tabs } from "@mui/material"
import React, { useState } from "react"
import Order from "./Order"
import PropTypes from "prop-types"
import {
  ORDER_ALL,
  ORDER_CANCEL,
  ORDER_DELIVERING,
  ORDER_PROCESS,
  ORDER_SUCCESS,
} from "../../constants/orders"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`order  -tabpanel-${index}`}
      aria-labelledby={`order -tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `order  -tab-${index}`,
    "aria-controls": `order -tabpanel-${index}`,
  }
}

const Orders = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="user__orders section-box">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Tất cả" {...a11yProps(ORDER_ALL)} />
            <Tab label="Đang xử lý" {...a11yProps(ORDER_PROCESS)} />
            <Tab label="Đã huỷ" {...a11yProps(ORDER_CANCEL)} />
            <Tab label="Đang vận chuyển" {...a11yProps(ORDER_DELIVERING)} />
            <Tab label="Đã giao" {...a11yProps(ORDER_SUCCESS)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={ORDER_ALL}>
          <div className="user__body">
            <Order />
          </div>
        </TabPanel>
        <TabPanel value={value} index={ORDER_PROCESS}>
          <div className="user__body">
            <Order url="/api/orders?order_status=1&_page=1&_limit=9999" />
          </div>
        </TabPanel>
        <TabPanel value={value} index={ORDER_CANCEL}>
          <div className="user__body">
            <Order url="/api/orders?order_status=2&_page=1&_limit=9999" />
          </div>
        </TabPanel>
        <TabPanel value={value} index={ORDER_DELIVERING}>
          <div className="user__body">
            <Order url="/api/orders?order_status=3&_page=1&_limit=9999" />
          </div>
        </TabPanel>
        <TabPanel value={value} index={ORDER_SUCCESS}>
          <div className="user__body">
            <Order url="/api/orders?order_status=4&_page=1&_limit=9999" />
          </div>
        </TabPanel>
      </Box>
    </div>
  )
}

export default Orders
