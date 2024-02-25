import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Video } from "./components/Video";

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/:url" Component={Video} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
