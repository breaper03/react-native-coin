import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ContextProvider } from './src/context/Context'
import { NavigationContainer } from '@react-navigation/native';

interface Props {
  children: React.ReactNode
}

const client = new QueryClient()

const Provider: React.FC<Props> = ({children}) => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <QueryClientProvider client={client}>
          {children}
        </QueryClientProvider>
      </NavigationContainer>
    </ContextProvider>
  )
}

export default Provider