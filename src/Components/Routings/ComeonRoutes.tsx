// src/components/Routes.tsx
import { RoutePaths } from "Constants/routes";
import Games from "Page/Games/container/Games";
import LoginPage from "Page/LoginPage/Login";
import { Route, Routes } from "react-router-dom";

const ComeonRoutes = () => {
  return (
    <Routes>
      <Route path={RoutePaths.Login} element={<LoginPage />} />
      <Route path={RoutePaths.Home} element={<Games />} />
      {/* <Route path={RoutePaths.Game} element={Game} /> */}
    </Routes>
  );
};

export default ComeonRoutes;
