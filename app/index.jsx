import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="light">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Popular />} />
                            <Route path="/battle" element={<Battle />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
