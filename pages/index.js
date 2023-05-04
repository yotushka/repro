import DefaultLayout from '@/features/Layouts/DefaultLayout'
import HeroBanner from '@/features/Home/components/HeroBanner'
import MeetTheTeam from '@/features/Home/components/MeetTheTeam';
import Partners from '@/features/Home/components/Partners';
import Testimonials from '@/features/Home/components/Testimonials';
import { getProperties } from '@/features/common/Api/getProperties';


const Home = () => {
  return (
    <DefaultLayout>
      <HeroBanner />
      <MeetTheTeam />
      <Partners />
      <Testimonials />
    </DefaultLayout>
  );
}

export default Home;
