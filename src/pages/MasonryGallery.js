import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Masonry from "@mui/lab/Masonry/Masonry";
import "../styles/gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/Footer";
import {motion} from 'framer-motion'
// Import Swiper styles
import "swiper/css";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import random from "../assets/group.jpg";
import one from "../assets/car1.jpg";
import two from "../assets/car2.jpg";
import three from "../assets/car3.jpg";
import four from "../assets/car4.jpg";
// import AnimatedCursor from "react-animated-cursor";

const itemData = [
  {
    id: 1,
    img: "https://drive.google.com/thumbnail?id=15kGz7uMWnDOJWla-dsWNvdFmQKHO1WCr&sz=w600",
    title: "",
    likes: 0,
  },
  {
    id: 2, 
    img: "https://drive.google.com/thumbnail?id=1L7iHhsiXemXW9R0DHgJMUJ1U2nRNavIl&sz=w600",
    title: "",
    likes: 0,
  },
  {
    id: 3,
    img: "https://drive.google.com/thumbnail?id=1F3_RZBhpQnBAqgE9JjSGAS0NUWbldG76&sz=w600",
    title: "",
    likes: 0,
  },
  {
    id: 4,
    img: "https://drive.google.com/thumbnail?id=18WdU8dYIc4MEqIYlEbW7_f6ArqmAYTI9&sz=w600",
    title: "",
    likes: 0,
  },
  {
    id: 5,
    img: "https://drive.google.com/thumbnail?id=1fCpMe8Oy7E-ACZ-50cXsJqBZMqZNsQRw&sz=w600",
    title: "",
    likes: 0,
  },
  {
    id: 51,
    img: "https://drive.google.com/thumbnail?id=1ecFO-W1Oumjv2Gc4Mn_3Ui9jbTkQqn9p&sz=w500",
    title: "",
    likes: 0,
  },
  {
    id: 6,
    img: "https://drive.google.com/thumbnail?id=1yp62e_Hgeefkp8rHowy3EVhy-84gcWkN&sz=w1000",
    title: "",
    likes: 0,    
  },
  
  {
    id: 7,
    img: "https://drive.google.com/thumbnail?id=1ph7d9n7MVUTVRLHNQ4SRiZRiw9ZxklvX&sz=w1000",
    title: "",
    likes: 0,
  },
  {
    id: 8,
    img: "https://drive.google.com/thumbnail?id=19BZpl8Ibvf5S6kOEaKUAaS7E6RUKEBwT&sz=w1000",
    title: "",
    likes: 0,
  },
  
  {
    id: 9,
    img: "https://drive.google.com/thumbnail?id=1sfOiFKzqx_47nUzNVsBuok-xmhlSHMwq&sz=w1000",
    title: "",
    likes: 0,
  },
  {
    id: 10,
    img: "https://drive.google.com/thumbnail?id=1Hh-ISJAu5Nj667OrCzvxS9GMwZMONHjZ&sz=w1000",
    title: "",
    likes: 0,
  },
  {  
    id: 289,
    img: "https://drive.google.com/thumbnail?id=1lEkYrCZq6EPlddLlvavg5LEJaDr37uBt&sz=w1000",
    title: "",
    likes: 0,
  },
  {
    id: 18,
    img: "https://drive.google.com/thumbnail?id=1qli2Q6Fn7YuvYzFdGklFGIFy0cSkK_tO&sz=w1000",
    title: "",
    likes: 0,
  },
  {
    id: 11,
    img: "https://drive.google.com/thumbnail?id=1rC-gq_mwtapMZxO9GcGGq68y_AmqjSKb&sz=w1000",
    title: "",
    likes: 0,
  },

  {
    id: 12,
    img: "https://drive.google.com/thumbnail?id=1IZB4HezChXBXcQQ28yBK-fY1ZLmC1D4h&sz=w1000",
    title: "",
    likes: 0,
  },
  {
    id: 13,
    img: "https://drive.google.com/thumbnail?id=11I29zrRgg49uaYfU0TMibyLK6X2dTYnR&sz=w1000",
    title: "",
    likes: 0,
  },
  
  {
    id: 14,
    img: "https://drive.google.com/thumbnail?id=1GvknWy86mPNQAoqblkgwb-7zmZ9Me8gQ&sz=w1000",
    title: "",
    likes: 0,
  },        
  {
    id: 15,
    img: "https://drive.google.com/thumbnail?id=12SIvfSTBGnJdmp1lOFzvGdc5jVxF9lWl&sz=w1000",
    title: "",
    likes: 0,
  },
  {
    id: 16,
    img: "https://drive.google.com/thumbnail?id=1fVZyjxZRroaUF7L_xHgFBWMztgIzKlls&sz=w1000",
    title: "",
    likes: 0,
  },
  
  {
    id: 17,
    img: "https://drive.google.com/thumbnail?id=19Nog8ZVk587VcFgqKS-qI_Z_5CF_CIE6&sz=w1000",
    title: "",
    likes: 0,
  },
  

  
  {
    id: 19,
    img: "https://drive.google.com/thumbnail?id=1acPwBafK2vsXeSDrcKe3blGFPOTz01tx&sz=w1000",
    title: "",
    likes: 0,
  },
  {
    id: 20,
    img: "https://drive.google.com/thumbnail?id=1l5H4ShGuaUCl-RqGY4u9fNyhEFix4flP&sz=w1000",
    title: "",
    likes: 0,
  },
  {
    id: 21,
    img: "https://drive.google.com/thumbnail?id=1botMu3zu9Sb6xanABbPIurLU3VhbWkEv&sz=w1000",
    title: "",
    likes: 0,
  },
  
  
  {
    id: 22,
    img: "https://drive.google.com/thumbnail?id=15GfZfW-rM49juaeDbrESBk8uFDBN9j_z&sz=w1000",
    title: "",
    likes: 0,
  },
  {
    id: 23,
    img: "https://drive.google.com/thumbnail?id=1UJJbrPXbBgeG6XTNCZZBJwZmQQ1NpCCc&sz=w1000",
    title: "",
    likes: 0,
  },
  {
    id: 25,
    img: "https://drive.google.com/thumbnail?id=1VSOzP9GgsiFbezpL1cLligfiQ7vFbqnW&sz=w1000",
    title: "",
    likes: 0,
  },
  {
    id: 26,
    img: "https://drive.google.com/thumbnail?id=1pVoDSUtJ_psPd3y91QAvP1PNo25qMIJQ&sz=w1000",
    title: "",
    likes: 0,
  },
  {
    id: 27,
    img: "https://drive.google.com/thumbnail?id=1ES7UZzNMmoZ86nkfoYCBgWEEGdxcA9jo&sz=w1000",
    title: "",
    likes: 0,
  },  
  // {
  //   id: 28,
  //   img: "https://drive.google.com/uc?export=view&id=1g1fYjJw_U13jyglVhP-cCxYSVqJLd_xH",
  //   title: "",
  //   likes: 0,
  // },
  // {
  //   id: 29,
  //   img: "https://drive.google.com/uc?export=view&id=1nVOAzgrnJYOFG4XaWyr_uBoAguDvP1iw",
  //   title: "",
  //   likes: 0,
  // },
  // {
  //   id: 30,
  //   img: "https://drive.google.com/uc?export=view&id=1lJwgI_g5tdTfChPCnTU9hW7s7kcwgzMQ",
  //   title: "",
  //   likes: 0,
  // },
  // {
  //   id: 31,
  //   img: "https://drive.google.com/uc?export=view&id=1n-TmxSN7GKtZ4fw0YNfZ6mc2VZeDRn3g",
  //   title: "",
  //   likes: 0,
  // },
  // {
  //   id: 32,
  //   img: "https://drive.google.com/uc?export=view&id=1vvk4ZmPnVlyjjak2ZpkiTvMxJ7Sfwiis",
  //   title: "",
  //   likes: 0,
  // },
];

const MasonryGallery = () => {

  const [count, setCount] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
    
    <div>
    {/* <AnimatedCursor
        color="255,255,255"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '3px solid #fff',
        }}
        /> */}
      <Navbar />
      <motion.div className="gallery-page" initial={{ y: 310 }}
    animate={{ y: 0 }}
    transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper car__head"
        >
          <SwiperSlide>
            <img className="swiper-images" src={random} alt="" loading="lazy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-images" src={three} alt="" loading="lazy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-images" src={four} alt="" loading="lazy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-images" src={one} alt="" loading="lazy"/>
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-images" src={two} alt="" loading="lazy"/>
          </SwiperSlide>
        </Swiper>
      </motion.div>
      <h1
        className="Ultrabold gallery"
        style={{ marginTop: "6rem", marginBottom: "4rem" }}
      >
        Events at Salaah!
      </h1>
      <div style={{ margin: "auto" }}>
        <Masonry
          columns={{ xs: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
          spacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {itemData.map((item, index) => (
            <div key={index}>
              <div className="cards-gallery" >
                <img               
                  src={item.img}
                  srcSet={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="all__img cards-gallery-img"
                  onClick={handleOpen}
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                    width: "100%",
                    margin: "inherit",
                  }}
                />
              </div>
            </div>
          ))}
        </Masonry>
      </div>
      <Footer />
    </div>
    
    </>
  );
};

export default MasonryGallery;
