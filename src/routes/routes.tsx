/* eslint-disable @typescript-eslint/no-explicit-any */
import { ROUTE_PATHS } from "../constants/routes";
import MainLayout from "../layouts/MainLayout";
import ProjectLayout from "../layouts/ProjectLayout";
import { lazyWithRetryAndLoader } from "../utils/lazyWithRetry";
import { AppRoute } from "./types";

const LandingPage = lazyWithRetryAndLoader(
  () => import("../modules/LandingPage")
);
const Home = lazyWithRetryAndLoader(() => import("../modules/Home"));
const About = lazyWithRetryAndLoader(() => import("../modules/About"));
const Project = lazyWithRetryAndLoader(() => import("../modules/Project"));
const References = lazyWithRetryAndLoader(
  () => import("../modules/References")
);

export const routes: AppRoute[] = [
  {
    path: ROUTE_PATHS.LANDING_PAGE,
    component: <LandingPage />,
  },
  {
    path: ROUTE_PATHS.HOME,
    component: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ABOUT,
    component: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.ABOUT,
    component: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.INFO,
    component: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.PROJECT,
    component: (
      <ProjectLayout>
        <Project />
      </ProjectLayout>
    ),
  },
  {
    path: ROUTE_PATHS.REFERENCES,
    component: (
      <ProjectLayout>
        <References />
      </ProjectLayout>
    ),
  },
];
