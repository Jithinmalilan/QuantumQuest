import './App.css';
import MyRoutes from './Routes/MyRoutes';
import React from 'react';

function App() {

    return (
        <div className="App p-0">
            <React.StrictMode>
                <MyRoutes />
            </React.StrictMode>
        </div>
    );
}

export default App;