
import Cover from '../components/cover'
import OurStory from '../components/our-story'
import Profile from '../components/profil'
import Event from '../components/event'
import Location from '../components/location'
import Prayers from '../components/prayers'
import Footer from '../components/footer'
import Thanks from '../components/thanks'
import Gallery from '../components/gallery'
import Wallet from '../components/wallet'

import { useEffect, useRef, useState } from 'react'
import Music from '../assets/mp3/music.mp3'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [open, setOpen] = useState(false)
    const [openWallet, setOpenWallet] = useState(false)

    const sectionStoryRef = useRef(null);

    useEffect(() => {
        setIsPlaying(false);
        playPauseMusic();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const playPauseMusic = () => {
        // if (isPlaying) {
        //     audioRef.current.pause();
        //     setIsPlaying(false);
        // } else {
        //     audioRef.current.play();
        //     setIsPlaying(true);
        // }
    };

    return (
        <div className='relative'>
            <audio ref={audioRef}>
                <source src={Music} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
            <button onClick={playPauseMusic} className='fixed bottom-10 right-6 z-[99999] bg-primary border-[1px] border-white text-white w-32 rounded-full font-second px-4 py-[4px]'>
                {isPlaying ? 'Pause' : 'Play'} Music
            </button>
            <Cover />
            <OurStory section={sectionStoryRef} />
            <Profile />
            <Event />
            <Location />
            <Prayers />
            <Thanks section={sectionStoryRef} setOpen={setOpen} setOpenWallet={setOpenWallet} />
            <Footer />
            <Gallery open={open} setOpen={setOpen} />
            <Wallet open={openWallet} setOpen={setOpenWallet} />

        </div>
    )
}