import {
  Space,
  Card,
  Statistic,
  Typography,
  Calendar,
  Progress,
  theme,
} from "antd";
import { UserOutlined, DollarCircleOutlined } from "@ant-design/icons";
import React from "react";
import "./Dashboard.css";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const Dashboard = () => {
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 250,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <>
      <div className="dashboard-container">
        <div>
          <Typography.Title level={4}>Dashboard</Typography.Title>
          <Space direction="horizontal">
            <DashCard
              icon={
                <UserOutlined
                  style={{
                    color: "purple",
                    background: "rgba(0, 255, 0, 0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Students"}
              value={5555}
            />
            <DashCard
              icon={
                <UserOutlined
                  style={{
                    color: "purple",
                    background: "rgba(0, 255, 0, 0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Teachers"}
              value={55}
            />
            <DashCard
              icon={
                <DollarCircleOutlined
                  style={{
                    color: "red",
                    background: "rgba(255, 0, 0, 0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title={"Fees Collection"}
              value={"Rs 5464546"}
            />
          </Space>
        </div>
      </div>
      <div className="right-sidebar-container">
        <div className="progress-container">
          <div className="progress-title">
            <Typography.Title level={3}>Attendance</Typography.Title>
          </div>
          <div className="progress">
            <Progress percent={85} type="circle" />
          </div>
        </div>
        <Space>
          <div className="calendar" style={wrapperStyle}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
        </Space>
      </div>
    </>
  );
};

const DashCard = ({ title, value, icon }) => {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};

export default Dashboard;
