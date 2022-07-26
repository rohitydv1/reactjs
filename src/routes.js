import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home")),
  },
  {
    exact: true,
    path: "/terms",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Terms")),
  },
  
  {
    exact: true,
    path: "/log",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/Log")),
  },
  {
    exact: true,
    path: "/dash",
    // layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/Dash")),
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
