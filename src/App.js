import React from "react";
import "./styles.css";
import { useTranslation, Trans } from "react-i18next";
import i18next from "i18next";

const App = () => {
  const { t } = useTranslation();
  const name = "Mohak";

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => handleClick("en")}>English</button>
        <button onClick={() => handleClick("hin")}>Hindi</button>
      </div>
      <Trans i18nKey="title.content">
        Hello <strong title={t("nameTitle")}>{{ name }}</strong>, Welcome to{" "}
        <code>Dailykit.org</code>
      </Trans>
    </div>
  );
};

export default App;
