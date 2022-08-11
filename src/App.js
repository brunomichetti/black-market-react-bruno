import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { history } from "helpers/history";
import LoginPage from "pages/login-page/LoginPage";
import HomePage from "pages/home-page/HomePage";
import { loginPath, homePath } from "constants/pathConstants";
import PrivateRoute from "helpers/PrivateRoute";

const routes = [
  {
    key: "login",
    path: loginPath,
    element: <LoginPage />,
    isPrivate: false,
  },
  {
    key: "home",
    path: homePath,
    element: <HomePage />,
    isPrivate: true,
  },
  {
    key: "invalid",
    path: "*",
    element: <h2>There's nothing here: 404!</h2>,
    isPrivate: false,
  },
];

const App = () => (
  <Router history={history}>
    <Routes>
      {routes.map(({ key, path, element, isPrivate }) => (
        <Route
          key={key}
          path={path}
          element={isPrivate ? <PrivateRoute>{element}</PrivateRoute> : element}
        />
      ))}
    </Routes>
  </Router>
);

export default App;
