/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/img-redundant-alt */

import TopLeft from '../assets/images/img-profile-top-left.svg'
import TopRight from '../assets/images/img-profile-top-right.svg'
import Bismillah from '../assets/images/asset-bismillah.svg'
import ImgPhotoArea from '../assets/images/Photo-Area.svg'
import IconInstagram from '../assets/images/icon_instagram.svg'
import Separtor from '../assets/images/Separator.svg'
import BottomBackground from '../assets/images/img-profil-bottom.svg'


function PhotoArea({ nama, gender, father, mother, instagram, instagram_url }) {
    return (
        <div data-aos="zoom-in" className='text-center flex flex-col justify-center px-5'>
            <img src={ImgPhotoArea} alt='Photo Area' className='px-16' />
            <p className='text-[36px] text-primary font-bold'>{nama}</p>
            <span className='font-second text-[14px] font-medium mt-2'>{gender} Kedua dari <br />Bapak {father} dan <br /> {mother}</span>
            <div className='flex justify-center mt-3'>

                <a
                    href={instagram_url}
                    target='_blank'
                    className="flex items-center border-primary border-[1px] py-1 px-5 rounded-full text-primary cursor-pointer" rel="noreferrer"
                >
                    <img
                        src={IconInstagram}
                        alt="Instagram icon"
                        className="mr-2" // Add margin to the right for spacing
                    />
                    {instagram}
                </a>
            </div>
        </div>
    )
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Top Background Image */}
            <div className="absolute top-0 w-full h-full z-0">
                <div className="flex justify-between">
                    <img src={TopLeft} alt="background" className="w-full h-auto object-cover" />
                    <img src={TopRight} alt="background" className="w-full h-auto object-cover" />
                </div>
            </div>

            {/* Centered Logo and Name */}
            <div className="relative z-40 flex flex-col items-center justify-center top-16 animate-fadeInDown">
                <img data-aos="zoom-out-up" src={Bismillah} alt="bismillah" className="mb-4" />
                <span data-aos="zoom-out-down" className='px-5 text-center font-second text-xs text-[#303341]'>Maha Suci Allah yang telah menciptakan yang telah menciptakan makhluknya berpasang-pasangan.
                    Ya Allah perkenankanlah pernikahan putra-putri kami:</span>
            </div>

            <div className='relative z-40 flex flex-col items-center justify-center top-28 animate-fadeInDown '>
                <PhotoArea nama="Ananda Karina Muslimah, S.Pd." gender="Putri" father="Asep Rochman" mother="Aya Sofia Turan Bey" instagram="anandakrnm_" instagram_url="https://www.instagram.com/anandakrnm_/" />
                <img src={Separtor} alt='Sepaartor' className='w-full mt-6 mb-10' />
                <PhotoArea nama="Zuhdan Nur Ihsan Iskandar S.Kom." gender="Putra" father="Rachmat Iskandar" mother="Sri Dinursanti" instagram="zuhdan_nur" instagram_url="https://www.instagram.com/zuhdan_nur/" />
            </div>

            <img src={BottomBackground} className='w-full mt-[150px]' alt='background' />
        </div>
    );
}