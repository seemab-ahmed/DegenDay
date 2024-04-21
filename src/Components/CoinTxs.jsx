import { Box, Typography, Grid } from "@mui/material";

import pepeCoinLogo from "../assets/images/pepenIcon.png";

export const CoinTxs = () => {
  return (
    <Box>
      <Box
        border={"1px solid black"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid container>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box border={"1px solid #00000026"}>
              <Box
                padding={"5px 1rem"}
                bgcolor={"#C0C0C0"}
                boxShadow={"1px 1px 1px white inset"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight={"16px"}
                  fontSize={"16px"}
                  fontWeight={500}
                >
                  account
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box border={"1px solid #00000026"}>
              <Box
                padding={"5px 1rem"}
                bgcolor={"#C0C0C0"}
                boxShadow={"1px 1px 1px white inset"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight={"16px"}
                  fontSize={"16px"}
                  fontWeight={500}
                >
                  type
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box border={"1px solid #00000026"}>
              <Box
                padding={"5px 1rem"}
                bgcolor={"#C0C0C0"}
                boxShadow={"1px 1px 1px white inset"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight={"16px"}
                  fontSize={"16px"}
                  fontWeight={500}
                >
                  ETH
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box border={"1px solid #00000026"}>
              <Box
                padding={"5px 1rem"}
                bgcolor={"#C0C0C0"}
                boxShadow={"1px 1px 1px white inset"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight={"16px"}
                  fontSize={"16px"}
                  fontWeight={500}
                >
                  pepecoin.day
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box border={"1px solid #00000026"}>
              <Box
                padding={"5px 1rem"}
                bgcolor={"#C0C0C0"}
                boxShadow={"1px 1px 1px white inset"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight={"16px"}
                  fontSize={"16px"}
                  fontWeight={500}
                >
                  date
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box border={"1px solid #00000026"}>
              <Box
                padding={"5px 1rem"}
                bgcolor={"#C0C0C0"}
                boxShadow={"1px 1px 1px white inset"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight={"16px"}
                  fontSize={"16px"}
                  fontWeight={500}
                >
                  transaction
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        m={"5px 0"}
        height={"400px"}
        width={"100%"}
        sx={{
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "3.5px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#EEEEEE",
            borderRadius: "5px",
          },
        }}
      >
        <Grid container>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#DDDDDD"}
                borderRight={"1px solid #00000026"}
              >
                <Box
                  width={"16px"}
                  height={"16px"}
                  component={"img"}
                  src={pepeCoinLogo}
                />
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0x2Ec1
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#DDDDDD"}
                borderRight={"1px solid #00000026"}
              >
                <Box
                  width={"16px"}
                  height={"16px"}
                  component={"img"}
                  src={pepeCoinLogo}
                />

                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0x2Ec1
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#DDDDDD"}
                borderRight={"1px solid #00000026"}
              >
                <Box
                  width={"16px"}
                  height={"16px"}
                  component={"img"}
                  src={pepeCoinLogo}
                />
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0x2Ec1
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#DDDDDD"}
                borderRight={"1px solid #00000026"}
              >
                <Box
                  width={"16px"}
                  height={"16px"}
                  component={"img"}
                  src={pepeCoinLogo}
                />
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0x2Ec1
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#DDDDDD"}
                borderRight={"1px solid #00000026"}
              >
                <Box
                  width={"16px"}
                  height={"16px"}
                  component={"img"}
                  src={pepeCoinLogo}
                />
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0x2Ec1
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#DDDDDD"}
                borderRight={"1px solid #00000026"}
              >
                <Box
                  width={"16px"}
                  height={"16px"}
                  component={"img"}
                  src={pepeCoinLogo}
                />
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0x2Ec1
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#DDDDDD"}
                borderRight={"1px solid #00000026"}
              >
                <Box
                  width={"16px"}
                  height={"16px"}
                  component={"img"}
                  src={pepeCoinLogo}
                />
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0x2Ec1
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#DDDDDD"}
                borderRight={"1px solid #00000026"}
              >
                <Box
                  width={"16px"}
                  height={"16px"}
                  component={"img"}
                  src={pepeCoinLogo}
                />
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0x2Ec1
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#03A100"}
                >
                  buy
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#FF0000"}
                >
                  sale
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#03A100"}
                >
                  buy
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#FF0000"}
                >
                  sale
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#03A100"}
                >
                  buy
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#FF0000"}
                >
                  sale
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#03A100"}
                >
                  buy
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#FF0000"}
                >
                  sale
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0.01
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0.01
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0.01
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0.01
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0.01
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0.01
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0.01
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0.01
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  252.00k
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  252.00k
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  252.00k
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  252.00k
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  252.00k
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  252.00k
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  252.00k
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  252.00k
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  13h ago
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  13h ago
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  13h ago
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  13h ago
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  13h ago
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  13h ago
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  13h ago
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  13h ago
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#4747FA"}
                >
                  0x4645
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#4747FA"}
                >
                  0x4645
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#4747FA"}
                >
                  0x4645
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#4747FA"}
                >
                  0x4645
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#4747FA"}
                >
                  0x4645
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#4747FA"}
                >
                  0x4645
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#4747FA"}
                >
                  0x4645
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#4747FA"}
                >
                  0x4645
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
