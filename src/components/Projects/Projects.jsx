"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import { SlideContainer } from "./Projects.styled";
import Barber_img from "@/images/projects/barber_project.webp";
import Animal_welfare_img from "@/images/projects/animal_welfare_project.webp";
import Filmoteka_img from "@/images/projects/filmoteka_project.webp";
import Ice_cream_img from "@/images/projects/ice_cream_project.webp";
import Anastasia_img from "@/images/projects/anastasya-studio.webp";
import Salamandra_img from "@/images/projects/salamandra.webp";
import Animation_img from "@/images/projects/animation.webp";
import Brandmaze_img from "@/images/projects/brand-maze.webp";
import Finance_club_img from "@/images/projects/finance_club.webp";
import Homeforest_img from "@/images/projects/homeforest.webp";
import Quillis_img from "@/images/projects/quillis.webp";
import AddaxCrm_img from "@/images/projects/addax-crm.webp";
import EnglishExcellence_img from "@/images/projects/english-excellence.webp";
import GuideManGlobal_img from "@/images/projects/guide-man-global.webp";
import LootNinjaTest_img from "@/images/projects/loot-ninja-test.webp";
import OTHON_img from "@/images/projects/OTHON.webp";
import Picsio_img from "@/images/projects/picsio.webp";
import Reenbit_img from "@/images/projects/reenbit-trainee-camp.webp";
import Remwaste_img from "@/images/projects/remwaste-full-stack-developer.webp";
import UIchalleng_img from "@/images/projects/ui-ux-challeng.webp";
import Image from "next/image";

export const Project = () => {
  const hendleClickProject = (e) => {
    e.preventDefault();
    switch (e.target.alt) {
      case "barbershop project":
        window.open("https://barbershop-kyiv.vercel.app/", "_blank").focus();
        break;
      case "animal welfare project":
        window
          .open(
            "https://studentvlad5.github.io/animal-welfare-network/",
            "_blank"
          )
          .focus();
        break;
      case "ice cream project":
        window
          .open("https://studentvlad5.github.io/project_ice-cream/", "_blank")
          .focus();
        break;
      case "filmoteka project":
        window.open("https://filmoteka-home.netlify.app/", "_blank").focus();
        break;
      case "Anastasia project":
        window.open("https://web-studio-yvh6.onrender.com/", "_blank").focus();
        break;
      case "salamandra project":
        window.open("https://salamandra-cafe.vercel.app/", "_blank").focus();
        break;
      case "animation project":
        window.open("https://logistic-office.vercel.app/", "_blank").focus();
        break;
      case "brandmaze project":
        window.open("https://brand-maze.vercel.app/", "_blank").focus();
        break;
      case "finance_club project":
        window.open("https://finance-club-amber.vercel.app/", "_blank").focus();
        break;
      case "homeforest project":
        window
          .open("https://indoor-plants-alpha.vercel.app/", "_blank")
          .focus();
        break;
      case "quillis project":
        window
          .open(
            "https://store-of-stylish-clothes-git-main-studentvlad5s-projects.vercel.app/",
            "_blank"
          )
          .focus();
        break;
      case "addaxCrm project":
        window.open("https://addax-crm.vercel.app/", "_blank").focus();
        break;
      case "englishExcellence project":
        window
          .open("https://studentvlad5.github.io/english-excellence/", "_blank")
          .focus();
        break;
      case "guideManGlobal project":
        window.open("https://ggs.com.ua/en", "_blank").focus();
        break;
      case "lootNinjaTest project":
        window
          .open("https://loot-ninja-test.vercel.app/orders", "_blank")
          .focus();
        break;
      case "OTHON project":
        window.open("https://othon-self.vercel.app/", "_blank").focus();
        break;
      case "picsio project":
        window.open("https://pics-io.vercel.app/", "_blank").focus();
        break;
      case "reenbit project":
        window
          .open("https://reenbit-trainee-camp.vercel.app/", "_blank")
          .focus();
        break;
      case "remwaste project":
        window
          .open(
            "https://remwaste-full-stack-developer.vercel.app/select_skip",
            "_blank"
          )
          .focus();
        break;
      case "uIchalleng project":
        window
          .open("https://ui-ux-challenge.vercel.app/widgets", "_blank")
          .focus();
        break;
      default:
        break;
    }
  };

  return (
    <SlideContainer>
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        loopPreventsSliding={true}
        loopedslides={1}
      >
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Barber_img}
            alt="barbershop project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Animal_welfare_img}
            alt="animal welfare project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Filmoteka_img}
            alt="filmoteka project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Ice_cream_img}
            alt="ice cream project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Anastasia_img}
            alt="Anastasia project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Salamandra_img}
            alt="salamandra project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Animation_img}
            alt="animation project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Brandmaze_img}
            alt="brandmaze project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Finance_club_img}
            alt="finance_club project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Homeforest_img}
            alt="homeforest project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Quillis_img}
            alt="quillis project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={AddaxCrm_img}
            alt="addaxCrm project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={EnglishExcellence_img}
            alt="englishExcellence project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={GuideManGlobal_img}
            alt="guideManGlobal project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={LootNinjaTest_img}
            alt="lootNinjaTest project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={OTHON_img}
            alt="OTHON project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Picsio_img}
            alt="picsio project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Reenbit_img}
            alt="reenbit project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={Remwaste_img}
            alt="remwaste project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="projectPics"
            src={UIchalleng_img}
            alt="uIchalleng project"
            onClick={hendleClickProject}
          />
        </SwiperSlide>
      </Swiper>
    </SlideContainer>
  );
};
