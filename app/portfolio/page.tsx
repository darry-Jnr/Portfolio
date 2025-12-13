'use client';

import Container from '../components/Container';
import Cta from '../components/cta/Cta';
import Footer from '../components/footer/Footer';



const page = () => {
  return (
    <div className='pt-20 md:pt-24'>
      <Container>
        <div>
           
            <Cta />
            <Footer />
        </div>
      </Container>
    </div>
  )
}

export default page
