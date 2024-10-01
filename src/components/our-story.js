import bgTop from '../assets/images/bg-top-01.svg'
import OurStoryImg1 from '../assets/images/img-our-story-1.svg'
import Connector from '../assets/images/Connector.svg'
import OurStoryImg2 from '../assets/images/img-our-story-bottom-1.svg'
import OurStoryImg3 from '../assets/images/img-our-story-bottom-2.svg'

function StorySection({ title, description, withTimeLine = true }) {
    return (
        <div data-aos="zoom-out-up" className='flex flex-col justify-center text-center'>
            <p className='text-[20px] text-primary tracking-wide leading-[32px] mt-4 font-bold'>{title}</p>
            <span className='font-second text-[12px] leading-[18px] italic text-[#575B6A]'>“{description}”</span>
            {withTimeLine && <img className='mt-4' src={Connector} alt='connector' />}

        </div>
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ section }) {
    return (
        <div ref={section} className="relative min-h-screen flex flex-col">
            {/* Top Background Image */}
            <div className="absolute top-0 w-full h-full z-0">
                <img src={bgTop} alt="background" className="w-full h-auto object-cover" />
            </div>

            {/* Centered Logo and Name */}
            <div className="relative z-40 flex flex-col items-center justify-center top-16 animate-fadeInDown">
                <img src={OurStoryImg1} alt="zuhdan & anandan logo" className="mb-4" />
                <h1 data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom" className="text-[28px] font-semibold text-primary tracking-wide">Our Love Story</h1>
            </div>

            <div
                className='relative z-40 flex flex-col items-center justify-center top-32 animate-fadeInDown px-5'>
                <StorySection title="2015" description="Di sebuah ruang kelas 9E di SMPN 25, dua jiwa dipertemukan. Saat itu, kebersamaan terjalin dalam kesederhanaan, hanya sepasang teman yang saling berbagi cerita tanpa banyak harap. Namun, waktu berlalu, dan jarak memisahkan langkah kami tanpa isyarat" />
                <StorySection title="2019" description="Seiring waktu yang berjalan, komunikasi yang sempat terputus kembali terajut. Percakapan demi percakapan membawa kenangan lama kembali hidup, seolah takdir memberi kesempatan kedua. Dalam canda dan tawa yang sempat hilang, perasaan yang dulu samar kini mulai menemukan bentuknya." />
                <StorySection title="2021" description="Di tahun ini, kami tak lagi sekadar berbicara. Sebuah komitmen terucap, bukan hanya untuk saling menjaga, tetapi untuk menempuh perjalanan menuju cinta yang lebih serius. Kami berjanji untuk tumbuh bersama, mengatasi badai dan menyulam mimpi, dengan keyakinan bahwa setiap langkah membawa kami lebih dekat pada masa depan yang dirajut berdua." />
                <StorySection title="Finally" description="Akhirnya kita bersama didalam pernikahan yang sakral, semoga allah swt meridoi pernikahan kita" withTimeLine={false} />
            </div>



            <div className='bottom-0 z-0 w-full mt-[120px]'>
                <div className="flex justify-between">
                    <img src={OurStoryImg2} alt="background" className="w-full h-auto object-cover" />
                    <img src={OurStoryImg3} alt="background" className="w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    );
}