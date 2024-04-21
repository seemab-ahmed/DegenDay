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
      minHeight={"400px"}
      border={"1px solid black"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        justifyContent={"center"}
        maxWidth={"500px"}
        m={"auto"}
      >
        <Box display={"flex"} gap={"5px"} alignItems={"center"}>
          <Typography
            fontFamily={"Perfect_DOSVGA"}
            fontSize={"16px"}
            fontWeight={500}
          >
            C :
          </Typography>
          <IconButton sx={{ width: "6px", height: "6px" }}>
            <ArrowRightIcon />
          </IconButton>
          <Typography
            fontFamily={"Perfect_DOSVGA"}
            fontSize={"16px"}
            fontWeight={500}
          >
            Blast.bat
          </Typography>
          <IconButton sx={{ width: "6px", height: "6px" }}>
            <ArrowRightIcon />
          </IconButton>
          <Typography
            fontFamily={"Perfect_DOSVGA"}
            fontSize={"16px"}
            fontWeight={500}
          >
            pepecoin.buy
          </Typography>
        </Box>
        <Box display={"flex"} gap={"5px"}>
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
              fontSize={"16px"}
              fontWeight={400}
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
              fontSize={"16px"}
              fontWeight={400}
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
          >
            <Button
              onClick={() => setConnectWalletClicked(true)}
              border={"1px solid black"}
              fontSize={"14px"}
              variant="contained"
              sx={{
                textTransform: "lowercase",
                borderRadius: "12px",
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
                  fontFamily: "Perfect_DOSVGA",
                  fontSize: "16px",
                  fontWeight: 400,
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
                borderRadius: "12px",
                width: "191px",
                textTransform: "lowercase",
                height: "50px",
                fontFamily: "Perfect_DOSVGA",
                fontSize: "16px",
                fontWeight: 400,
              }}
            >
              Place trade
            </Button>
          </Box>
        )}

        <Box
          width={"100%"}
          height={"42px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
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
        </Box>
      </Box>
    </Box>
  );
};
