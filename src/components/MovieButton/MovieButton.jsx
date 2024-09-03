"use client";
import { BiCameraMovie } from "react-icons/bi";

export default function MovieButton() {
  const hendleOpenModalWindow = () => {
    // setPlaying(true);
    // openModalWindow(e);
  };
  return (
    <button
      className="buttonMovie"
      type="button"
      onClick={hendleOpenModalWindow}
    >
      <BiCameraMovie />
    </button>
  );
}
