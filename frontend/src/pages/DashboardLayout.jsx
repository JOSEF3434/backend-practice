import { Routes, Route } from "react-router-dom";
import Sidebar from "../scenes/global/Sidebar";
import Topbar from "../scenes/global/Topbar";

import Dashboard from "../scenes/dashboard";
import Team from "../scenes/team";
import Contacts from "../scenes/contacts";
import Invoices from "../scenes/invoices";
import Form from "../scenes/form";
import Bar from "../scenes/bar";
import Pie from "../scenes/pie";
import Line from "../scenes/line";
import FAQ from "../scenes/faq";
import Calendar from "../scenes/calendar/calendar";
import Geography from "../scenes/geography";

const DashboardLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />

        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="team" element={<Team />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="form" element={<Form />} />
          <Route path="bar" element={<Bar />} />
          <Route path="pie" element={<Pie />} />
          <Route path="line" element={<Line />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="geography" element={<Geography />} />
        </Routes>

      </main>
    </div>
  );
};

export default DashboardLayout;
