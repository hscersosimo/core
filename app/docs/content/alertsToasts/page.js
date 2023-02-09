import SectionHeader from "../../../components/SectionHeader";
import Container from "../../../components/Container";
import AlertsPage from "./alerts";
import ToastsPage from "./toasts";

const AlertsToastsPage = () => {
  return (
    <>
      <SectionHeader name="Alerts & Toasts" />
      <Container title="Alerts" description="Desc">
        <AlertsPage />
      </Container>

      <Container title="Toasts" description="Desc">
        <ToastsPage />
      </Container>
    </>
  );
};

export default AlertsToastsPage;
