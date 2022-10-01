import { buildVariants } from 'src/libs/react-helpers/buildVariants'
import { forwardProps } from 'src/libs/react-helpers/forwardProps'
import {
  ITagProperties,
  ReactHTMLAttributes
} from 'src/libs/react-helpers/forwardProps/types'
import styled from 'styled-components'
import ContainerFlex from '../../ContainerFlex'
import { ILayoutHCFProps } from '../LayoutHCF'

export interface ILayoutListProps
  extends ITagProperties<ReactHTMLAttributes<HTMLDivElement>> {
  name: string
  header: ILayoutHCFProps['header']
  body: ILayoutHCFProps['body']
  footer: ILayoutHCFProps['footer']
}

const DivScrollable = styled.div(props => {
  return buildVariants(props)
    .css({
      // overflowX: 'auto',
      // maxHeight: '500px'
    })
    .end()
})

/**
 * LayoutHCF pre-configured for lists.
 */
export default function LayoutList(props: ILayoutListProps) {
  return (
    <ContainerFlex
      flexDirection="column"
      flexGap="default"
      {...forwardProps(props, ['name'])}
    >
      <div>{props.header?.node}</div>
      <DivScrollable>{props.body?.node}</DivScrollable>
      <div>{props.footer?.node}</div>
    </ContainerFlex>
  )
}
