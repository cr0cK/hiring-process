import { forwardProps } from 'src/libs/react-helpers/forwardProps'
import {
  ITagProperties,
  ReactHTMLAttributes
} from 'src/libs/react-helpers/forwardProps/types'
import { toPx } from 'src/styles/helpers'
import { isDefined } from 'src/helpers/isDefined'
import { Maybe } from 'src/types'
import styled from 'styled-components'
import LayoutListSpacer from '../LayoutList/LayoutListSpacer'
import LayoutHCFBody, { ILayoutHCFBodyProps } from './LayoutHCFBody'
import LayoutHCFFooter from './LayoutHCFFooter'
import LayoutHCFHeader from './LayoutHCFHeader'
import { buildVariants } from 'src/libs/react-helpers/buildVariants'

export interface ILayoutHCFProps
  extends ITagProperties<ReactHTMLAttributes<HTMLDivElement>> {
  name: string
  header?: Maybe<{
    parameters?: {
      // in pixels
      height?: number
    }
    node: React.ReactNode | false
  }>
  body: {
    variants?: ILayoutHCFBodyProps['variants']
    node: React.ReactNode | false
  }
  footer?: Maybe<{
    parameters?: {
      // in pixels
      height?: number
    }
    node: React.ReactNode | false
  }>
  debug?: boolean
}

const HEADER_FOOTER_DEFAULT_HEIGHT = 40

const Div = styled.div<ILayoutHCFProps>(props => {
  const hasHeader =
    isDefined(props.header?.node) && props.header?.node !== false
  const hasFooter =
    isDefined(props.footer?.node) && props.footer?.node !== false

  const headerHeight =
    props.header?.parameters?.height || HEADER_FOOTER_DEFAULT_HEIGHT

  const footerHeight =
    props.footer?.parameters?.height || HEADER_FOOTER_DEFAULT_HEIGHT

  const centerHeight =
    (hasHeader ? 1 : 0) * headerHeight + (hasFooter ? 1 : 0) * footerHeight

  return buildVariants(props)
    .css({
      position: 'relative',
      width: '100%',
      height: '100%'
    })

    .if(hasHeader, builder => {
      return builder
        .css({
          '> .header': {
            position: 'absolute',
            width: '100%',
            height: toPx(headerHeight),
            top: 0
          }
        })
        .end()
    })

    .css({
      '> .center': {
        position: 'absolute',
        top: toPx(props.header?.node ? headerHeight : 0),
        bottom: toPx(props.footer?.node ? headerHeight : 0),
        height: `calc(100% - ${toPx(centerHeight)})`,
        minHeight: '150px',
        width: '100%'
      }
    })

    .if(hasFooter, builder => {
      return builder
        .css({
          '> .footer': {
            position: 'absolute',
            width: '100%',
            height: toPx(footerHeight),
            bottom: 0
          }
        })
        .end()
    })

    .if(props.debug || false, builder => {
      return builder
        .css({
          '> .header': {
            outline: '1px dotted red'
          },

          '> .center': {
            outline: '2px dotted red'
          },

          '> .footer': {
            outline: '1px dotted red'
          }
        })
        .end()
    })

    .end()
})

/**
 * Create a "grid" for header/content/footer that fits the entire space.
 */
export default function LayoutHCF(props: ILayoutHCFProps) {
  const name = ['LayoutHCF', props.name].join('-')

  return (
    <Div
      data-attr-name={name}
      {...forwardProps(props, ['header', 'body', 'footer', 'debug'])}
    >
      {props.header && (
        <LayoutHCFHeader className="header">
          {props.header.node}
        </LayoutHCFHeader>
      )}

      <LayoutHCFBody className="center" variants={props.body.variants}>
        {props.body.node}
      </LayoutHCFBody>

      {props.footer && (
        <LayoutHCFFooter className="footer">
          {props.footer.node}
        </LayoutHCFFooter>
      )}
    </Div>
  )
}
