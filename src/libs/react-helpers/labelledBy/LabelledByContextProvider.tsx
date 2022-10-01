import { useMemo } from 'react'
import LabelledByContext from './labelledByContext'
import { LabelledBy } from './type'

export interface ILabelledByContextProviderProps {
  value: LabelledBy
  children: React.ReactNode
}

export default function LabelledByContextProvider(
  props: ILabelledByContextProviderProps
) {
  const labelledByMemo = useMemo(() => props.value, [])

  return (
    <LabelledByContext.Provider value={labelledByMemo}>
      {props.children}
    </LabelledByContext.Provider>
  )
}
