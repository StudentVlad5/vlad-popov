"use client";
// import dynamic from "next/dynamic";
import { AiFillCloseCircle } from "react-icons/ai";
import ReactPlayer from "react-player";
import { BackDrop, ItemContainer } from "./ModalWindow.styled";
import { useRouter } from "next/navigation";

// const ReactPlayer = dynamic(() => import("react-player"), {
//   ssr: false,
// });
export const ModalWindow = () => {
  const router = useRouter();
  return (
    <BackDrop onClick={() => router.push("./")}>
      <ItemContainer onClick={(e) => e.stopPropagation()}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            margin: "20px 0",
          }}
        >
          <div className="player-wrapper">
            <ReactPlayer
              url="/Comp 2.mp4"
              playing={true}
              controls
              playsinline
              width="100%"
              height="100%"
              className="react-player"
            />
          </div>
          <AiFillCloseCircle
            style={{ width: "45px" }}
            type="button"
            onClick={() => router.push("./")}
            aria-label="Close modal"
          ></AiFillCloseCircle>
        </div>
      </ItemContainer>
    </BackDrop>
  );
};
