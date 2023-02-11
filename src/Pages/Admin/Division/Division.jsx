import { useState, lazy, Suspense } from "react";
const DivisionMenu = lazy(() => import("./DivisionDetail/DivisionMenuDetail"));
const DivisionNav = lazy(() => import("./DivisionNav/DivisionNav"));

export default function Division() {
    const [division, setdivision] = useState('Division');
    const handleClick = pagestate => {
        setdivision(pagestate);
    };
    return (
        <div className="Admin-Division">
            <Suspense fallback="Loading...">
                {(() => {
                    switch (division) {
                        case 'Division':
                            return <DivisionNav handleClick={handleClick} />;
                        case 'BPH':
                            return <DivisionMenu name={"BPH"} handleClick={handleClick} />;
                        case 'Dekorasi':
                            return <DivisionMenu name={"Dekorasi"} handleClick={handleClick} />;
                        case 'Publikasi':
                            return <DivisionMenu name={"Publikasi"} handleClick={handleClick} />;
                        case 'Keamanan':
                            return <DivisionMenu name={"Keamanan"} handleClick={handleClick} />;
                        case 'Fresh Money':
                            return <DivisionMenu name={"Fresh Money"} handleClick={handleClick} />;
                        case 'Sponsor':
                            return <DivisionMenu name={"Sponsor"} handleClick={handleClick} />;
                        case 'Dokumentasi':
                            return <DivisionMenu name={"Dokumentasi"} handleClick={handleClick} />;
                        case 'Acara':
                            return <DivisionMenu name={"Acara"} handleClick={handleClick} />;
                        case 'Perlengkapan':
                            return <DivisionMenu name={"Perlengkapan"} handleClick={handleClick} />;
                        case 'Lomba':
                            return <DivisionMenu name={"Lomba"} handleClick={handleClick} />;
                        case 'Konsumsi':
                            return <DivisionMenu name={"Konsumsi"} handleClick={handleClick} />;
                        case 'Website':
                            return <DivisionMenu name={"Website"} handleClick={handleClick} />;
                        case 'Visual':
                            return <DivisionMenu name={"Visual"} handleClick={handleClick} />;
                        default:
                            return null;
                    }
                })()}
            </Suspense>
        </div>)
}


// Atlas BPH
// Antheia Dekorasi
// Iris Publikasi
// Erinnyes Keamanan
// Tyche Fresh Money
// Plutus Sponsor
// Phoebe Dokumentasi
// Prometheus Acara
// Hermes Perlengkapan
// Ares Lomba
// Hestia Konsumsi
// Dionysus Website
// Muses Visual