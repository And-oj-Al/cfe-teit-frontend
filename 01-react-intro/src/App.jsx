import React, { useState } from 'react';
import Footer from './components/Footer';
import './styles/global.css';

export default function App() {
  const name = 'React';

  const [count, setCount] = useState(1);
  const [items, setItems] = useState(['Elemento 1', 'Elemento 2']);

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  function handleAddElementClick() {
    const newElement = `Elemento ${items.length + 1}`;
    const newItems = structuredClone(items);
    newItems.push(newElement);
    setItems(newItems);
  }

  return (
    <>
      <main>
        {/* HelloReact.jsx */}
        <section>
          <h1 className="title">Hola, {name}</h1>
          <p>Esta es un aplicación hecha en React</p>
        </section>
        {/* Counter.jsx */}
        <section>
          <h2>Contador</h2>
          <strong>{count}</strong>
          <br />
          <button onClick={handlePlusClick}>+1</button>
        </section>
        {/* Items.jsx */}
        <section>
          <h2>Elementos</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={handleAddElementClick}>Agregar elemento</button>
        </section>
      </main>
      <Footer />
    </>
  );
}
