import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { router } from "./app-routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
