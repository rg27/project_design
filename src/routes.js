
import Dashboard from "views/Dashboard.jsx";
import Map from "views/Map.jsx";

import TableList from "views/TableList.jsx";

import Rainfall from "views/Rainfall.jsx"
import FloodSiteA from "./views/FloodSiteA";
import FloodSiteB from "./views/FloodSiteB";

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

  // {
  //   path: "/icons",
  //   name: "Icons",
  //   // rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   // rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User-Profile",
  //   // rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin"
  // },

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
    component: Map,
    layout: "/admin"
  }
  

  // {
  //   path: "/typography",
  //   name: "Typography",
  //   // rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl"
  // }
];
export default routes;
