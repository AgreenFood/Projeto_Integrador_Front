function Contato() {
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    };

    function send() {

    }

    return (
        <div className="flex justify-around bg-casca-ovo h-[80vh]">
            <div>
                <div className="max-w-7xl flex flex-col items-center py-8">
                    <h1 className="font-poppins font-bold text-verde-leve text-5xl uppercase">AGreenFood</h1>
                    <p className="font-montserrat font-bold text-android-verde">Entre em contato conosco:</p>
                </div>

                <div className="max-w-7xl flex flex-col items-center">


                    <div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="nome" className="uppercase">Nome:</label>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    placeholder="Seu nome"
                                    required
                                    className="rounded"
                                />
                            </div>

                            <label htmlFor="email" className="uppercase">E-mail:</label>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Seu e-mail"
                                    required
                                    className="rounded"
                                />
                            </div>
                            <label htmlFor="assunto" className="uppercase">Assunto:</label>
                            <div className="form-group">
                                <textarea
                                    id="assunto"
                                    name="assunto"
                                    placeholder="Escreva seu assunto aqui"
                                    cols="30"
                                    rows="5"
                                    required
                                    className="rounded"
                                ></textarea>
                            </div>

                            <div className="py-3">
                                <button type="submit" className="bg-android-verde px-3 rounded" onClick={send}>Enviar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <div className="py-8">
                <iframe width="500" height="400" src="https://www.youtube.com/embed/7JCJbQ28DAI?autoplay=1"
                    title="Fome Zero e Agricultura Sustentável - ODS 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
            </div>
        </div>

    );
}

export default Contato;