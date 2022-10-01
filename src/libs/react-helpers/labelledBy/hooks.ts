import { ensureArray } from 'src/helpers/ensureArray'
import { filterNullOrUndefinedValues } from 'src/helpers/filterNullOrUndefinedValues'
import { isTruthy } from 'src/helpers/isTruthy'
import { Maybe } from 'src/types'
import { kebabCase } from 'lodash'
import { useContext } from 'react'
import LabelledByContext from './labelledByContext'
import { LabelledBy, LabelledByProp } from './type'

export const DATA_ATTRTEST_ATTRIBUTE = 'data-attr-test'

/**
 * Compute the labelledBy value used for accessibility and e2e testing.
 */
export function getLabelledByValue(labelledBy?: LabelledBy): string {
  if (!labelledBy) {
    return ''
  }

  if (typeof labelledBy === 'string') {
    return kebabCase(labelledBy)
  }

  return (
    [...ensureArray(labelledBy.roles), kebabCase(labelledBy.label)]
      .filter(isTruthy)
      .join('/') || ''
  )
}

/**
 * Return the prop from the labelledBy structure.
 */
export function getLabelledByProp(
  labelledBy: Maybe<LabelledBy>,
  customAttribute?: string
): LabelledByProp {
  return filterNullOrUndefinedValues({
    [customAttribute || DATA_ATTRTEST_ATTRIBUTE]: labelledBy
      ? getLabelledByValue(labelledBy)
      : null
  })
}

/**
 * Return the prop from the labelledBy found from the context.
 */
export function useLabelledByProp(customAttribute?: string): LabelledByProp {
  const labelledByValue = useContext(LabelledByContext)
  return getLabelledByProp(labelledByValue, customAttribute)
}
