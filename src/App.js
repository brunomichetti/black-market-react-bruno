import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { history } from "helpers/history";
import LoginPage from "pages/login-page/LoginPage";
import HomePage from "pages/home-page/HomePage";

const App = () => (
  <Router history={history}>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
