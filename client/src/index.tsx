import ReactDOM from "react-dom/client";
import { App } from "./app";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </NextUIProvider>
  // </React.StrictMode>
);