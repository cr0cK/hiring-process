import { buildVariants } from 'src/libs/react-helpers/buildVariants'
import styled from 'styled-components'

export interface ILayoutListSpacerProps {}

const Div = styled.div(props => {
  return buildVariants(props)
    .css({
      height: '30px'
    })
    .end()
})

export default function LayoutListSpacer(props: ILayoutListSpacerProps) {
  return <Div>&nbsp;</Div>
}
