/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import pepeCoinIcon from "../assets/images/icon.png";
import fireIcon from "../assets/images/FireSimple.png";
import greenArrowFatUp from "../assets/images/ArrowFatUp.png";

export default function PepCoin_Screen_Icon(props) {
  return (
    <>
      <Box
        width={"100px"}
        height={"70px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        sx={{ cursor: "pointer" }}
        onClick={() => {
          props.setRenderFromPepCoin_Screen_Icon("pepeCoin_Day_Open");
          props.setModalOpenFromPepCoin_Screen_Icon(true);
        }}
      >
        <Box
          position={"relative"}
          width={"40px"}
          height={"40px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          border={"3px solid #03A100"}
          borderRadius={"50%"}
        >
          <img
            src={pepeCoinIcon}
            width={"40px"}
            height={"40px"}
            alt="pepecoin icon picture"
          />

          {props.iconType !== undefined && (
            <img
              style={{ position: "absolute", top: 0, right: -35 }}
              src={
                props.iconType === "fire"
                  ? fireIcon
                  : props.iconType === "greenArrow"
                  ? greenArrowFatUp
                  : ""
              }
              alt="Fire Icon"
              height={"24px"}
              width={"24px"}
            />
          )}
        </Box>
        <Box
          width={"100%"}
          height={"18px"}
          bgcolor={"#7373A6"}
          color={"#FFFFFF"}
          fontSize={"14px"}
          textAlign={"center"}
        >
          pepecoin.day
        </Box>
      </Box>
    </>
  );
}
