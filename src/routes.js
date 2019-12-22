
import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import Rainfall from "views/Rainfall.jsx"
import FloodSiteA from "./views/FloodSiteA";
import FloodSiteB from "./views/FloodSiteB";
import LocationMap from "./views/Map";





var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-app",
    component: Dashboard,
    layout: "/admin"
  },


  {
    path: "/rainfall",
    name: "Rainfall Monitoring",
    icon: "tim-icons icon-sound-wave",
    component: Rainfall,
    layout: "/admin"
  },

  {
    path: "/flood/siteA",
    name: "Flood Monitoring Site A",
    icon: "tim-icons icon-chart-pie-36",
    component: FloodSiteA,
    layout: "/admin"
  },

  {
    path: "/flood/siteB",
    name: "Flood Monitoring Site B",
    icon: "tim-icons icon-chart-pie-36",
    component: FloodSiteB,
    layout: "/admin"
  },

  {
    path: "/tables",
    name: "Table List",
    // rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },

  {
    path: "/map",
    name: "Map",
    // rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: LocationMap,
    layout: "/admin"
  },


];
export default routes;
