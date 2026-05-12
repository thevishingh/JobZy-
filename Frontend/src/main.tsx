import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { BrowserRouter } from "react-router-dom"
import { Toaster } from "./components/ui/sonner.tsx"
import { Provider } from "react-redux"
import store from "./redux/store.tsx"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

const persistor = persistStore(store)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            className: "font-unbounded text-sm capitalize",
          }}
        />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
