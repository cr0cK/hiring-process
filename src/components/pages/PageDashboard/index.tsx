import styled from "styled-components";
import { useStores } from "../../../hooks/useStores";
import { buildVariants } from "../../../libs/react-helpers/buildVariants";
import ContainerFlex from "../../common/ContainerFlex";
import Label from "../../common/Label";

export interface IPageWelcomeProps {}

const StyledContainerFlex = styled(ContainerFlex)((props) => {
  return buildVariants(props).css({}).end();
});

/**
 * Dashboard page.
 */
export function PageDashboard(props: IPageWelcomeProps) {
  const { storePageDashboard } = useStores();

  return (
    <StyledContainerFlex
      name="DashboardPage"
      flexDirection="column"
      flexAlignItems="center"
      flexGap="tenb-space-4"
      fullWidth
      fullHeight
    >
      <Label>Welcome {storePageDashboard.userName}</Label>
      <Label>Welcome {storePageDashboard.userName}</Label>
    </StyledContainerFlex>
  );
}

export default PageDashboard;
