import { buildVariants } from 'src/libs/react-helpers/buildVariants'
import { forwardProps } from 'src/libs/react-helpers/forwardProps'
import {
  ITagProperties,
  ReactHTMLAttributes
} from 'src/libs/react-helpers/forwardProps/types'
import styled from 'styled-components'
import ContainerFlex from '../../ContainerFlex'

export interface ILayoutTwoColumnsProps
  extends ITagProperties<ReactHTMLAttributes<HTMLDivElement>> {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
}

const StyledContainerFlex = styled(ContainerFlex)(props => {
  return buildVariants(props)
    .css({
      height: '100%',
      width: '100%',

      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gridGap: 0
    })
    .end()
})

/**
 * Layout for 2 columns.
 */
export default function LayoutTwoColumns(props: ILayoutTwoColumnsProps) {
  return (
    <StyledContainerFlex name="LayoutTwoColumns" {...forwardProps(props)}>
      {props.leftContent}
      {props.rightContent}
    </StyledContainerFlex>
  )
}
