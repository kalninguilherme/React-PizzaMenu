import React from 'react';
import ReactDOM from 'react-dom/client';
import Pizzas from './pizzas';
import './index.css';

// Always declare components on top level
function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className='header'>
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = Pizzas.pizzaData;
    const numPizzas = pizzas.length;

    return (
        <main className='menu'>
            <h2>Our menu</h2>

            {numPizzas > 0 ? (
                <React.Fragment>
                    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>

                    <ul className='pizzas'>
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </React.Fragment>
            ) : (
                <p>We're still working on our menu! Please come back later.</p>
            )}
        </main>
    );
}

function Pizza({ pizzaObj }) {
    console.log(pizzaObj);
    // Early Return - Only one happen
    // if (pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>

                <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>

                {/* {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.Price}</span>} */}
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className='footer'>
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
                </p>
            )}
        </footer>
    );
}

function Order({ closeHour, openHour }) {
    return (
        <div className='order'>
            <p>
                We're open from {openHour}:00 until {closeHour}:00! Come visit us or order online!
            </p>
            <button className='btn'>Order</button>
        </div>
    );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById('root'))
