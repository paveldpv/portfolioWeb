import { ReactElement, ReactNode,useState } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from '../layouts/Layouts'
import '../styles/globals.css'
import {createStore,compose,applyMiddleware,combineReducers} from 'redux'
import { darkThemesReducer } from '../reducer/darkThemesReducer'
import { Provider } from 'react-redux'



export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  
}

let rootReducer =combineReducers({
  darkThemes:darkThemesReducer
})



const store = createStore(rootReducer)

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {    
  return(<Provider store={store}>
            <Layout  >
                  <Component {...pageProps} />
                  </Layout>
          </Provider>        
        )
}
 