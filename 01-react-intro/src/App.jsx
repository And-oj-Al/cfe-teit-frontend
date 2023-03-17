import React from 'react';
import Footer from './components/Footer';

export default function App() {
  const name = 'React';

  return (
    <>
      <main>
        <h1 className="title">Hola, {name}</h1>
        <p>Esta es un aplicación hecha en React</p>
      </main>
      <Footer />
    </>
  );
}
