import SectionHeader from "../../../components/SectionHeader";
import AlertsPage from "./alerts";
import ToastsPage from "./toasts";

const AlertsToastsPage = () => {
  return (
    <>
      <SectionHeader name="Alerts & Toasts" />

      <AlertsPage />
      <ToastsPage />
    </>
  );
};

export default AlertsToastsPage;
