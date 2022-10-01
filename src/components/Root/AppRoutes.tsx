import { useUrlBuilder } from "../../hooks/useUrlBuilder";
import { Navigate, Route, Routes } from "react-router-dom";
import PageDashboard from "../pages/PageDashboard";
import { AppRouteName } from "./Routes";

export interface IAppRoutesProps {}

/**
 * Main router of the application.
 */
export default function AppRoutes(props: IAppRoutesProps) {
  const { urlBuilder } = useUrlBuilder();

  return (
    <Routes>
      <Route
        path={`${urlBuilder.getRoutePathname(AppRouteName.Dashboard)}`}
        element={<PageDashboard />}
      />

      <Route
        path="*"
        element={
          <Navigate to={urlBuilder.getRoutePathname(AppRouteName.Dashboard)} />
        }
      />
    </Routes>
  );
}
