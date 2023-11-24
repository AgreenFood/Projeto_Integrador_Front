import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Equipe.css'


export default function Equipe() {

  return (

    <>

      <div className="flex grid-cols-2 h-screen">

        <div className='flex grid-cols-2 w-full py-20'>
          <div className='block w-100 p-10 py-30 mx-20 mt-10' >
            <Carousel className='Carousel' indicators={false} fade>
              <Carousel.Item interval={3500}>
                <img
                  className="d-block w-100"
                  src="https://docs.google.com/uc?id=1X2YDTq7uHOZcOhfq4VroTDyERLsXNyju"
                  alt="Elisa Souza"
                />

                <p className='mb-4 text-black md:text-4xl lg:text-3xl text-center'>Elisa Souza</p>
                <div className='flex justify-center gap-2'>
                  <a href='https://www.linkedin.com/in/elisa-souzaa' target='_blank' rel='noopener noreferrer'>
                    <LinkedinLogo size={48} weight='bold' />
                  </a>
                  <a href='https://github.com/ElisaSouzaaa' target='_blank' rel='noopener noreferrer'>
                    <GithubLogo size={48} weight='bold' />
                  </a>
                </div>

              </Carousel.Item>
              <Carousel.Item interval={3500}>
                <img
                  className="d-block w-100"
                  src="https://docs.google.com/uc?id=1cV51LBU_LAKH3UrdUVfxbEZHBo5_UJv4"
                  alt="Gabriel Assis"
                />
                <p className='mb-4 text-black md:text-4xl lg:text-3xl text-center'>Gabriel Assis</p>
                <div className='flex justify-center gap-2'>
                  <a href='https://www.linkedin.com/in/gabriel-deassis/' target='_blank' rel='noopener noreferrer'>
                    <LinkedinLogo size={48} weight='bold' />
                  </a>
                  <a href='https://github.com/GabAssis' target='_blank' rel='noopener noreferrer'>
                    <GithubLogo size={48} weight='bold' />
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3500}>
                <img
                  className="d-block w-100"
                  src="https://docs.google.com/uc?id=14roeltlRhPAfuu4HjcH_Ot1t9dTo4ID2"
                  alt="Katia Mendes"
                />
                <p className='mb-4 text-black md:text-4xl lg:text-3xl text-center'>Katia Mendes</p>
                <div className='flex justify-center gap-2'>
                  <a href='https://www.linkedin.com/in/katiamendesr/' target='_blank' rel='noopener noreferrer'>
                    <LinkedinLogo size={48} weight='bold' />
                  </a>
                  <a href='https://github.com/katia-mendes' target='_blank' rel='noopener noreferrer'>
                    <GithubLogo size={48} weight='bold' />
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3500}>
                <img
                  className="d-block w-100"
                  src="https://docs.google.com/uc?id=1ftnqFg64PRVca_0uO4u9RwgTd3E8O4vx"
                  alt="Olavo Pessôa"
                />
                <p className='mb-4 text-black md:text-4xl lg:text-3xl text-center'>Olavo Pessôa</p>
                <div className='flex justify-center gap-2'>
                  <a href='https://www.linkedin.com/in/olavo-pess%C3%B4a/' target='_blank' rel='noopener noreferrer'>
                    <LinkedinLogo size={48} weight='bold' />
                  </a>
                  <a href='https://github.com/Olavo5' target='_blank' rel='noopener noreferrer'>
                    <GithubLogo size={48} weight='bold' />
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3500}>
                <img
                  className="d-block w-100"
                  src="https://docs.google.com/uc?id=1T_bVO8O1mB8-6njV0eUIs0ke6HQTtW8G"
                  alt="Raphael Gomes"
                />
                <p className='mb-4 text-black md:text-4xl lg:text-3xl text-center'>Raphael Gomes</p>
                <div className='flex justify-center gap-2'>
                  <a href='https://www.linkedin.com/in/raphaelfsg/' target='_blank' rel='noopener noreferrer'>
                    <LinkedinLogo size={48} weight='bold' />
                  </a>
                  <a href='https://github.com/raphaelfsg' target='_blank' rel='noopener noreferrer'>
                    <GithubLogo size={48} weight='bold' />
                  </a>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={3500}>
                <img
                  className="d-block w-100"
                  src="https://docs.google.com/uc?id=1uJgc9WsCmBdCly0sWP17ECp5-B4-siH4"
                  alt="Raquel Barreto"
                />
                <p className='mb-4 text-black md:text-4xl lg:text-3xl text-center'>Raquel Barreto</p>
                <div className='flex justify-center gap-2'>
                  <a href='https://www.linkedin.com/in/raquelsbarreto/' target='_blank' rel='noopener noreferrer'>
                    <LinkedinLogo size={48} weight='bold' />
                  </a>
                  <a href='https://github.com/Kel2203' target='_blank' rel='noopener noreferrer'>
                    <GithubLogo size={48} weight='bold' />
                  </a>
                </div>
              </Carousel.Item>
            </Carousel>
            
          </div>

          <div className='mx-10'></div>

          <div className='text-center mx-10'>

            <h1 className="text-5xl text-hunter-green font-poppins font-bold uppercase mt-4">Somos a AGreenFood!</h1>

            <p className="text-lg text-verde-leve font-poppins font-bold py-2">
              E-commerce com alimentos orgânicos produzidos por pequenos produtores rurais.
            </p>


            <div className='bg-android-verde border rounded py-2' style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 10)' }}>
              <p className='text-justify mt-2 w-1/2 mx-auto'>
                Acreditamos que a agricultura orgânica é uma forma de produção sustentável que beneficia o meio ambiente, os produtores rurais e os consumidores. Os alimentos orgânicos são produzidos sem o uso de agrotóxicos, fertilizantes químicos ou outros insumos artificiais.
                Isso os torna mais saudáveis para os consumidores e mais seguros para o meio ambiente.

                A AgeenFood surgiu da necessidade de conectar pequenos produtores rurais com consumidores interessados em alimentos orgânicos. Nosso objetivo é contribuir para o desenvolvimento da agricultura orgânica no Brasil e para o cumprimento do ODS 2 da ONU: acabar com a fome, alcançar a segurança alimentar, melhoria da nutrição e promover a agricultura sustentável.
              </p>

              <p className='text-justify mt-2 w-1/2 mx-auto'>
                A AGreenFood trabalha com uma rede de pequenos produtores rurais de todo o Brasil. Esses produtores são selecionados por critérios de qualidade, sustentabilidade e responsabilidade social.
                Os produtos orgânicos são comercializados a preços acessíveis, para que todas as pessoas tenham acesso a alimentos saudáveis e de alta qualidade.
              </p>

              <p className='text-justify mt-2 w-1/2 mx-auto'>
                Faça parte da AgreenFood e ajude a construir um mundo mais sustentável. Compre alimentos orgânicos e apoie pequenos produtores rurais.
                Acesse nosso site e conheça nossos produtos!
              </p>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}
