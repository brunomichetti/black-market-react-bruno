import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

import App from "./App";
import store from "app/store";
import locale_en from "translations/en";

import "./index.css";

const data = {
  en: locale_en,
};

const language = navigator.language.split(/[-_]/)[0];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={data[language]}>
      <Provider store={store}>
        <App />
      </Provider>
    </IntlProvider>
  </React.StrictMode>
);
