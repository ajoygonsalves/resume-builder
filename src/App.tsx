import "./App.css";
import FormAggregate from "./components/forms/FormAggregate/FormAggregate";
import TemplateMinimal from "./components/pdfs/TemplateMinimal/TemplateMinimal";
import { ResumeDataProvider } from "./contexts/ResumeDataContext";
import { ThemeProvider } from "./contexts/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ResumeDataProvider>
        <div
          className="grid grid-cols-1 lg:grid-cols-2
         gap-4 h-[92vh]"
        >
          <FormAggregate />
          <TemplateMinimal />
        </div>
      </ResumeDataProvider>
    </ThemeProvider>
  );
}

export default App;
