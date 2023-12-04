import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminDashboard from "./sidebarmenupages/AdminDashboard";
import EnrolledCourse from "./sidebarmenupages/EnrolledCourse";
import UserManagement from "./sidebarmenupages/UserManagement";
import CourseManagement from "./sidebarmenupages/CourseManagement";
import AnalyticsReports from "./sidebarmenupages/Analytics&Reports";
import AdminSettings from "./sidebarmenupages/AdminSettings";

import NavbarMenu from "./components/NavbarMenu";

export default function App() {
  return ( 
    <>
      <Router>
      <NavbarMenu />
        <Routes>
          
          <Route path="/" exact element={<AdminDashboard />} />
          <Route path="/enrolledcourse" exact element={<EnrolledCourse />} />
          <Route path="/usermanagement" exact element={<UserManagement />} />
          <Route path="/coursemanagement" exact element={<CourseManagement />} />
          <Route path="/analytics-&-reports" exact element={<AnalyticsReports />} />
          <Route path="/settings" exact element={<AdminSettings />} />
        </Routes>
      </Router>
    </>  
   );
}

