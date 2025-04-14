import logo from "./twine_icon.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useMemo } from "react";
import { ReactTyped } from "react-typed";

function App() {
  const { t, i18n } = useTranslation();
  const languages = useMemo(() => ["en", "id"], []);
  const [currentLangIndex, setCurrentLangIndex] = useState(0);

  useEffect(() => {
    const switchLanguage = () => {
      setCurrentLangIndex((prev) => (prev + 1) % languages.length);
      i18n.changeLanguage(languages[currentLangIndex]);
    };

    const intervalId = setInterval(switchLanguage, 2000);

    return () => clearInterval(intervalId);
  }, [currentLangIndex, i18n, languages]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl md:text-6xl lg:text9xl font-semibold mt-1 mb-2 font-custom text-center">
          <ReactTyped
            strings={[t("common.terms.welcomeTo")]}
            typeSpeed={30}
            showCursor={false}
          />{" "}
          Twine
          <p className="mt-2 text-lg text-blue-300 font-sans">
            We are currently under construction
          </p>
        </h1>
      </header>
    </div>
  );
}

export default App;
