import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {

    return (
        <>
            <div className="home">

                <div>
                    <Carousel fade className=" flex justify-center carousel-image" indicators={false} controls={false}>
                        <Carousel.Item interval={2500}>
                            <img
                                src="https://i.imgur.com/zouDS2Q.jpeg"
                                alt="image 1"
                                className="h-1/3 w-full object-cover"
                            />

                        </Carousel.Item>

                        <Carousel.Item interval={2500}>
                            <img
                                src="https://i.imgur.com/kRHktkj.png"
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                        </Carousel.Item>

                        <Carousel.Item interval={2500}>

                            <img
                                src="https://i.imgur.com/LHmPVfp.jpeg"
                                alt="image 3"
                                className="h-full w-full object-cover"
                            />
                        </Carousel.Item>

                    </Carousel>
                </div>


                <div className='flex justify-center mt-40 mx-auto'></div>


                <div className="flex items-center justify-center">
                    <h1 className="max-w-4xl font-display font-medium tracking-tight text-slate-900 ">
                        <span className='flex items-center justify-center text-5xl sm:text-7xl flex flex-col gap-4'>

                            <p>Bem-vinde ao</p>
                            <p className='text-hunter-green'>AGreenfood</p>
                        </span>
                        <p className='text-justify text-slate-800 font-montserrat py-2 mt-2 mx-auto w-1/2'>
                            Somos um site onde você, agricultor loca, tem a oportunidade de divulgar seus produtos para um público de maior alcance!
                            Se registrando em nosso site, você poderar cadastrar os produtos que gostaria de vender! O valor para utilizar o site?
                            Somente a sua colaboração em divulgar nosso cantinho verde para que mais pessoas possam ter a oportunidade de fazer parte
                            dessa grande família.
                        </p>

                        <p className='text-justify text-slate-800 font-montserrat mt-2 mx-auto w-1/2'>
                            Na AGreenfood também nos empenhos a alcançar aqueles que mais precisam ser vistos. Temos o compromisso de fazer doações de cestas básicas
                            para pessoas de baixa ou nehuma renda. Todos que gostariam de contribuir com essa missão, podem entrar em contato conosco para mais detalhes! Curtiu nossa proposta? Fala login ou cadastre-se
                        </p>
                        <div className='text-center  mb-10 py-2'>
                            <Link to='/cadastro'>
                                <button className='bg-verde-leve hover:bg-android-verde font-poppins mt-2 mx-auto w-1/2 h-10 font-semibold border rounded-lg'>cadastrar</button>
                            </Link>
                        </div>
                    </h1>

                    <div className='flex items-center justify-center'>
                        <img className='w-1/2' src="https://docs.google.com/uc?id=1t6jWYttF6px5A6m1G5lboD8kPAD3mRgT" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home