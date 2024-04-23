import { Box, Typography, IconButton, Button } from "@mui/material";

import pepeCoinLogo from "../assets/images/pepenIcon.png";

import EthereumIcon from "../assets/images/EthereumIcon.png";

import BlastCoinIcon from "../assets/images/blastCoinIcon.png";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";

export const CoinBuy = () => {
  const [connectWalletClicked, setConnectWalletClicked] = useState(false);
  return (
    <Box
      padding={"1rem 0px"}
      border={"1px solid black"}
      display={"flex"}
      justifyContent={"center"}
      sx={{
        maxHeight: {
          xl: "400px",
          lg: "400px",
          md: "400px",
          sm: "450px",
          xs: "530px",
        },
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        justifyContent={"center"}
        maxWidth={"500px"}
        m={"auto"}
        sx={{
          maxWidth: {
            xl: "500px",
            lg: "500px",
            md: "500px",
            sm: "400px",
            xs: "230px",
          },
        }}
      >
        <Box display={"flex"} gap={"5px"} alignItems={"center"}>
          <Typography
            fontFamily={"Perfect_DOSVGA"}
            sx={{
              fontSize: {
                xl: "16px",
                lg: "16px",
                md: "16px",
                sm: "14px",
                xs: "12px",
              },
              fontWeight: {
                xl: 500,
                lg: 400,
                md: 400,
                sm: 400,
                xs: 400,
              },
            }}
          >
            C :
          </Typography>
          <IconButton sx={{ width: "6px", height: "6px" }}>
            <ArrowRightIcon />
          </IconButton>
          <Typography
            fontFamily={"Perfect_DOSVGA"}
            sx={{
              fontSize: {
                xl: "16px",
                lg: "16px",
                md: "16px",
                sm: "14px",
                xs: "12px",
              },
              fontWeight: {
                xl: 500,
                lg: 400,
                md: 400,
                sm: 400,
                xs: 400,
              },
            }}
          >
            Blast.bat
          </Typography>
          <IconButton sx={{ width: "6px", height: "6px" }}>
            <ArrowRightIcon />
          </IconButton>
          <Typography
            fontFamily={"Perfect_DOSVGA"}
            sx={{
              fontSize: {
                xl: "16px",
                lg: "16px",
                md: "16px",
                sm: "14px",
                xs: "12px",
              },
              fontWeight: {
                xl: 500,
                lg: 400,
                md: 400,
                sm: 400,
                xs: 400,
              },
            }}
          >
            pepecoin.buy
          </Typography>
        </Box>
        <Box
          display={"flex"}
          gap={"5px"}
          sx={{
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
          }}
        >
          <Box
            bgcolor={"#EEEEEE"}
            borderRadius={"5px"}
            padding={"5px"}
            border={"1px solid black"}
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
          >
            <Typography
              fontFamily={"Perfect_DOSVGA"}
              sx={{
                fontSize: {
                  xl: "16px",
                  lg: "16px",
                  md: "16px",
                  sm: "14px",
                  xs: "14px",
                },
                fontWeight: {
                  xl: 500,
                  lg: 400,
                  md: 400,
                  sm: 400,
                  xs: 400,
                },
              }}
            >
              switch to pepecoin.day
            </Typography>
            <Box
              width={"16px"}
              height={"16px"}
              component={"img"}
              src={pepeCoinLogo}
            />
          </Box>
          <Box
            borderRadius={"5px"}
            bgcolor={"#EEEEEE"}
            padding={"5px"}
            border={"1px solid black"}
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
          >
            <Typography
              fontFamily={"Perfect_DOSVGA"}
              sx={{
                fontSize: {
                  xl: "16px",
                  lg: "16px",
                  md: "16px",
                  sm: "14px",
                  xs: "14px",
                },
                fontWeight: {
                  xl: 500,
                  lg: 400,
                  md: 400,
                  sm: 400,
                  xs: 400,
                },
              }}
            >
              set max slippage
            </Typography>
          </Box>
        </Box>
        {/* ETM Etheum */}
        <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
          <Box
            padding={"10px"}
            border={"1px solid black"}
            display={"flex"}
            gap={"5px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              fontFamily={"Perfect_DOSVGA"}
              fontSize={"16px"}
              fontWeight={400}
              color={"rgb(75, 75, 75)"}
            >
              0.0
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <Typography
                fontFamily={"Perfect_DOSVGA"}
                fontSize={"16px"}
                fontWeight={500}
              >
                ETH
              </Typography>
              <Box
                width={"16px"}
                height={"16px"}
                component={"img"}
                src={EthereumIcon}
              />
            </Box>
          </Box>
          <Box display={"flex"} gap={"4px"}>
            <Button
              fontSize={"14px"}
              variant="contained"
              bgcolor={"#EEEEEE"}
              disabled
              sx={{ textTransform: "lowercase", width: "53px", height: "32px" }}
            >
              Reset
            </Button>
            <Box
              bgcolor={"#EEEEEE"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"53px"}
              height={"26px"}
              border={"1px solid #00000026"}
              borderRadius={"5px"}
              padding={"2px"}
            >
              <Typography fontSize={"14px"} fontFamily={"Perfect_DOSVGA"}>
                +0.03
              </Typography>
            </Box>
            <Box
              bgcolor={"#EEEEEE"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"53px"}
              height={"26px"}
              border={"1px solid #00000026"}
              borderRadius={"5px"}
              padding={"2px"}
            >
              <Typography fontSize={"14px"} fontFamily={"Perfect_DOSVGA"}>
                +0.1
              </Typography>
            </Box>
            <Box
              bgcolor={"#EEEEEE"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"53px"}
              height={"26px"}
              border={"1px solid #00000026"}
              borderRadius={"5px"}
              padding={"2px"}
            >
              <Typography fontSize={"14px"} fontFamily={"Perfect_DOSVGA"}>
                +0.2
              </Typography>
            </Box>
          </Box>
        </Box>
        {!connectWalletClicked && (
          <Box
            width={"100%"}
            height={"42px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10px"}
            mt={"5px"}
            sx={{
              flexDirection: {
                xl: "row",
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            <Button
              onClick={() => setConnectWalletClicked(true)}
              border={"1px solid black"}
              variant="contained"
              sx={{
                textTransform: "lowercase",
                borderRadius: "10px",
                width: "191px",
                height: "50px",
                bgcolor: "#EEEEEE",
                ":hover": { bgcolor: "#EEEEEE" },
                color: "black",
                display: "flex",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xl: "16px",
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "12px",
                  },
                  fontWeight: {
                    xl: 500,
                    lg: 400,
                    md: 400,
                    sm: 400,
                    xs: 400,
                  },
                  fontFamily: "Perfect_DOSVGA",
                }}
              >
                Connect Wallet
              </Typography>

              <Box
                width={"16px"}
                height={"16px"}
                component={"img"}
                src={BlastCoinIcon}
              />
            </Button>

            <Button
              border={"1px solid black"}
              bgcolor={"#EEEEEE"}
              fontSize={"14px"}
              variant="contained"
              disabled
              sx={{
                fontSize: {
                  xl: "16px",
                  lg: "16px",
                  md: "16px",
                  sm: "14px",
                  xs: "12px",
                },
                fontWeight: {
                  xl: 500,
                  lg: 400,
                  md: 400,
                  sm: 400,
                  xs: 400,
                },
                fontFamily: "Perfect_DOSVGA",
                width: "191px",
                textTransform: "lowercase",
                height: "50px",
                borderRadius: "10px",
              }}
            >
              Place trade
            </Button>
          </Box>
        )}

        {/* <Box
          width={"100%"}
          height={"42px"}
          mb={"15px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        > */}
        {connectWalletClicked && (
          <Button
            sx={{
              border: "1px solid black",
              bgcolor: "#EEEEEE",
              color: "black",
              borderRadius: "12px",
              width: "100%",
              textTransform: "lowercase",
              height: "50px",
              fontFamily: "Perfect_DOSVGA",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            Place trade
          </Button>
        )}
        {/* </Box> */}
      </Box>
    </Box>
  );
};
