"use client";
import { openModalWindow } from "@/hooks/ModalWindow";
import { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
// import { ModalWindow } from "../ModalWindow/ModalWindow";

export default function MovieButton() {
  const [isPlaying, setIsPlaying] = useState(null);
  const hendleOpenModalWindow = () => {
    setIsPlaying(true);
    openModalWindow(e);
  };
  return (
    <>
      <button
        className="buttonMovie"
        type="button"
        onClick={(e) => hendleOpenModalWindow(e)}
      >
        <BiCameraMovie />
      </button>
      {/* {isPlaying && <ModalWindow isPlaying setIsPlaying />} */}
    </>
  );
}
