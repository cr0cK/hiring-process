import { IRouteDefinition, Routes } from "../../libs/UrlBuilder/types";

export enum AppRouteName {
  "Root" = "Root",
  "HomePage" = "HomePage",

  /* Mains */

  "Heroes" = "Heroes",
}

/* Routes definitions */

export interface IRootRouteDefinition extends IRouteDefinition<AppRouteName> {
  routeName: AppRouteName.Root;
}

export interface IHomePageRouteDefinition
  extends IRouteDefinition<AppRouteName> {
  routeName: AppRouteName.HomePage;
  parameters: {};
}

// --- Main

export interface IHeroesRouteDefinition extends IRouteDefinition<AppRouteName> {
  routeName: AppRouteName.Heroes;
  parameters: {};
}

/* Union of all routes */

export type AppRouteDefinition =
  | IRootRouteDefinition
  | IHomePageRouteDefinition
  | IHeroesRouteDefinition;

/* Routes record */

export const appRoutes: Routes<AppRouteName> = {
  [AppRouteName.Root]: {
    routeName: AppRouteName.Root,
    abstract: true,
    pathname: "/",
  },

  [AppRouteName.HomePage]: {
    routeName: AppRouteName.HomePage,
    pathname: "/",
  },

  /* --- Heroes */

  [AppRouteName.Heroes]: {
    routeName: AppRouteName.Heroes,
    pathname: "/heroes",
  },
};
