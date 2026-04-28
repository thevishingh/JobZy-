import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { BrowserRouter } from "react-router-dom"
import { Toaster } from "./components/ui/sonner.tsx"
import { Provider } from "react-redux"
import store from "./redux/store.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            className: "font-mont text-sm capitalize",
          }}
        />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
