import ContainerFlex from 'src/components/common/ContainerFlex'
import { buildVariants } from 'src/libs/react-helpers/buildVariants'
import { forwardProps } from 'src/libs/react-helpers/forwardProps'
import {
  ITagProperties,
  ReactHTMLAttributes
} from 'src/libs/react-helpers/forwardProps/types'
import { themes } from 'src/styles/themes'
import styled from 'styled-components'

export interface ILayoutHCFBodyProps
  extends ITagProperties<ReactHTMLAttributes<HTMLDivElement>> {
  _background?: 'primary' | 'secondary'
  _padding?: 'none' | 'extraLarge'
  _overflow?: 'default' | 'scroll'
  variants?: Array<'default' | 'page' | 'pageContent'>
  children: React.ReactNode
}

const StyledContainerFlex = styled(ContainerFlex)<ILayoutHCFBodyProps>(
  props => {
    return buildVariants(props)
      .variant('_background', props._background || 'primary', {
        primary: {
          background: themes.white.colors.white
        },

        secondary: {
          background: themes.white.colors.whiteAlt
        }
      })

      .variant('_padding', props._padding || 'none', {
        none: {},

        extraLarge: {
          padding: themes.white.sizes.extraLarge
        }
      })

      .variant('_overflow', props._overflow || 'default', {
        default: {},

        scroll: {
          overflowX: 'hidden',
          overflowY: 'auto'
        }
      })

      .compoundVariants('variants', props.variants || ['default'], {
        default: builder =>
          builder.get('_background', 'primary').get('_padding', 'none').end(),

        page: builder =>
          builder
            .get('_background', 'secondary')
            .get('_padding', 'extraLarge')
            .end(),

        pageContent: builder =>
          builder.get('_background', 'primary').get('_overflow', 'scroll').end()
      })

      .end()
  }
)

/**
 * LayoutHCF scrollable content.
 */
export default function LayoutHCFBody(props: ILayoutHCFBodyProps) {
  return (
    <StyledContainerFlex
      name="LayoutHCFBody"
      {...forwardProps(props, ['variants'])}
    >
      {props.children}
    </StyledContainerFlex>
  )
}
