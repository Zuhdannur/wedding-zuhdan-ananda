
import Cover from '../components/cover'
import OurStory from '../components/our-story'
import Profile from '../components/profil'
import Event from '../components/event'
import Location from '../components/location'
import Prayers from '../components/prayers'
import Footer from '../components/footer'
import Thanks from '../components/thanks'
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
        <div>
            <Cover />
            <OurStory />
            <Profile />
            <Event />
            <Location />
            <Prayers />
            <Thanks />
            <Footer />
        </div>
    )
}