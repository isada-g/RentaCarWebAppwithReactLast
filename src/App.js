import React from 'react';
import Layout from "./components/Layout/Layout";
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Layout />
        </AuthProvider>
    );
}

export default App;
