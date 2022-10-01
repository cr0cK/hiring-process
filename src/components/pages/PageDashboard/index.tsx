import { useStores } from "../../../hooks/useStores";

export interface IPageWelcomeProps {}

/**
 * Dashboard page.
 */
export function PageDashboard(props: IPageWelcomeProps) {
  const { storePageDashboard } = useStores();

  return <p>Welcome {storePageDashboard.userName}</p>;
}

export default PageDashboard;
