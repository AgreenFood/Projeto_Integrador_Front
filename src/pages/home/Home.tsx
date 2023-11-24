import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

function Home() {

    return (
        <>
            <div className="bg-casca-ovo h-[100vh] home">

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

                <div className="flex mx-40 justify-around text-hunter-green">

                    <div className="flex flex-col gap-4 items-center mt-20">
                        <h2 className="text-5xl font-bold">Bem-vindes ao</h2>
                        <h2 className="text-5xl font-bold">AGreenFood!</h2>
                        <p className="text-xl font-montserrat font-bold me-0">Do campo direto para a sua mesa!</p>

                        <div className="flex justify-center">
                            <img
                                src="https://docs.google.com/uc?id=1t6jWYttF6px5A6m1G5lboD8kPAD3mRgT
                                "
                                alt="Imagem da Home"
                                width='300px'
                            />
                        </div>
                    </div>

                    <div className='w-1/2 mt-10' >
                        <h3 className='text-justify text-3xl font-poppins font-semibold uppercase mt-2 w-1/2 mx-auto'>Faça parte da nossa família!</h3>
                        <p className='text-justify text-slate-800 font-montserrat font-semibold mt-2 w-1/2 mx-auto'>
                            Somos um site onde você, agricultor loca, tem a oportunidade de divulgar seus produtos para um público de maior alcance!
                            Se registrando em nosso site, você poderar cadastrar os produtos que gostaria de vender! O valor para utilizar o site?
                            Somente a sua colaboração em divulgar nosso cantinho verde para que mais pessoas possam ter a oportunidade de fazer parte
                            dessa grande família.
                        </p>

                        <p className='text-justify text-slate-800 font-montserrat font-semibold mt-2 w-1/2 mx-auto'>
                            Na AGreenfood também nos empenhos a alcançar aqueles que mais precisam ser vistos. Temos o compromisso de fazer doações de cestas básicas
                            para pessoas de baixa ou nehuma renda. Todos que gostariam de contribuir com essa missão, podem entrar em contato conosco para mais detalhes! Curtiu nossa proposta? Fala login ou cadastre-se

                            <div className='flex justify-center'>
                                <button className='flex justify-center mx-auto mt-4 items-center bg-verde-leve w-40 h-10 rounded uppercase font-montserrat font-bold'>
                                    cadastrar
                                </button>
                                <button className='flex justify-center mx-auto mt-4 items-center bg-verde-leve w-40 h-10 rounded uppercase font-montserrat font-bold'>
                                    login
                                </button>
                            </div>
                        </p>
                    </div>

                </div>
            </div >

        </>
    )
}

export default Home