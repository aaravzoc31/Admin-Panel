import React from "react";
import { Menu } from "antd";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import AppRoutes from "../../AppRoutes/AppRoutes";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  UserOutlined,
  UserAddOutlined,
  DollarOutlined,
  ManOutlined,
  AccountBookOutlined,
  ReconciliationOutlined,
  BookOutlined,
  FileWordOutlined,
  BellOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="sidebar-and-content">
        <Menu className="sidebar" mode="vertical">
          <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
            <Link to="/Dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="teachers" icon={<UserOutlined />}>
            <Link to="/Teachers">Teachers</Link>
          </Menu.Item>
          <Menu.Item key="students" icon={<UserOutlined />}>
            <Link to="/Students">Students</Link>
          </Menu.Item>
          <Menu.Item key="registration" icon={<UserAddOutlined />}>
            <Link to="/Registration">Registration</Link>
          </Menu.Item>
          <Menu.Item key="parents" icon={<ManOutlined />}>
            <Link to="/Parents">Parents</Link>
          </Menu.Item>
          <Menu.Item key="classes" icon={<AccountBookOutlined />}>
            <Link to="/Classes">Classes</Link>
          </Menu.Item>
          <Menu.Item key="attendance" icon={<ReconciliationOutlined />}>
            <Link to="/Attendance">Attendance</Link>
          </Menu.Item>
          <Menu.Item key="courses" icon={<BookOutlined />}>
            <Link to="/Courses">Courses</Link>
          </Menu.Item>
          <Menu.Item key="homework" icon={<FileWordOutlined />}>
            <Link to="/Homework">Homework</Link>
          </Menu.Item>
          <Menu.Item key="notification" icon={<BellOutlined />}>
            <Link to="/Notification">Notification</Link>
          </Menu.Item>
          <Menu.Item key="fees" icon={<DollarOutlined />}>
            <Link to="/Fees">Fees</Link>
          </Menu.Item>
        </Menu>
        <AppRoutes />
      </div>
    </>
  );
};

export default Sidebar;
