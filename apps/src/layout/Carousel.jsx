import React from 'react'
import AliceCaorusel from 'react-alice-carousel'
import images1 from '../assets/images/images.jpg'
import images2 from '../assets/images/images2.jpg'
import images3 from '../assets/images/images3.png'
import { Box, Container } from '@chakra-ui/react'
function Carousel() {
    const images =[
      <img src={images3}width={'100%'}height={'500px'}/>,
        <img src={images1}width={'100%'}height={'500px'}/>,
        <img src={images2}width={'100%'}height={'500px'}/>,
    ]
  return (
    <Container w={'100%'}maxW={'1440px'}>
        <AliceCaorusel items={images}/>
    </Container>
  )
}

export default Carousel