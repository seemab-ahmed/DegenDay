import { Box, Typography, Grid } from "@mui/material";

import pepeCoinLogo from "../assets/images/pepenIcon.png";

export const CoinTxs = () => {
  return (
    <Box>
      <Box
        // border={"1px solid black"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid container sx={{ overflow: "auto" }}>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box border={"1px solid #00000026"}>
              <Box
                padding={"5px"}
                bgcolor={"#C0C0C0"}
                boxShadow={"1px 1px 1px white inset"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight={"16px"}
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                padding={"5px"}
                bgcolor={"#C0C0C0"}
                boxShadow={"1px 1px 1px white inset"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight={"16px"}
                  sx={{
                    fontSize: {
                      xs: "11px",
                      sm: "11px",
                      md: "14px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                padding={"5px"}
                bgcolor={"#C0C0C0"}
                boxShadow={"1px 1px 1px white inset"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight={"16px"}
                  sx={{
                    fontSize: {
                      xs: "11px",
                      sm: "11px",
                      md: "14px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                padding={"5px"}
                bgcolor={"#C0C0C0"}
                boxShadow={"1px 1px 1px white inset"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight={"16px"}
                  sx={{
                    fontSize: {
                      xs: "11px",
                      sm: "11px",
                      md: "14px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                padding={"5px"}
                bgcolor={"#C0C0C0"}
                boxShadow={"1px 1px 1px white inset"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight={"16px"}
                  sx={{
                    fontSize: {
                      xs: "11px",
                      sm: "11px",
                      md: "14px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                padding={"5px"}
                bgcolor={"#C0C0C0"}
                boxShadow={"1px 1px 1px white inset"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight={"16px"}
                  sx={{
                    fontSize: {
                      xs: "11px",
                      sm: "11px",
                      md: "14px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
        <Grid container overflow={"auto"}>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Box
                display={"flex"}
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                  padding: {
                    xs: "0px 1rem",
                    sm: "0px 1rem",
                    md: "14px 1rem",
                    lg: "14px 1rem",
                    xl: "14px 1rem",
                  },
                }}
                alignItems={"center"}
                gap={"10px"}
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
                  sx={{
                    fontSize: {
                      xs: "9px",
                      sm: "11px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0x2Ec1
                </Typography>
              </Box>
              <Box
                display={"flex"}
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                  padding: {
                    xs: "0px 1rem",
                    sm: "0px 1rem",
                    md: "14px 1rem",
                    lg: "14px 1rem",
                    xl: "14px 1rem",
                  },
                }}
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
                  sx={{
                    fontSize: {
                      xs: "9px",
                      sm: "11px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0x2Ec1
                </Typography>
              </Box>
              <Box
                display={"flex"}
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                  padding: {
                    xs: "0px 1rem",
                    sm: "0px 1rem",
                    md: "14px 1rem",
                    lg: "14px 1rem",
                    xl: "14px 1rem",
                  },
                }}
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
                  sx={{
                    fontSize: {
                      xs: "9px",
                      sm: "11px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0x2Ec1
                </Typography>
              </Box>
              <Box
                display={"flex"}
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                  padding: {
                    xs: "0px 1rem",
                    sm: "0px 1rem",
                    md: "14px 1rem",
                    lg: "14px 1rem",
                    xl: "14px 1rem",
                  },
                }}
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
                  sx={{
                    fontSize: {
                      xs: "9px",
                      sm: "11px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0x2Ec1
                </Typography>
              </Box>
              <Box
                display={"flex"}
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                  padding: {
                    xs: "0px 1rem",
                    sm: "0px 1rem",
                    md: "14px 1rem",
                    lg: "14px 1rem",
                    xl: "14px 1rem",
                  },
                }}
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
                  sx={{
                    fontSize: {
                      xs: "9px",
                      sm: "11px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                // gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"#03A100"}
                >
                  buy
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Box
                display={"flex"}
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                alignItems={"center"}
                // gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "10px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0.01
                </Typography>
              </Box>
              <Box
                display={"flex"}
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                alignItems={"center"}
                // gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "10px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0.01
                </Typography>
              </Box>
              <Box
                display={"flex"}
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                alignItems={"center"}
                // gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "10px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0.01
                </Typography>
              </Box>
              <Box
                display={"flex"}
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                alignItems={"center"}
                // gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "10px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  0.01
                </Typography>
              </Box>

              <Box
                display={"flex"}
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                alignItems={"center"}
                // gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "10px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                justifyContent={"center"}
                alignItems={"center"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  252.00k
                </Typography>
              </Box>
              <Box
                display={"flex"}
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                alignItems={"center"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  252.00k
                </Typography>
              </Box>
              <Box
                display={"flex"}
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                alignItems={"center"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  252.00k
                </Typography>
              </Box>
              <Box
                display={"flex"}
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                alignItems={"center"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={400}
                  color={"gray"}
                >
                  252.00k
                </Typography>
              </Box>
              <Box
                display={"flex"}
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                alignItems={"center"}
                gap={"10px"}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                  padding: {
                    xs: "6px 1rem",
                    sm: "6px 1rem",
                    md: "14px 1rem",
                    lg: "14px 1rem",
                    xl: "14px 1rem",
                  },
                }}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                  padding: {
                    xs: "6px 1rem",
                    sm: "6px 1rem",
                    md: "14px 1rem",
                    lg: "14px 1rem",
                    xl: "14px 1rem",
                  },
                }}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                  padding: {
                    xs: "6px 1rem",
                    sm: "6px 1rem",
                    md: "14px 1rem",
                    lg: "14px 1rem",
                    xl: "14px 1rem",
                  },
                }}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                  padding: {
                    xs: "6px 1rem",
                    sm: "6px 1rem",
                    md: "14px 1rem",
                    lg: "14px 1rem",
                    xl: "14px 1rem",
                  },
                }}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                  padding: {
                    xs: "6px 1rem",
                    sm: "6px 1rem",
                    md: "14px 1rem",
                    lg: "14px 1rem",
                    xl: "14px 1rem",
                  },
                }}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    xl: "flex-start",
                  },
                }}
                padding={"14px 1rem"}
                bgcolor={"#EEEEEE"}
                borderRight={"1px solid #00000026"}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
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
