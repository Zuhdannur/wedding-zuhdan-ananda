import BorderRight from '../assets/images/border-right.svg'
import BorderLeft from '../assets/images/border-left.svg'
import BottomFlowers from '../assets/images/bottom-flowers.svg'
import BottomRights from '../assets/images/bottom-right-flowers.svg'
import BottomLeft from '../assets/images/bottom-left-flowers.svg'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (

        <div className="relative min-h-screen flex flex-col bg-[#ECE3ED] py-24">
            {/* Top Background Image */}
            <div className="absolute top-10 right-0 h-full z-40">
                <img src={BorderRight} alt="background" className="w-full h-auto " />
            </div>

            <div className="absolute top-10 left-0 h-full z-40">
                <img src={BorderLeft} alt="background" className="w-full h-auto " />
            </div>


            <div className="relative z-30 flex flex-col items-center justify-center  animate-fadeInDown rounded-full mx-5">
                <h1 className="text-[28px] font-semibold text-primary tracking-wide">Ucapan dan Do’a</h1>
                <span className='px-5 text-center font-second text-xs text-[#303341] mt-1'>Kirim ucapan dan do’a untuk kedua mempelai:</span>

                <button className='bg-primary py-2 px-8 text-white rounded-full mb-5 font-second mt-3 hover:bg-white hover:text-primary '>
                    Kirim Ucapan
                </button>




            </div>

            <div className='relative z-40 flex flex-col items-center justify-center top-36 animate-fadeInDown'>
            </div>



            <div className='absolute bottom-0 z-40 w-full'>
                <img src={BottomFlowers} alt="background" className="w-full h-auto object-cover" />
            </div>
            <div className='absolute bottom-0 right-0 z-40'>
                <img src={BottomRights} alt="background" className="w-[150px] h-auto object-cover" />
            </div>
            <div className='absolute bottom-0 left-0 z-40'>
                <img src={BottomLeft} alt="background" className="w-[150px] h-auto object-cover" />
            </div>
        </div>
    );
}