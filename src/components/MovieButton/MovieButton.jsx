"use client";
import { BiCameraMovie } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function MovieButton() {
  const router = useRouter();
  return (
    <>
      <button
        className="buttonMovie"
        type="button"
        onClick={() => router.push("/movie")}
      >
        <BiCameraMovie />
      </button>
    </>
  );
}
