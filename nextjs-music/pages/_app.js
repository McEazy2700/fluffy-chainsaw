import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '../utils'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client} >
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
