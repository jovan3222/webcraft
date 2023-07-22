import Pocetna from './pocetna.js';
import Usluge from './pages/usluge/usluge.js';
import Onama from './pages/o-nama/o-nama.js';
import Kontakt from './pages/kontakt/kontakt.js';
import ScrollToTop from './components/ScrollToTop';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Pocetna />} />
                <Route path='/usluge' element={<Usluge />} />
                <Route path='/o-nama' element={<Onama />} />
                <Route path='/kontakt' element={<Kontakt />} />
            </Routes>
        </>
    );
}

export default App;
