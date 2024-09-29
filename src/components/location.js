import TopFlowers from '../assets/images/top-flowers.svg'
import BottomFlowers from '../assets/images/bottom-flowers.svg'
import OurStoryImg1 from '../assets/images/img-our-story-1.svg'
import Ring from '../assets/images/ring.png'
import Glass from '../assets/images/glass.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (

        <div className="relative min-h-screen flex flex-col bg-[#ECE3ED]">
            {/* Top Background Image */}
            <div className="absolute top-0 w-full h-full z-40">
                <img src={TopFlowers} alt="background" className="w-full h-auto object-cover" />
            </div>


            {/* Centered Logo and Name */}
            <div className='absolute z-30 w-full max-w-md px-5'>
                <div className="bg-white z-30 animate-fadeInDown border-[4px] border-[#7B4C821A] rounded-full min-h-screen w-full" />
            </div>

            <div className="relative z-50 flex flex-col items-center justify-center  animate-fadeInDown rounded-full min-h-screen mx-5">
                <img src={OurStoryImg1} alt="zuhdan & anandan logo" className="mb-4" />
                <h1 data-aos="zoom-in" className="text-[28px] font-semibold text-primary tracking-wide">Lokasi Acara</h1>
                <span className='px-5 text-center font-second text-xs text-[#303341]'>Kami menantikan kehadiran para keluarga dan sahabat kami dalam acara istimewa yang akan diselenggarakan pada:</span>

                <div className='border-b-[1px] border-b-[#7B4C8266] border-t-[1px] border-t-[#7B4C8266] py-5 w-[280px] text-center my-5'>
                    <p className='font-bold text-[18px] text-primary'>Sabtu, 12 Oktober 2024</p>
                </div>



                <div data-aos="fade-left" className='bg-[#F9F6F7] py-5 px-5 rounded-[24px] w-[280px] flex justify-between items-center mb-4'>
                    <div>
                        <p className='text-[18px] text-primary font-bold'>Akad Nikah</p>
                        <p className='text-[12px] font-second'>08.00 - 10.00</p>
                    </div>

                    <img src={Ring} alt='ring' />

                </div>

                <div data-aos="fade-right" className='bg-[#F9F6F7] py-5 px-5 rounded-[24px] w-[280px] flex justify-between items-center mb-4'>
                    <img src={Glass} alt='ring' />

                    <div>
                        <p className='text-[18px] text-primary font-bold'>Resepsi</p>
                        <p className='text-[12px] font-second'>11.00 - 13.00</p>
                    </div>

                </div>

                <p className='text-[16px] font-semibold text-primary mb-1'>Rumah Makan Ponyo Malabar</p>
                <span className='text-xs font-second mb-5'>
                    Jl. Malabar No.60, Malabar, <br />Kec. Lengkong, Kota Bandung
                </span>

                <a className='bg-primary py-2 px-8 text-white rounded-full mb-5 font-second z-50 hover:bg-white hover:text-primary hover:border-primary hover:border-[1px]'
                    href="https://www.google.com/maps/dir/?api=1&destination=Ponyo+Malabar,+Jl.+Malabar+No.60,+Malabar,+Kec.+Lengkong,+Kota+Bandung,+Jawa+Barat+40111" target="_blank" rel="noopener noreferrer"
                >
                    Petunjuk Lokasi
                </a>

            </div>

            <div className='relative z-40 flex flex-col items-center justify-center top-36 animate-fadeInDown'>
            </div>



            <div className='absolute bottom-0 z-40 w-full'>
                <img src={BottomFlowers} alt="background" className="w-full h-auto object-cover" />
            </div>
        </div>
    );
}