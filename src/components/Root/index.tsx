import { HashRouter } from 'react-router-dom'
import { ContextStores } from 'src/hooks/useStores'
import StoreRoot from 'src/stores/StoreRoot'
import { StyleSheetManager } from 'styled-components'
import ErrorBoundary from '../common/ErrorBoundary'
import App from './App'

export interface IRootProps {
  storeRoot: StoreRoot
}

export default function Root(props: IRootProps) {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ContextStores.Provider value={{ storeRoot: props.storeRoot }}>
      <HashRouter>
        <ErrorBoundary
          errorComponent={
            <div>An error has occurred during the loading of the app.</div>
          }
        >
          <StyleSheetManager>
            <App />
          </StyleSheetManager>
        </ErrorBoundary>
      </HashRouter>
    </ContextStores.Provider>
  )
}
