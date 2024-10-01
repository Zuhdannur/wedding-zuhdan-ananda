// eslint-disable-next-line
import bgTopLeft from '../assets/images/bg-top-left-01.svg'
import bgBottomRight from '../assets/images/bg-bottom-right-01.png'
import Logo from '../assets/images/Logo AZ.svg'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
// eslint-disable-next-line import/no-anonymous-default-export

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ open }) {
    const params = useQuery();
    const code = params.get('invitation')
    const [name, setName] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (code) {
            try {
                const decoded = jwtDecode(code);
                setName(decoded.name);
            } catch (e) {
                setError(true);
            }
        } else {
            setError(true)
        }
    }, [code])

    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Top Background Image */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img src={bgTopLeft} alt="background" className="w-full h-auto object-cover" />
            </div>

            {/* Centered Logo and Name */}
            <div className="relative z-40 flex flex-col items-center justify-center top-32 animate-fadeInDown">
                <img data-aos="fade-up" src={Logo} alt="zuhdan & anandan logo" className="mb-4" />
                <h1 data-aos="fade-down" className="text-[28px] font-semibold text-primary tracking-wide">ANANDA & ZUHDAN</h1>
                <span className="text-sm font-second">#ANewchapterwithZUhdan</span>
            </div>

            {/* Spacer to push content to the bottom */}
            <div className="flex-grow"></div>

            {/* Content at the Bottom of the Page */}
            <div className="relative z-40 flex flex-col items-center justify-center bottom-28 rounded-[24px] backdrop-blur-2xl mx-5 px-3 py-5 animate-fadeInUp">
                {!error && <>
                    <p className='font-second mb-2 text-[#303341]'>Kepada Bapak/Ibu/Saudara/i</p>
                    <h2 className='text-[28px] text-pink text-center'>{name}</h2>
                    <span className="text-sm text-center text-black my-5 font-second">Tanpa Mengurangi Rasa Hormat,Turut Mengundang untuk Dapat Hadir di Acara Pernikahan Kami.</span>
                </>}

                {error && <>
                    <p className='font-second text-[#303341]'>Hallo, Terima Kasih Telah membukan Website ini</p>
                    <span className="text-sm text-center text-black mb-5 font-second">Tanpa Mengurangi Rasa Hormat,Terima Kasih Telah Membuka Website Pernikahan Kami.</span>
                </>}

                <button onClick={() => {
                    if (!error) open(true)
                }} className='bg-primary py-2 px-8 text-white rounded-full mb-5 font-second'>
                    {error ? 'Asiik nikah' : 'Buka Undangan'}
                </button>
            </div>

            {/* Bottom Right Background Image */}
            <div className="absolute bottom-0 right-0 z-0">
                <img src={bgBottomRight} alt="background" className="w-auto h-auto object-cover" />
            </div>
        </div>
    );
}
