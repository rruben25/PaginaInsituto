import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width:"25%"}} >
      <Carousel.Item>
        <img width="600px" src="https://turismoalmanzora.com/wp-content/uploads/burro.jpg" alt="Estatua Burro Albox"/>
        <Carousel.Caption>
          <h3>Estatua Plaza Burro</h3>
          <p>Estatua plaza burro Albox, estatua creada a base de marmol.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0YrNtarMPa4QX4KG0Om6g-aDtNzxPQePOQ&s" alt="Santuario del Saliente"/>
        <Carousel.Caption>
          <h3>Santuario Del Saliente</h3>
          <p>Santuario Del Saliente, ubicada en el saliente alto de Albox</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width="600px" src="https://turismoalmanzora.com/wp-content/uploads/foto-concurso2018-albox-plaza-pueblo-elena-murcia-coll-1.jpg" alt="Plaza Pueblo" />
        <Carousel.Caption>
          <h3>Plaza del pueblo de Albox</h3>
          <p>Plaza del pueblo de Albox, zona iconica del pueblo          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;