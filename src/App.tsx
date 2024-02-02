import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">{t("profileTitle")}</h2>
      <p className="mb-4">{t("profileDescription")}</p>
    </div>
  );
}

export default App;
