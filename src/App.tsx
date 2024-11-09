import React from "react";
import Kanbas from "./kanbas";
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import store from "./kanbas/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
            <Route path="/" element={<Navigate to="/Labs" />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}
export default App;
