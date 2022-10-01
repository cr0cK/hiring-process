import { buildVariants } from 'src/libs/react-helpers/buildVariants'
import { forwardProps } from 'src/libs/react-helpers/forwardProps'
import {
  ITagProperties,
  ReactHTMLAttributes
} from 'src/libs/react-helpers/forwardProps/types'
import styled from 'styled-components'
import ContainerFlex from '../../../ContainerFlex'

export interface ILayoutHCFHeaderProps
  extends ITagProperties<ReactHTMLAttributes<HTMLDivElement>> {
  children: React.ReactNode
}

const StyledContainerFlex = styled(ContainerFlex)(props => {
  return buildVariants(props).end()
})

/**
 * LayoutHCF default header.
 */
export default function LayoutHCFHeader(props: ILayoutHCFHeaderProps) {
  return (
    <StyledContainerFlex
      name="LayoutHCFHeader"
      flexAlignItems="center"
      flexGrow={1}
      {...forwardProps(props)}
    >
      {props.children}
    </StyledContainerFlex>
  )
}
