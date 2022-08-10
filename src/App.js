import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { history } from "helpers/history";
import LoginPage from "pages/login-page/LoginPage";
import HomePage from "pages/home-page/HomePage";
import { loginPageLink, homePageLink } from "constants/linkConstants";
import PrivateRoute from "helpers/PrivateRoute";

const App = () => (
  <Router history={history}>
    <Routes>
      <Route exact path={loginPageLink} element={<LoginPage />} />
      <Route
        path={homePageLink}
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h2>Invalid page: 404!</h2>} />
    </Routes>
  </Router>
);

export default App;
