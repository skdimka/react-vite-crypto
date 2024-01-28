import { Layout } from "antd";
import AppContent from "./components/layaout/AppContent";
import AppHeader from "./components/layaout/appHeader";
import AppSider from "./components/layaout/AppSider";

export default function App() {
  return (
    <>
      <Layout>
        <AppHeader />
        <Layout>
          <AppSider />
          <AppContent />
        </Layout>
      </Layout>
    </>
  );
}
