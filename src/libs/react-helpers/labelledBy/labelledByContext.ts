import { Maybe } from 'src/types'
import { createContext } from 'react'
import { LabelledBy } from './type'

const LabelledByContext = createContext<Maybe<LabelledBy>>(null)

export default LabelledByContext
