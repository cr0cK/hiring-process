import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import styled from "styled-components";
import { useStores } from "../../../hooks/useStores";
import { buildVariants } from "../../../libs/react-helpers/buildVariants";
import ContainerFlex from "../../common/ContainerFlex";
import Label from "../../common/Label";
import Hero from "./components/Hero";

export interface IPageWelcomeProps {}

const StyledContainerFlex = styled(ContainerFlex)((props) => {
  return buildVariants(props).css({}).end();
});

const Table = styled.table((props) => {
  return buildVariants(props)
    .css({
      overflowY: "auto",
      display: "flex",
    })
    .end();
});

const Header = styled.td((props) => {
  return buildVariants(props)
    .css({
      fontWeight: "bold",
    })
    .end();
});
/**
 * Heroes page.
 */
const PageHeroes = (props: IPageWelcomeProps) => {
  const { storePageHeroes } = useStores();

  useEffect(() => {
    storePageHeroes.fetchSuperHeroes();

    return () => {
      storePageHeroes.reset();
    };
  }, [storePageHeroes]);

  return (
    <StyledContainerFlex
      name="HeroesPage"
      flexDirection="column"
      flexGap="tenb-space-32"
      fullWidth
      fullHeight
    >
      <Label variant="Heading1">Super Heroes</Label>

      <Table>
        <tbody>
          <tr>
            <Header>Hero name</Header>
            <Header>Publisher</Header>
          </tr>
          {storePageHeroes.heroes.map((hero) => {
            return <Hero hero={hero} key={hero.id} />;
          })}
        </tbody>
      </Table>
    </StyledContainerFlex>
  );
};

export default observer(PageHeroes);
