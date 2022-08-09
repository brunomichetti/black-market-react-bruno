import { useIntl } from "react-intl";

import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";

import "./home-page.scss";

const HomePage = () => {
  const intl = useIntl();
  return (
    <main className="home-page">
      <Header />
      <Footer />
    </main>
  );
};

export default HomePage;
