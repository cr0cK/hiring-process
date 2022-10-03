import { useUrlBuilder } from "../../hooks/useUrlBuilder";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRouteName } from "./Routes";
import PageHeroes from "../pages/PageHeroes";

export interface IAppRoutesProps {}

/**
 * Main router of the application.
 */
export default function AppRoutes(props: IAppRoutesProps) {
  const { urlBuilder } = useUrlBuilder();

  return (
    <Routes>
      <Route
        path={`${urlBuilder.getRoutePathname(AppRouteName.Heroes)}`}
        element={<PageHeroes />}
      />

      <Route
        path="*"
        element={
          <Navigate to={urlBuilder.getRoutePathname(AppRouteName.Heroes)} />
        }
      />
    </Routes>
  );
}
