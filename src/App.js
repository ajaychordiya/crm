import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/ticket/:id" element={<TicketPage editMode={true} />} />
      </Routes>
    </div>
  );
};

export default App;
