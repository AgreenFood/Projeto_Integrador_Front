import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Equipe.css'


export default function Equipe() {

  return (

    <>

      <div className="flex grid-cols-2 h-screen">

        <div className='flex grid-cols-2 w-full py-20'>
          <div className='block w-100 p-10 py-39 mx-20 mt-10' >
            <Carousel className='Carousel' indicators={false} fade>
              <Carousel.Item interval={3500}>
                <img
                  className="d-block w-100"
                  src="https://media.licdn.com/dms/image/D4D03AQGm8hHlgvVjdg/profile-displayphoto-shrink_800_800/0/1696520878977?e=1720656000&v=beta&t=Idod2gtttSoGi-15_Afneg4aql2qsJxptGSiKbirZrg"
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
                  src="https://media.licdn.com/dms/image/D4D03AQHflIyrjGSK5Q/profile-displayphoto-shrink_800_800/0/1696358800469?e=1721260800&v=beta&t=RieswSgSu03c9x1P1pSioIDy8XY0XJ6WKrqK7J5OiZ8"
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
                  src="https://media.licdn.com/dms/image/D4D03AQHRfyXfMVwkEQ/profile-displayphoto-shrink_800_800/0/1689220258384?e=1720656000&v=beta&t=aBVszJotwY3x2x1AU7VH-bzkwqo9JLiYzhW9s8bQgug"
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
                  src="https://media.licdn.com/dms/image/C5603AQH3A_2ejIkahQ/profile-displayphoto-shrink_800_800/0/1612988884754?e=1721260800&v=beta&t=VBUmtQ6gJ9TVCmnVDAqty8E6Ft9lxI5KEoFQoSDdl-A"
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
                  src="https://media.licdn.com/dms/image/D4D03AQGRi2Fpjzn7yA/profile-displayphoto-shrink_800_800/0/1693436206525?e=1721260800&v=beta&t=ZplARDMWQGvfguWxs45U2n41422ptHag44aCqWO-QnU"
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
                  src="https://media.licdn.com/dms/image/D4D03AQFUxtNOpoqjAA/profile-displayphoto-shrink_800_800/0/1697444167675?e=1721260800&v=beta&t=a4WljbsD7vS47IVAc9fRnwfqEa7AeQN8sMF_Kk8OOG8"
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


            <div className='bg-android-verde border rounded py-20' style={{ boxShadow: '2px 2px 5px rgba(0, 0, 0, 10)' }}>
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
