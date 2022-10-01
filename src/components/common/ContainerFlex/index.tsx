import { buildVariants } from 'src/libs/react-helpers/buildVariants'
import { forwardProps } from 'src/libs/react-helpers/forwardProps'
import { useLabelledByProp } from 'src/libs/react-helpers/labelledBy/hooks'
import { themes } from 'src/styles/themes'
import styled from 'styled-components'
import {
  getContainerFlexWrap,
  getLeftRightPadding,
  getTopBottomPadding
} from './functions'
import { IContainerFlexProps } from './types'
import * as React from 'react'

// FIXME - Get logger from a DS context
const logger = console

const Div = styled.div<IContainerFlexProps>(props => {
  const styles = buildVariants(props)
    .css({
      // Flex
      display: 'flex',
      flex: props.flex,
      flexGrow: props.flexGrow,
      flexDirection: props.flexDirection,
      alignItems: props.flexAlignItems,
      justifyContent: props.flexJustifyContent,
      flexWrap: getContainerFlexWrap(props),
      gap: props.flexGap && themes.white.sizes[props.flexGap],
      height: props.height,

      // Size
      ...(props.fullHeight ? { height: '100%' } : {}),
      ...(props.fullWidth ? { width: '100%' } : {}),

      // Paddings
      ...getLeftRightPadding(props.paddingH),
      ...getTopBottomPadding(props.paddingV)
    })

    .variant('itemsDebug', props.itemsDebug || false, {
      true: {
        '> *': {
          outline: '1px dotted red'
        }
      },

      false: {}
    })

    .end()

  if (props.itemsDebug) {
    logger.info(styles)
  }

  return styles
})

const ContainerFlex = React.forwardRef<HTMLDivElement, IContainerFlexProps>(
  (props, ref) => {
    return (
      <Div
        data-attr-name={props.name}
        {...forwardProps(props, [
          'flex',
          'flexGrow',
          'flexDirection',
          'flexAlignItems',
          'flexJustifyContent',
          'flexWrap',
          'flexGap',
          'paddingH',
          'paddingV',
          'fullHeight',
          'fullWidth',
          'height',
          'itemsDebug',
          'onClick'
        ])}
        {...useLabelledByProp()}
        ref={ref}
      >
        {props.children}
      </Div>
    )
  }
)

export default ContainerFlex
