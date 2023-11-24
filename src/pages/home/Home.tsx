import Carousel from 'react-bootstrap/Carousel';

function Home() {

    return (
        <>
            <div className="bg-casca-ovo h-[100vh]">

                <div>
                    <Carousel fade className=" flex justify-center h-40" indicators={false} controls={false}>
                        <Carousel.Item interval={3500}>
                            <img
                                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />

                        </Carousel.Item>

                        <Carousel.Item interval={3500}>
                            <img
                                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                        </Carousel.Item>

                        <Carousel.Item interval={3500}>

                            <img
                                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                                alt="image 3"
                                className="h-full w-full object-cover"
                            />
                        </Carousel.Item>

                    </Carousel>
                </div>

                <div className="container grid grid-cols-2 font-poppins text-hunter-green bg-casca-ovo">

                    <div className="flex flex-col gap-4 items-center justify-center mt-40">
                        <h2 className="text-5xl font-bold">Bem-vindes ao</h2>
                        <h2 className="text-5xl font-bold">AGreenFood!</h2>
                        <p className="text-xl font-montserrat font-bold me-0">Do campo direto para a sua mesa!</p>

                        <div className="flex justify-center">
                            <img
                                src="https://docs.google.com/uc?id=1t6jWYttF6px5A6m1G5lboD8kPAD3mRgT
                                "
                                alt="Imagem da Home"
                                width='400px'
                            />
                        </div>

                    </div>

                    <div className="flex justify-center items-center ">



                    </div>

                </div>
            </div >

        </>
    )
}

export default Home