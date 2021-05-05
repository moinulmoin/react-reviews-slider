import React from 'react';
import Slider from './components/Slider';

function App() {
    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>Reviews</h2>
                    <div className="underline" />
                </div>
                <Slider />
            </section>
        </main>
    );
}

export default App;
