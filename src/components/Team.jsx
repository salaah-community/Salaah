import React from "react";
import "../styles/Team.css";
import AVTR1 from "../assets/team/kt.jpg";
import AVTR2 from "../assets/team/vr.jpg";
import AVTR3 from "../assets/team/rs.jpg";
import AVTR4 from "../assets/team/us.jpg";
import AVTR5 from "../assets/team/sv.jpg";
import AVTR6 from "../assets/team/ss.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import quote from "../assets/quoteIcon.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";

const data = [
  {
    avatar: AVTR1,
    name: "Kunal Tyagi",
    comp: "Founder @salaah",
    review:
      '"Idea behind the SALAAH community of mentorship is to form a strong network between seniors and juniors to provide the correct career path under the well-settled alumni."',
  },
  {
    avatar: AVTR2,
    name: "Varun Rana",
    comp: "Founder @salaah",
    review:
      '"We form a community under the association of recent pass out senior who is part of big MNCs  and senior who is being passionate to achieve their goals in life. "',
  },
  {
    avatar: AVTR5,
    name: "Sakshi Verma",
    comp: "Co-Founder, @salaah",
    review:
      '"Conducting various podcasts, events to encourage students explore new field and choose their career wisely is main goal of salaah  "',
  },
  {
    avatar: AVTR4,
    name: "Utkarsh Singh",
    comp: "Co-Founder, @salaah",
    review:
      '"Salaah is the very innovative and almost first ever platform which is helping students of college. We teach students how to pursue their career "',
  },
  {
    avatar: AVTR3,
    name: "Rohit Singhwal",
    comp: "Co-Founder, @salaah",
    review:
      '"This platform was first build to enhance the quality of students in the college, although now it has become a sensation by helping more than 10K students "',
  },
  {
    avatar: AVTR6,
    name: "Shruti Singh",
    comp: "Co-Founder, @salaah",
    review:
      '"Salaah is a platform where students can follow their career path by getting a proper guidance and support from the alumni of the college. "',
  },
];

const Team = () => {
  return (
    <div className="team-container" style={{ marginTop: "20rem" }}>
      <section id="team__parent">
        <div className="team-flex">
          <div>
            <h1 className="Ultrabold icon-quote" style={{ fontSize: "4rem" }}>
              Meet The Team
            </h1>
          </div>

          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            grabCursor={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            {data.map(({ name, comp, review, avatar }, index) => {
              return (
                <SwiperSlide key={index} className="team">
                  <p
                    className="client__review Poppins">
                    <div style={{height: '10rem'}}>{review}</div>
                     <hr className="lin" />
                    <div className="client__container">
                      <div className="client__avatar">
                        <img src={avatar} alt="Img1" />
                      </div>
                      <div style={{display: 'flex', flexDirection: 'column'}}>
                      <div style={{ textAlign: 'left' }}>{name}</div>
                      <div className="Regular" style={{ fontSize: "14px", textAlign: 'left' }}>{comp}</div>
                      </div>
                    </div>
                  </p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Team;
