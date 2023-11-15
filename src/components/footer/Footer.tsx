import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-maio-verde text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-montserrat font-bold'>
                        AGreenFood | Copyright: {data}
                    </p>
                    <p className='font-montserrat text-lg'>
                        Acesse nossas redes sociais
                    </p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={48} weight='bold' />
                        <InstagramLogo size={48} weight='bold' />
                        <FacebookLogo size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer