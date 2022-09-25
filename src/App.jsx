import { CustomThemeProvider } from "./contexts";
import { AppLayout } from "./layout/App/AppLayout";
// import "./assets/css/app.css";

export function App() {
  return (
    <CustomThemeProvider>
      <AppLayout />
    </CustomThemeProvider>
  );
}
