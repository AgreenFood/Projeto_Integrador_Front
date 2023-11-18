import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Equipe() {
  return (
    <div className='flex grid-cols-2'>
    <div className='block w-1/2 p-30' >
      <Carousel fade>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src="..\..\src\assets\img\equipe\elisa_souza.jpg"
            alt="Elisa Souza"
          />
          <Carousel.Caption>
            <h1 className='mb-4 text-white text-3xl md:text-4xl lg:text-5xl'>Elisa Souza</h1>
            <p>Dev Jr com ascendência em Sr</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src="..\..\src\assets\img\equipe\gabriel_assis.jpg"
            alt="Gabriel Assis"
          />
          <Carousel.Caption>
            <h1 className='mb-4 text-white text-3xl md:text-4xl lg:text-5xl'>Gabriel Assis</h1>
            <p>Dev Jr com ascendência em Sr</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src="..\..\src\assets\img\equipe\katia_mendes.jpg"
            alt="Katia Mendes"
          />
          <Carousel.Caption>
            <h1 className='mb-4 text-white text-3xl md:text-4xl lg:text-5xl'>Katia Mendes</h1>
            <p>Dev Jr com ascendência em Sr</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src="..\..\src\assets\img\equipe\olavo_pessoa.jpg"
            alt="Olavo Pessôa"
          />
          <Carousel.Caption>
            <h1 className='mb-4 text-white text-3xl md:text-4xl lg:text-5xl'>Olavo Pessôa</h1>
            <p>Dev Jr com ascendência em Sr</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src="..\..\src\assets\img\equipe\raphael_gomes.jpg"
            alt="Raphael Gomes"
          />
          <Carousel.Caption>
            <h1 className='mb-4 text-white text-3xl md:text-4xl lg:text-5xl'>Raphael Gomes</h1>
            <p>Apenas um dev</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3500}>
          <img
            className="d-block w-100"
            src="..\..\src\assets\img\equipe\raquel_barreto.jpg"
            alt="Raquel Barreto"
          />
          <Carousel.Caption>
            <h1 className='mb-4 text-white text-3xl md:text-4xl lg:text-5xl'>Raquel Barreto</h1>
            <p>Que Deus a tenha</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className='grid place-items-center'>
      <div className='text-center'>
        <h1>Equipe 5 do Projeto Integrador</h1>
      <p>Equipe composta por Elisa Souza, Gabriel Assis, Katia Mendes, Olavo Pessôa e Raphael Gomes</p>
      </div>
    </div>
    </div>
  );
}