import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo'

import { AuthenticationGuard } from './guards'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <AuthenticationGuard>
                    <App />
                </AuthenticationGuard>
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>
)
