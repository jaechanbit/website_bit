import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NationalCardCourses from './pages/NationalCardCourses';
import StudentCourses from './pages/StudentCourses';
import ItqCenter from './pages/ItqCenter';
import DiatCenter from './pages/DiatCenter';
import Reviews from './pages/Reviews';
import Notices from './pages/Notices';
import Consultation from './pages/Consultation';

// Admin Imports
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCourses from './pages/admin/AdminCourses';
import AdminConsultations from './pages/admin/AdminConsultations';
import AdminNotices from './pages/admin/AdminNotices';

import { PagePath } from './types';
import { DataProvider } from './contexts/DataContext';

const App: React.FC = () => {
  return (
    <DataProvider>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path={PagePath.ADMIN} element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path={PagePath.ADMIN_COURSES} element={<AdminCourses />} />
            <Route path={PagePath.ADMIN_CONSULTATIONS} element={<AdminConsultations />} />
            <Route path={PagePath.ADMIN_NOTICES} element={<AdminNotices />} />
          </Route>

          {/* Public Routes */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex flex-col font-sans">
                <Navbar />
                <Routes>
                  <Route path={PagePath.HOME} element={<Home />} />
                  <Route path={PagePath.ABOUT} element={<About />} />
                  <Route path={PagePath.COURSE_NATIONAL} element={<NationalCardCourses />} />
                  <Route path={PagePath.COURSE_STUDENT} element={<StudentCourses />} />
                  <Route path={PagePath.CENTER_ITQ} element={<ItqCenter />} />
                  <Route path={PagePath.CENTER_DIAT} element={<DiatCenter />} />
                  <Route path={PagePath.REVIEWS} element={<Reviews />} />
                  <Route path={PagePath.NOTICES} element={<Notices />} />
                  <Route path={PagePath.CONSULTATION} element={<Consultation />} />
                </Routes>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;