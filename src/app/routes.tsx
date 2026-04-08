import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import SystemeISI from "./pages/SystemeISI.tsx";
import ImmersionProgram from "./pages/ImmersionProgram";
import SupportStrategique from "./pages/SupportStrategique";
import Implantation from "./pages/Implantation";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "systeme-isi", Component: SystemeISI },
      { path: "immersion", Component: ImmersionProgram },
      { path: "support-strategique", Component: SupportStrategique },
      { path: "implantation", Component: Implantation },
      { path: "about", Component: About },
      { path: "*", Component: NotFound },
    ],
  },
]);
