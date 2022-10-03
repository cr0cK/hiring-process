import styled from "styled-components";
import { buildVariants } from "../../../../libs/react-helpers/buildVariants";
import { ITagProperties } from "../../../../libs/react-helpers/forwardProps/types";
import IHero from "../../../../models/hero.model";
import { themes } from "../../../../styles/themes";

export interface IHeroProps extends ITagProperties<HTMLTableRowElement> {
  hero: IHero;
}

const TR = styled.tr((props) => {
  return buildVariants(props).css({}).end();
});

const TD = styled.td((props) => {
  return buildVariants(props)
    .css({
      paddingRight: themes.white.sizes["tenb-space-8"],
    })
    .end();
});

export function Hero(props: IHeroProps) {
  return (
    <TR>
      <TD>{props.hero.name}</TD>
      <TD>{props.hero.biography.publisher}</TD>
    </TR>
  );
}

export default Hero;
