import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./../routes/routes";

const AppRouter = (props) => {

    return (
        <Routes>
                 {routes.map((r) => (
                      <Route key={r.path} path={r.path} element={r.component} exact={r.exact} />
                  ))}
        </Routes>
    );
};

export default AppRouter;
