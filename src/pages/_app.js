import { QueryClient } from 'react-query'
import '../styles/globals.css'

const queryClient = new QueryClient({
  defaultOptions : {
    queries: {
      cacheTime: 1 * 60 * 60 * 1000,
      staleTime: 1 * 60 * 60 * 1000,
    }
  }
})

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
