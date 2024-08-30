import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import sertificate_1 from "@/images/sertificates/20286_Introduction_to_programming.webp";
console.log("sertificate_1", sertificate_1);
import sertificate_2 from "@/images/sertificates/GoIt_English_Sertificate.webp";
import sertificate_3 from "@/images/sertificates/GoIt_Sertificate.webp";
import sertificate_4 from "@/images/sertificates/FullStack_addition.webp";
import sertificate_5 from "@/images/sertificates/Certificate_supplement_FullStack_developer_1.webp";
import sertificate_6 from "@/images/sertificates/Certificate_supplement_FullStack_developer_2.webp";
import sertificate_7 from "@/images/sertificates/Certificate_supplement_FullStack_developer_3.webp";
import sertificate_8 from "@/images/sertificates/kurs_ JavaScript ES6_without sertificate.webp";
import sertificate_9 from "@/images/sertificates/Science_of_ everyday_thinking.webp";
import sertificate_10 from "@/images/sertificates/rozetka_mba.webp";
import sertificate_11 from "@/images/sertificates/stepik-certificate-3432-aa7cac9.webp";
import sertificate_12 from "@/images/sertificates/stepik-certificate-38218-4294eb1.webp";
import sertificate_13 from "@/images/sertificates/stepik-certificate-4350-a9dce0a.webp";
import sertificate_14 from "@/images/sertificates/stepik-certificate-4350-a9dce0a.webp";

export const SliderOfSertificate = () => {
  const images = [
    {
      original: sertificate_1.src,
      thumbnail: sertificate_1.src,
      originalAlt: "Introduction to programming",
    },
    {
      original: sertificate_2.src,
      thumbnail: sertificate_2.src,
      originalAlt: "GoIt English Sertificate",
    },
    {
      original: sertificate_3.src,
      thumbnail: sertificate_3.src,
      originalAlt: "GoIt Full Stack Sertificate",
    },
    {
      original: sertificate_4.src,
      thumbnail: sertificate_4.src,
      originalAlt: "FullStack addition Sertificate",
    },
    {
      original: sertificate_5.src,
      thumbnail: sertificate_5.src,
      originalAlt: "Sertificate supplement FullStack developer 1",
    },
    {
      original: sertificate_6.src,
      thumbnail: sertificate_6.src,
      originalAlt: "Sertificate supplement FullStack developer 2",
    },
    {
      original: sertificate_7.src,
      thumbnail: sertificate_7.src,
      originalAlt: "Sertificate supplement FullStack developer 3",
    },
    {
      original: sertificate_8.src,
      thumbnail: sertificate_8.src,
      originalAlt: "Course of JavaScript ES6",
    },
    {
      original: sertificate_9.src,
      thumbnail: sertificate_9.src,
      originalAlt: "Science of  everyday thinking",
    },
    {
      original: sertificate_10.src,
      thumbnail: sertificate_10.src,
      originalAlt: "Rozetka MBA",
    },
    {
      original: sertificate_11.src,
      thumbnail: sertificate_11.src,
      originalAlt: "stepik certificate 38218 4294eb1",
    },
    {
      original: sertificate_12.src,
      thumbnail: sertificate_12.src,
      originalAlt: "stepik certificate 38218 4294eb1",
    },
    {
      original: sertificate_13.src,
      thumbnail: sertificate_13.src,
      originalAlt: "stepik certificate 4350 a9dce0a",
    },
    {
      original: sertificate_14.src,
      thumbnail: sertificate_14.src,
      originalAlt: "stepik certificate 4350 a9dce0a",
    },
  ];
  return (
    <div className="slideContainer">
      <ImageGallery
        autoPlay={true}
        items={images}
        lazyLoad={true}
        slideDuration={600}
        originalAlt={images}
        showThumbnails={false}
      />
    </div>
  );
};
