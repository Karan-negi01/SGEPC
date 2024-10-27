import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import About from "./components/aboutus/About";
import Awards from "./components/awards/Awards";
import Event from "./components/events/Event";
import Currentyear from "./components/years/Currentyear";
import Lastyear from "./components/years/Lastyear";
import Previouslast from "./components/years/Previouslast";
import Secondpreviouslast from "./components/years/Secondpreviouslast";
import Awardscurrentyear from "./components/awards-years/Awardscurrentyear";
import Awardslastyear from "./components/awards-years/Awardslastyear";
import Awardspreviouslast from "./components/awards-years/Awardspreviouslast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} /> {/* Redirect root to homepage */}
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event/>} />
        <Route path="/events/2023-2024" element={<Currentyear/>} />
        <Route path="/events/2022-2023" element={<Lastyear/>} />
        <Route path="/events/2021-2022" element={<Previouslast/>} />
        <Route path="/events/2019-2020" element={<Secondpreviouslast/>} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/awards/2023-2024" element={<Awardscurrentyear/>} />
        <Route path="/awards/2022-2023" element={<Awardslastyear/>} />
        <Route path="/awards/2021-2022" element={<Awardspreviouslast/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
