import { IRouteDefinition, Routes } from 'src/libs/UrlBuilder/types'

export enum AppRouteName {
  'Root' = 'Root',
  'HomePage' = 'HomePage',

  /* Mains */

  'Dashboard' = 'Dashboard'
}

/* Routes definitions */

export interface IRootRouteDefinition extends IRouteDefinition<AppRouteName> {
  routeName: AppRouteName.Root
}

export interface IHomePageRouteDefinition
  extends IRouteDefinition<AppRouteName> {
  routeName: AppRouteName.HomePage
  parameters: {}
}

// --- Main

export interface IDashboardRouteDefinition
  extends IRouteDefinition<AppRouteName> {
  routeName: AppRouteName.Dashboard
  parameters: {}
}

/* Union of all routes */

export type AppRouteDefinition =
  | IRootRouteDefinition
  | IHomePageRouteDefinition
  | IDashboardRouteDefinition

/* Routes record */

export const appRoutes: Routes<AppRouteName> = {
  [AppRouteName.Root]: {
    routeName: AppRouteName.Root,
    abstract: true,
    pathname: '/'
  },

  [AppRouteName.HomePage]: {
    routeName: AppRouteName.HomePage,
    pathname: '/'
  },

  /* --- Dashboard */

  [AppRouteName.Dashboard]: {
    routeName: AppRouteName.Dashboard,
    pathname: '/dashboard'
  }
}
