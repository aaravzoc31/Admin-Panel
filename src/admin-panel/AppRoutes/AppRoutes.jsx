import { Space, Card, Statistic } from "antd";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Sidebar/Sidebar_Components/Dashboard/Dashboard";
import Teachers from "../dashboard/Sidebar/Sidebar_Components/Teachers/Teachers";
import Registration from "../dashboard/Sidebar/Sidebar_Components/Registration/Registration";
import Parents from "../dashboard/Sidebar/Sidebar_Components/Parents/Parents";
import Classes from "../dashboard/Sidebar/Sidebar_Components/Classes/Classes";
import Attendance from "../dashboard/Sidebar/Sidebar_Components/Attendance/Attendance";
import Courses from "../dashboard/Sidebar/Sidebar_Components/Courses/Courses";
import Homework from "../dashboard/Sidebar/Sidebar_Components/Homework/Homework";
import Fees from "../dashboard/Sidebar/Sidebar_Components/Fees/Fees";
import Notification from "../dashboard/Sidebar/Sidebar_Components/Notification/Notification";
import Students from "../dashboard/Sidebar/Sidebar_Components/Students/Students";
import "./AppRoutes.css";

const AppRoutes = () => {
  return (
    <div className="content-container">
      <Routes>
        <Route path="/Teachers" element={<Teachers />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Parents" element={<Parents />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Homework" element={<Homework />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Fees" element={<Fees />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
