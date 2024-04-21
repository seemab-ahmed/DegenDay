/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import pepenLogin from "../assets/images/icon.png";
import { ArrowRight } from "@mui/icons-material";
import { CoinDetail_Header } from "./CoinDetail_Header";
function PepeCoin_Day(props) {
  const style = {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "#FFFFFF",
    border: "none",
    //       overflowX:'hidden',
    //       overflowY:'auto',
  };
  return (
    <Box sx={style}>
      {/* CoinsHeader is here */}
      <Box
        margin={"auto"}
        width={"100%"}
        height={"28px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        //   gap={1}
        bgcolor={"#CCCCCC"}
        border={"1px solid black"}
      >
        <Box width={"2%"}>
          <Box
            onClick={() => {
              props.closeFromChild(false);
            }}
            sx={{
              border: "1px outset #808080",
              width: "13px",
              height: "13px",
              cursor: "pointer",
            }}
          >
            <Box
              height={"12px"}
              width={"12px"}
              border={"1px solid black "}
              sx={{
                background: "linear-gradient(135deg, #9A9A9A 0%, #F1F1F1 100%)",
              }}
            ></Box>
          </Box>
        </Box>

        <Box
          width={"36%"}
          height={"13px"}
          bgcolor={"#CCCCCC"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
          <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
          <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
          <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
          <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
          <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
        </Box>
        <Box width={"20%"}>
          <Box
            display={"flex"}
            gap={"5px"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            <Box
              component={"img"}
              src={pepenLogin}
              width={"16px"}
              height={"16px"}
            />
            <Typography
              sx={{ fontFamily: "Perfect_DOSVGA" }}
              fontSize={"16px"}
              fontWeight={400}
              lineHeight={"16px"}
              align="center"
            >
              {"pepecoin.day"}
            </Typography>
          </Box>
        </Box>

        <Box
          width={"36%"}
          height={"13px"}
          bgcolor={"#CCCCCC"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
          <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
          <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
          <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
          <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
          <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
        </Box>
      </Box>
      <Box
        width={"100%"}
        height={"75vh"}
        sx={{
          overflow: "auto",
          //                      //       // for scrollbar styling
          "&::-webkit-scrollbar": {
            width: "15px" /* Width of the scrollbar */,
          },
          "&::-webkit-scrollbar-track": {
            background: "#AAAAAA" /* Color of the scrollbar track */,
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#9999FF" /* Color of the scrollbar thumb */,
            borderRadius: "5px" /* Rounded corners for the thumb */,
            boxShadow: "-2px -1px 1px 0px #4C4C99 inset;",
          },
          //     '&::-webkit-scrollbar-thumb:hover': {
          //       background: '#555', /* Color of the thumb on hover */
          //     },
        }}
      >
        <Box
          mt={1}
          ml={1}
          fontSize={"14px"}
          width={"112.6px"}
          height={"16px"}
          display={"flex"}
          alignItems={"center"}
          fontWeight={400}
        >
          C:
          <ArrowRight /> Blast.bat <ArrowRight /> pepecoin.day
        </Box>
        <Box width={"100%"}>
          <CoinDetail_Header />
        </Box>
      </Box>
    </Box>
  );
}

export default PepeCoin_Day;
