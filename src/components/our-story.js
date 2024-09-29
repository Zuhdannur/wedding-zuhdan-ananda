import bgTop from '../assets/images/bg-top-01.svg'
import OurStoryImg1 from '../assets/images/img-our-story-1.svg'
import Connector from '../assets/images/Connector.svg'
import OurStoryImg2 from '../assets/images/img-our-story-bottom-1.svg'
import OurStoryImg3 from '../assets/images/img-our-story-bottom-2.svg'

function StorySection({ title, description, withTimeLine = true }) {
    return (
        <div className='text-center'>
            <p className='text-[20px] text-primary tracking-wide leading-[32px] mt-4 font-bold'>{title}</p>
            <span className='font-second font-[12px] leading-[18px] tracking-wide italic text-[#575B6A]'>“{description}”</span>
            {withTimeLine && <img className='mt-4' src={Connector} alt='connector' />}

        </div>
    )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Top Background Image */}
            <div className="absolute top-0 w-full h-full z-0">
                <img src={bgTop} alt="background" className="w-full h-auto object-cover" />
            </div>

            {/* Centered Logo and Name */}
            <div className="relative z-40 flex flex-col items-center justify-center top-16 animate-fadeInDown">
                <img src={OurStoryImg1} alt="zuhdan & anandan logo" className="mb-4" />
                <h1 className="text-[28px] font-semibold text-primary tracking-wide">Our Love Story</h1>
            </div>

            <div className='relative z-40 flex flex-col items-center justify-center top-36 animate-fadeInDown'>
                <StorySection title="2018" description="Bertemu di sekoah SMP xxxx" />
                <StorySection title="2018" description="Bertemu di sekoah SMP xxxx" />
                <StorySection title="2018" description="Bertemu di sekoah SMP xxxx" />
                <StorySection title="Finally" description="Akhirnya kita bersama didalam pernikahan yang sakral, semoga tuhan meridoi pernikahan kita" withTimeLine={false} />
            </div>



            <div className='absolute bottom-0 z-0 w-full'>
                <div className="flex justify-between">
                    <img src={OurStoryImg2} alt="background" className="w-full h-auto object-cover" />
                    <img src={OurStoryImg3} alt="background" className="w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    );
}