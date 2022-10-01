import { useUrlBuilder } from 'src/hooks/useUrlBuilder'
import { Route, Routes } from 'react-router-dom'
import PageDashboard from '../pages/PageDashboard'
import { AppRouteName } from './Routes'

export interface IAppRoutesProps {}

/**
 * Main router of the application.
 */
export default function AppRoutes(props: IAppRoutesProps) {
  const { urlBuilder } = useUrlBuilder()

  return (
    <Routes>
      <Route
        path={`${urlBuilder.getRoutePathname(AppRouteName.Dashboard)}`}
        element={<PageDashboard />}
      />
    </Routes>
  )
}
