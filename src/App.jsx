import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Index";
import Admin from "./pages/admin/Index";
import Dashboard from "./pages/admin/dashboard/Index";
import Member from "./pages/admin/member/Index";
import FormMember from "./pages/admin/member/Create";
import Events from "./pages/admin/event/Index";
import FormEvent from "./pages/admin/event/Create";
import Report from "./pages/admin/event/Report";
import ReportDetail from "./pages/admin/event/ReportDetail";
import AdminLayout from "./pages/admin/Layout";
import UserLayout from "./pages/user/Layout";
import Profile from "./pages/user/Profile/Index";
import Index from "./pages/user/dashboard/Index";
import EventUser from "./pages/user/event/Index";
import EventDetail from "./pages/user/event/Event";
import HistoryEvent from "./pages/user/event/History";

import Protected from "./middleware/Protected";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />

      {/* Admin */}
      <Route element={<AdminLayout />}>
        <Route
          path="admin/*"
          element={
            <Protected role="admin">
              <h1>404 Not Found</h1>
            </Protected>
          }
        />
        <Route
          path="admin"
          exact
          index
          element={
            <Protected role="admin">
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="admin/user"
          element={
            <Protected role="admin">
              <Admin />
            </Protected>
          }
        />
        <Route
          path="admin/member"
          element={
            <Protected role="admin">
              <Member />
            </Protected>
          }
        />
        <Route
          path="admin/member/create"
          element={
            <Protected role="admin">
              <FormMember />
            </Protected>
          }
        />
        <Route
          path="admin/event"
          element={
            <Protected role="admin">
              <Events />
            </Protected>
          }
        />

        <Route
          path="admin/event/create"
          element={
            <Protected role="admin">
              <FormEvent />
            </Protected>
          }
        />
        <Route
          path="admin/report"
          element={
            <Protected role="admin">
              <Report />
            </Protected>
          }
        />
        <Route
          path="admin/report/:id/event"
          element={
            <Protected role="admin">
              <ReportDetail />
            </Protected>
          }
        />
      </Route>

      {/* User */}
      <Route element={<UserLayout />}>
        <Route
          path="user/*"
          element={
            <Protected role="user">
              <h1>404 Not Found</h1>
            </Protected>
          }
        />
        <Route
          path="user"
          exact
          index
          element={
            <Protected role="user">
              <Index />
            </Protected>
          }
        />
        <Route
          path="user/:id/profile"
          element={
            <Protected role="user">
              <Profile />
            </Protected>
          }
        />
        <Route
          path="user/event"
          element={
            <Protected role="user">
              <EventUser />
            </Protected>
          }
        />
        <Route
          path="user/history"
          element={
            <Protected role="user">
              <HistoryEvent />
            </Protected>
          }
        />
        <Route
          path="user/event/:id"
          element={
            <Protected role="user">
              <EventDetail />
            </Protected>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
