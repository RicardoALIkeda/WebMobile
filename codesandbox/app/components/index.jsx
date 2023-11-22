import React from 'react';

const Product = ({ name, image, quantity }) => {
  const productName = name ? name.toLowerCase() : '';

  return (
    <article className="produto">
      <a href={`${productName}.html`}>
        {/* Use standard HTML img tag */}
        <img src={`/images/${image}`} alt={`Produto ${name}`} width={300} height={200} />
        <p className="produto-text">{name}</p>
      </a>
      <div className="qty-info">
        <p className="quantidade" id={`qty-${productName}`}>
          {quantity}
        </p>
        <p className="quantidade">Disponivel</p>
      </div>
      <button>{`Reservar ${name}`}</button>
    </article>
  );
};

const Home = () => {
  return (
    <div>
      <main className="vitrine">
        {/* Update the image paths */}
        <Product name="Breadboard" image="breadboard.jpg" quantity={3} />
        <Product name="Resistor" image="resistor.jpg" quantity={200} />
        <Product name="Arduino" image="arduino.jpg" quantity={4} />
        <Product name="Jumper" image="jumper.jpg" quantity={30} />
        <Product name="MPU-6050" image="mpu6050.webp" quantity={4} />
        <Product name="HC-06" image="hc06.jpg" quantity={5} />
        <Product name="NRF24L01" image="nrf24l01.jpg" quantity={2} />
        <Product name="Potenciômetro" image="potenciometro.webp" quantity={4} />
        <Product name="Botão" image="button.jpg" quantity={4} />

        {/* Add more product components here */}
      </main>
    </div>
  );
};

export default Home;
