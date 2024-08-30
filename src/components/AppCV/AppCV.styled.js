import styled, { keyframes } from "styled-components";
import Image from "next/image";

const beat = keyframes`
 0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.1);
  }
  10% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`;

const ImgForTeamColor = styled(Image)`
  display: block;
  position: relative;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  height: 250px;
  @media screen and (min-width: 490px) {
    width: 250px;
    height: 310px;
  }
`;
const ItemWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-family: "Inter", sans-serif;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  margin-top: 30px;
`;

const ImgWrap = styled.div`
  display: block;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  width: 200px;
  height: 250px;
  transition: all 0.2s ease-in;
  @media screen and (min-width: 490px) {
    width: 250px;
    height: 357px;
  }
  &:hover ${ImgForTeamColor} {
    -webkit-transform: translateY(-100%);
    transform: translateY(-101.25%);
    opacity: 1;
  }
`;

const ImgForTeam = styled(Image)`
  width: 100%;
  height: 250px;
  @media screen and (min-width: 490px) {
    width: 250px;
    height: 310px;
  }
`;
const TitleItem = styled.h4`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 20px;
  letter-spacing: 4%;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  margin-top: 15px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const JobItem = styled.h5`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 4%;
  font-weight: 500;
  color: grey;
  margin: 10px;
`;
const SocialsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const SocialsListItem = styled.li`
  cursor: pointer;
  padding: 2px;
  list-style: none;
  transition: all 0.2s ease-in;
  & > * {
    fill: white;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
  & > *:hover,
  & > *:focus {
    fill: orangered;
  }

  & > * {
    fill: black;
  }
`;
const SocialsListLink = styled.a`
  cursor: pointer;
  padding: 2px;
  color: black;
  transition: all 0.2s ease-in;

  & > *:hover,
  & > *:focus {
    fill: orangered;
  }

  & svg {
    fill: white;
  }
`;
const ButtonMovie = styled.button`
  cursor: pointer;
  padding: 2px;
  color: gray;
  border-radius: 5px;
  transition: all 0.2s ease-in;
  animation: ${beat} 1.2s infinite;
&:focus,
&:hover {
  transform: scale(1.2);
};

  & > *:hover,
  & > *:focus {
    fill: orangered;
    /* fill: ${(props) => props.theme.accentRed}; */
  }

  & svg {
    fill: gray;
    transition: all 0.2s ease-in;
    animation: ${beat} 1.2s infinite;
  }
`;

export {
  ImgWrap,
  ItemWrap,
  ImgForTeam,
  ImgForTeamColor,
  JobItem,
  TitleItem,
  SocialsListLink,
  SocialsListItem,
  SocialsList,
  ButtonMovie,
};
