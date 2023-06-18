import "./Header.css";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Login from "../../../Screen/Login";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing authentication tokens, etc.)
    navigate("/login");
  };
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">Student</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">Teacher</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <Link to=" /login">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="header">
        <div className="header-dropdown">
          <span>admin </span>
          <Dropdown trigger={["click"]} overlay={menu} placement="bottomRight">
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <CaretDownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Header;
