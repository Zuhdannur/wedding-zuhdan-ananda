import BottomFlowers from '../assets/images/bottom-flowers.svg'
import Logo from '../assets/images/Logo AZ.svg'
import Date from '../assets/images/Date.svg'


function CreateButton({ text, onClick }) {
    return (
        <button className='border-[1px] border-primary text-primary text-xs py-2 px-5 rounded-full hover:bg-primary hover:text-white' onClick={onClick}>
            {text}
        </button>
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ section, setOpen, setOpenWallet }) {

    const scrollToSection = () => {
        section.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (

        <div className="relative min-h-screen flex flex-col bg-white dark:bg-white">
            <div className="bg-white relative z-30 flex flex-col items-center justify-center  animate-fadeInDown rounded-full min-h-screen mx-5">
                <h1 data-aos="zoom-in" className="text-[28px] font-semibold text-primary tracking-wide">Tanda Kasih</h1>
                <span data-aos="zoom-in" className='px-5 text-center font-second text-xs text-[#303341]'>Terima kasih telah menambah semangat kegembiraan pernikahan kami dengan kehadiran dan hadiah indah Anda.</span>

                <div data-aos="zoom-in" className='flex justify-center items-center my-2 gap-1'>
                    <CreateButton text="Angpao Digital" onClick={(val) => {
                        setOpenWallet(true)
                    }} />
                    <CreateButton text="Galeri Pernikahan" onClick={(val) => {
                        setOpen(true)
                    }} />
                </div>
                <div data-aos="zoom-in" className='flex justify-center items-center'>
                    <CreateButton text="Kisah Perjalanan Cinta" onClick={(val) => {
                        scrollToSection();
                    }} />

                </div>

                <div className='mt-28' >
                    <img src={Logo} alt='My logos' />
                    <img src={Date} alt='Date' />
                </div>


            </div>

            <div className='relative z-40 flex flex-col items-center justify-center top-36 animate-fadeInDown'>
            </div>



            <div className='absolute bottom-0 z-40 w-full'>
                <img src={BottomFlowers} alt="background" className="w-full h-auto object-cover" />
            </div>
        </div>
    );
}