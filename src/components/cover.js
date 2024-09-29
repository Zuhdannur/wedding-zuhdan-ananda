/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import backgroundImage from '../assets/images/bg-cover.jpg';
import Mouse from '../assets/images/mouse.svg'
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
        <div
            className="relative min-h-screen flex flex-col h-screen bg-cover bg-center justify-center"
            style={{
                backgroundImage: `
                url(${backgroundImage})
                ` }}
        >

            <div
                className="absolute inset-0 z-0"
                style={{
                    background: `
                    linear-gradient(0deg, rgba(123, 76, 130, 0.5), rgba(123, 76, 130, 0.5)),
                    linear-gradient(360deg, rgba(123, 76, 130, 0) 0%, rgba(123, 76, 130, 0.5) 100%)`     }} />

            <div data-aos="fade-up" className='mt-20 z-10 text-center animate-fadeInUp'>
                <p className='text-white font-second text-sm' >THE WEDDING OF</p>
                <h1 className="text-[28px] font-semibold text-white tracking-wide">ANANDA & ZUHDAN</h1>
                <span className="text-sm text-white font-second">#ANewchapterwithZUhdan</span>
            </div>

            <div className="flex-grow"></div>

            <div className="relative z-40 flex flex-col items-center justify-center bottom-20">
                <img src={Mouse} alt='mouse image' />
                <span data-aos="fade-bottom" className='text-xs font-second text-white mt-1'>Scroll ke Bawah</span>
            </div>

        </div>


    )
}