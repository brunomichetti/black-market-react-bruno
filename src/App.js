import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { history } from "helpers/history";
import HomePage from "pages/home-page/HomePage";

const App = () => (
  <Router history={history}>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
