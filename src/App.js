import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MyDay from "./pages/MyDay";
import Important from "./pages/Important";
import Tasks from "./pages/Tasks";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="/" element={<Tasks />} />
          <Route path="/myday" element={<MyDay />} />
          <Route path="/important" element={<Important />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
