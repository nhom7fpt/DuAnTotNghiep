import React, { useState } from "react";
import {
  MdAddCircleOutline,
  MdAllInbox,
  MdCategory,
  MdFormatListBulleted,
  MdHome,
  MdLogout,
  MdManageAccounts,
  MdRequestPage,
  MdStackedBarChart,
  MdSupervisorAccount,
} from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { Layout, Menu, Button, theme, Avatar, Space, Row, Col } from "antd";
import "../styles/Dashboard.scss";
import Home from "../components/home/Home";
import AddOrEdit from "../components/categories/AddOrEdit";
import ListCategory from "../components/categories/ListCategory";

import AddOrEditProduct from "../components/products/AddOrEditProduct";
import ListProduct from "../components/products/ListProduct";

import ListAccount from "../components/Account/ListAccount";
import ListOrder from "../components/Order/ListOrder";
import Login from "../components/auth/Login";
import OrderDetail from "../components/Order/OrderDetail";
import Manufacturer from "../components/manufacturer/Manufacturer";

const { Header, Sider, Content } = Layout;

const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [marginLeft, setMarginleft] = useState(200);
  const [fontSize, setSizefont] = useState(16);

  const navigate = useNavigate();

  const siteLayoutStyle = { marginLeft: marginLeft };
  const iconSize = { fontSize: fontSize };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={siteLayoutStyle}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2>{collapsed ? "ss" : "Spring Shop"}</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={iconSize}
          items={[
            {
              key: "1",
              icon: <MdHome />,
              label: "Home",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <MdCategory />,
              label: "Category",
              children: [
                {
                  key: "21",
                  icon: <MdAddCircleOutline />,
                  label: "Add Category",
                  onClick: () => navigate("/category/add"),
                },
                {
                  key: "22",
                  icon: <MdFormatListBulleted />,
                  label: "List Category",
                  onClick: () => navigate("/category/list"),
                },
              ],
            },
            {
              key: "3",
              icon: <MdAllInbox />,
              label: "Products",
              children: [
                {
                  key: "31",
                  icon: <MdAddCircleOutline />,
                  label: "Add Product",
                  onClick: () => navigate("/product/add"),
                },
                {
                  key: "32",
                  icon: <MdFormatListBulleted />,
                  label: "List Product",
                  onClick: () => navigate("/product/list"),
                },
              ],
            },
            {
              key: "4",
              icon: <AiFillCreditCard />,
              label: "Orders",
              onClick: () => navigate("/order"),
            },
            {
              key: "5",
              icon: <MdRequestPage />,
              label: "Invoices",
            },
            {
              key: "6",
              icon: <MdStackedBarChart />,
              label: "Statistical",
            },
            {
              key: "7",
              icon: <MdManageAccounts />,
              label: "Profiles",
              onClick: () => navigate("/account/acc"),
            },
            {
              key: "8",
              icon: <MdSupervisorAccount />,
              label: "manufacturer",
              onClick: () => navigate("/manufacturer"),
            },
            {
              key: "9",
              icon: <MdLogout />,
              label: "Logout",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            left: marginLeft + 16,
          }}
        >
          <Row>
            <Col md={18}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => {
                  const sts = !collapsed;
                  setCollapsed(sts);
                  setMarginleft(sts ? 80 : 200);
                  setSizefont(sts ? 20 : 16);
                }}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col md={6}>
              <Space size={16}>
                <Avatar icon={<UserOutlined />}></Avatar>admin
              </Space>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div className="content-panel">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/add" element={<AddOrEdit key="a" />} />
              <Route
                path="/category/update/:id"
                element={<AddOrEdit key="u" />}
              />
              <Route path="/category/list" element={<ListCategory />} />

              <Route path="/product/list" element={<ListProduct />} />
              <Route
                path="/product/add"
                element={<AddOrEditProduct key="p" />}
              />
              <Route
                path="/product/edit/:id"
                element={<AddOrEditProduct key="o" />}
              />

              <Route path="/account/acc" element={<ListAccount />} />

              <Route path="/order" element={<ListOrder />} />
              <Route path="/order/orderdetail/:id" element={<OrderDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/manufacturer" element={<Manufacturer />} />
            </Routes>
          </div>

          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
