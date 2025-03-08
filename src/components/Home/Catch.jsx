// import { Carousel, RadioGroup, Radio, Divider } from 'rsuite';
// import 'rsuite/dist/rsuite.min.css';
// import { Box, Text, Flex } from "@chakra-ui/react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import bannerImg1 from '../../assets/banner/1.jpg';
// import bannerImg2 from '../../assets/banner/2.jpg';
// import bannerImg5 from '../../assets/banner/5.jpg';
// import bannerImg6 from '../../assets/banner/6.jpg';
// import bannerImg7 from '../../assets/banner/7.jpg';

// function BannerShow() {

//   return <Carousel
//     placement={'bottom'}
//     autoplay
//     shape={'bar'}
//     className="custom-slider"
//   >
//     <img src={bannerImg1} height="250" />
//     <img src={bannerImg2} height="250" />
//     <img src={bannerImg5} height="250" />
//     <img src={bannerImg6} height="250" />
//     <img src={bannerImg7} height="250" />
//   </Carousel>

// }

// export default BannerShow;

import { Box, Text, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel, RadioGroup, Radio, Divider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import bannerImg1 from '../../assets/banner/1.jpg';
import bannerImg2 from '../../assets/banner/2.jpg';
import bannerImg5 from '../../assets/banner/5.jpg';
import bannerImg6 from '../../assets/banner/6.jpg';
import bannerImg7 from '../../assets/banner/7.jpg';
import lcaImg from '../../assets/banner/LCA.jpg';
import suImg from '../../assets/banner/sukhoi-su-mki.jpg';
import sukhoi from '../../assets/banner/Sukhoi.jpg';
import './Carousal.css';

const ResponsiveBanner = () => {
  const [banner, setBanner] = useState({});


  useEffect(() => {
    get_banner()
  }, [])

  async function get_banner() {
    await axios.get(`${import.meta.env.VITE_API_URL}/banner`).then(res => {
      setBanner(res.data.data);
    }).catch(err => {
      console.log(err);

    })
  }

  return (
    <Flex
      position="relative"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        height={{ base: "300px", md: "500px" }}
        width={{ base: "100%", md: "75%" }}
        ml={{ base: "0", md: "auto" }}
        backgroundImage={banner?.image}
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Carousel
          placement={'bottom'}
          autoplay
          autoplayInterval={4500}
          shape={'bar'}
          className="custom-slider"
        >
          <img src={bannerImg1} height={300} />
          <img src={bannerImg2} height={300} />
          {/* <img src={bannerImg5} height={300} /> */}
          <img src={lcaImg} height={300} />
          <img src={sukhoi} height={300} />
          <img src={bannerImg6} height={300} />
          <img src={bannerImg7} height={300} />
        </Carousel>

        <Box
          position="absolute"
          top={{ base: "50%", md: "20%" }}
          left={{ base: "50%", md: "20px" }}
          transform={{ base: "translate(-50%, -50%)", md: "none" }}
          height={'65%'}
          width={{ base: "80%", md: "35%" }}
          padding="20px"
          backgroundColor="rgba(255, 255, 255, 0.8)"
          zIndex="1"
          textAlign={{ base: "center", md: "left" }}
          ml={{ base: "0", md: "30px" }}
          borderRadius="0"
        >
          <Box
            position="absolute"
            top="-9px"
            left="25px"
            height="15px"
            width="100px"
            boxShadow={'md'}
            backgroundColor="#4c90dd"
            transform="skew(-30deg)"
            zIndex="1"
          />
          {/* <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold">
            {banner?.title}
          </Text> */}
          <Text fontStyle={'italic'} textAlign={'justify'} fontSize={'large'}>
            Society of Indian Aerospace Technologies and Industries (SIATI) was founded in April 1991 to bring together the various industries,
            R&D and other organizations in the country engaged in the field of aerospace on a common platform to provide interaction
            among themselves as well as with overseas industries/ organizations to enhance growth opportunities for all. SIATI,
            an important ‘Gateway’ to Indian Aerospace business and Global co-operation for tie-up in R&D, Technology, Joint Ventures,
            Collaborations, Co-productions and information-exchange.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default ResponsiveBanner;