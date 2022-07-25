import Home from "../pages/Home";
import BeerIdPage from "../pages/BeerIdPage";
import NotFound from "../pages/NotFound";

export const routes = [
    { path: "/beer", component: <Home />, exact: true },
    { path: "/beer/:id", component: <BeerIdPage />, exact: true },
    { path: "/", component: <Home />, exact: true },
    { path: "*", component: <NotFound />, exact: false },
];

