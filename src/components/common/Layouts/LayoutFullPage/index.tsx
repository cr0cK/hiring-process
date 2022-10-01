import { buildVariants } from 'src/libs/react-helpers/buildVariants'
import { forwardProps } from 'src/libs/react-helpers/forwardProps'
import {
  ITagProperties,
  ReactHTMLAttributes
} from 'src/libs/react-helpers/forwardProps/types'
import styled from 'styled-components'
import ContainerFlex from '../../ContainerFlex'

export interface ILayoutFullPageProps
  extends ITagProperties<ReactHTMLAttributes<HTMLDivElement>> {
  content: React.ReactNode
}

const StyledContainerFlex = styled(ContainerFlex)(props => {
  return buildVariants(props).end()
})

/**
 * Layout for a full page.
 */
export default function LayoutFullPage(props: ILayoutFullPageProps) {
  return (
    <StyledContainerFlex
      name="LayoutFullPage"
      fullHeight
      fullWidth
      {...forwardProps(props)}
    >
      {props.content}
    </StyledContainerFlex>
  )
}
