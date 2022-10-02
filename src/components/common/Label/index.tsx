import styled from "styled-components";
import * as React from "react";
import { buildVariants } from "../../../libs/react-helpers/buildVariants";
import {
  ITagWithChildrenProperties,
  ReactHTMLAttributes,
} from "../../../libs/react-helpers/forwardProps/types";

interface ILabelProps
  extends ITagWithChildrenProperties<ReactHTMLAttributes<HTMLSpanElement>> {}

const Span = styled.span<ILabelProps>((props) => {
  return buildVariants(props).css({}).end();
});

const Label = React.forwardRef<HTMLSpanElement, ILabelProps>((props, ref) => {
  return <Span ref={ref}>{props.children}</Span>;
});

export default Label;
