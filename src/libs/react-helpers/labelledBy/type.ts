import { ARIARole } from 'aria-query'
import { DATA_ATTRTEST_ATTRIBUTE } from './hooks'

export type LabelledBy = {
  roles: ARIARole | ARIARole[]
  label: string
}

export type LabelledByProp = Record<
  typeof DATA_ATTRTEST_ATTRIBUTE | string,
  string
>
