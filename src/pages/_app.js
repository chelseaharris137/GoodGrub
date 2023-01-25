import { Layout } from '@/components';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
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
  return (
    <QueryClientProvider client={queryClient}>
     <Toaster
      position="top-right"
      toastOptions={{
        toastOptions: {
          style: {
            fontSize: '12px'
          }
        }
      }}
      ></Toaster>

      <Layout>
        <Component {...pageProps} />  
      </Layout>
    </QueryClientProvider>
  )
}
