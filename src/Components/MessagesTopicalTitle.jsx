/* eslint-disable react/prop-types */
import pepeCoinLogo from "../assets/images/pepenIcon.png";
import pepeCoinIcon from "../assets/images/icon.png";
import pepenAvator from "../assets/images/Avatar.png";
import pepen from "../assets/images/pepen.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import TurnLeftIcon from "@mui/icons-material/TurnLeft";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Typography,
  styled,
} from "@mui/material";

export const MessagesTopicalTitle = (props) => {
  return (
    <Box
      border={"1px solid gray"}
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"5px"}
        padding={"5px 10px"}
      >
        <Typography
          fontSize={"14px"}
          lineHeight={"14px"}
          fontWeight={"400"}
          fontFamily={"Perfect_DOSVGA"}
          color={"gary"}
        >
          topical title / under the topic{" "}
          <span style={{ color: "#333399" }}>/ Title</span>
        </Typography>
        <Box>
          <Button
            variant="contained"
            sx={{
              textTransform: "lowercase",
              backgroundColor: "#EEEEEE",
              ":hover": { backgroundColor: "#EEEEEE" },
              color: "black",
              border: "1px solid black",
              fontSize: "14px",
              lineHeight: "14px",
              fontWeight: "500",
              fontFamily: "Perfect_DOSVGA",
            }}
            onClick={() => {
              props.setRenderFromMessageUnderTopical(null);
            }}
          >
            Back to under the topic
          </Button>
        </Box>
        {/* Title area */}
      </Box>
      <Divider />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"10px"}
        margin={"0 10px 10px 10px"}
      >
        <Box
          display={"flex"}
          gap={"15px"}
          padding={"5px 10px"}
          bgcolor={"#EEEEEE"}
        >
          <Box
            component={"img"}
            src={pepeCoinLogo}
            width={"66px"}
            height={"66px"}
          />
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Typography
              fontSize={"16px"}
              lineHeight={"16px"}
              fontWeight={"400"}
              fontFamily={"Perfect_DOSVGA"}
            >
              Title
            </Typography>
            <Typography
              fontSize={"14px"}
              lineHeight={"14px"}
              fontWeight={"400"}
              fontFamily={"Perfect_DOSVGA"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              eius vitae minima perferendis! Dolorem eos, reiciendis deserunt
              esse vero accusamus.
            </Typography>
            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
              <Typography
                fontSize={"16px"}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
                color={"gray"}
              >
                Thread in section{" "}
                <span style={{ color: "#333399" }}>under the topic</span>{" "}
                created by the user
              </Typography>
              <Box
                component={"img"}
                src={pepeCoinLogo}
                width={"18px"}
                height={"18px"}
              />
              <Typography
                fontSize={"16px"}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
                color={"#333399"}
              >
                0x0000
              </Typography>

              <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>

              <Box>
                <CustonBadge badgeContent={2}>
                  <FavoriteIcon />
                </CustonBadge>
              </Box>
              <Box ml={"8px"}>
                <CustonBadge badgeContent={2}>
                  <ChatBubbleIcon />
                </CustonBadge>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* 2nd */}
        <Box display={"flex"} gap={"15px"} padding={"5px 10px"}>
          <Box
            component={"img"}
            src={pepeCoinIcon}
            width={"66px"}
            height={"66px"}
          />
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                fontSize={"16px"}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
                color={"#333399"}
              >
                0x0000{" "}
                <span
                  style={{
                    textAlign: "center",
                    padding: "2px",
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "14px",
                    lineHeight: "14px",
                  }}
                >
                  Subject Auther
                </span>
              </Typography>
              <Button
                endIcon={<TurnLeftIcon />}
                variant="contained"
                sx={{
                  textTransform: "initial",
                  backgroundColor: "#EEEEEE",
                  ":hover": { backgroundColor: "#EEEEEE" },
                  color: "black",
                  border: "1px solid black",
                  fontSize: "14px",
                  lineHeight: "14px",
                  fontWeight: 400,
                  fontFamily: "Perfect_DOSVGA",
                }}
              >
                reply
              </Button>
            </Box>
            <Typography
              fontSize={"14px"}
              lineHeight={"14px"}
              fontWeight={"400"}
              fontFamily={"Perfect_DOSVGA"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              eius vitae minima perferendis! Dolorem eos, reiciendis deserunt
              esse vero accusamus.
            </Typography>
            <Box
              display={"flex"}
              gap={"10px"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                fontSize={"16px"}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
                color={"gray"}
              >
                Today, at 04:02
              </Typography>

              <CustonBadge badgeContent={2}>
                <FavoriteIcon sx={{ color: "gray" }} />
              </CustonBadge>
            </Box>
          </Box>
        </Box>
        <Divider />
        {/* 3nd */}
        <Box display={"flex"} gap={"15px"} padding={"5px 10px"}>
          <Box
            component={"img"}
            src={pepenAvator}
            width={"66px"}
            height={"66px"}
          />
          <Box display={"flex"} flexDirection={"column"} gap={"15px"}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                fontSize={"16px"}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
                color={"#333399"}
              >
                0x290
              </Typography>
              <Button
                endIcon={<TurnLeftIcon />}
                variant="contained"
                sx={{
                  textTransform: "initial",
                  backgroundColor: "#EEEEEE",
                  ":hover": { backgroundColor: "#EEEEEE" },
                  color: "black",
                  border: "1px solid black",
                  fontSize: "14px",
                  lineHeight: "14px",
                  fontWeight: 400,
                  fontFamily: "Perfect_DOSVGA",
                }}
              >
                reply
              </Button>
            </Box>
            <Box
              component={"img"}
              src={pepen}
              width={"323.38px"}
              height={"140px"}
            />
            <Typography
              fontSize={"14px"}
              lineHeight={"14px"}
              fontWeight={"400"}
              fontFamily={"Perfect_DOSVGA"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              eius vitae minima perferendis! Dolorem eos, reiciendis deserunt
              esse vero accusamus.
            </Typography>
            <Box
              display={"flex"}
              gap={"10px"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                fontSize={"16px"}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
                color={"gray"}
              >
                Today, at 04:02
              </Typography>

              <CustonBadge badgeContent={6}>
                <FavoriteIcon sx={{ color: "#FF0000" }} />
              </CustonBadge>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          mt={"2rem"}
          padding={"5px"}
        >
          <Box
            component={"img"}
            src={pepenAvator}
            width={"42px"}
            height={"42px"}
          />
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              backgroundColor: "#EEEEEE",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Write a message"
              inputProps={{ "aria-label": "search google maps" }}
            />

            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <CollectionsOutlinedIcon />
            </IconButton>
          </Paper>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"45px"}
            height={"43px"}
            bgcolor={"black"}
          >
            <ArrowUpwardIcon sx={{ color: "white" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const CustonBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    top: 10,
    right: 0,
    left: 10,
    padding: "0px",
    width: "8px",
    height: "14px",
  },
}));
