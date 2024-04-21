/* eslint-disable react/prop-types */
import { Box, Grid, Switch, Typography } from "@mui/material";
import pepeCoinLogo from "../assets/images/pepenIcon.png";
import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
import keyWithPages from "../assets/images/AppleFilesecurity.png";
import { useState } from "react";
import EthereumIcon from "../assets/images/EthereumIcon.png";

export default function Wallet(props) {
  const [showHidden, setShowHidden] = useState(false);
  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "63%",
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
          width={"33%"}
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
        <Box width={"25%"}>
          <Box
            display={"flex"}
            gap={"5px"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            <Box
              component={"img"}
              src={keyWithPages}
              width={"16px"}
              height={"16px"}
            />
            <Typography
              fontFamily={"Perfect_DOSVGA"}
              fontSize={"16px"}
              fontWeight={400}
              lineHeight={"16px"}
              align="center"
            >
              {"wallet.js"}
            </Typography>
          </Box>
        </Box>

        <Box
          width={"33%"}
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
        height={"55vh"}
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
          ml={2}
          fontSize={"14px"}
          width={"160.6px"}
          height={"16px"}
          display={"flex"}
          alignItems={"center"}
          fontWeight={400}
        >
          C:
          <ArrowRight /> file.bat
        </Box>
        <Box width={"100%"} display={"flex"}>
          <Box
            width={"70%"}
            height={"40px"}
            display={"flex"}
            marginLeft={"6%"}
            alignItems={"center"}
          >
            <span style={{ fontSize: "14px", fontWeight: 400, color: "black" }}>
              Filter
            </span>
            <ArrowDropDown sx={{ fontSize: "22px" }} />
          </Box>
          <Box
            width={"20%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              width={"190px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={1.5}
            >
              <Switch
                sx={{
                  width: "36px",
                  height: "24px",
                  bgcolor: "#EEEEEE",
                  border: "1px solid black",
                  borderRadius: "5px",
                  "& .MuiSwitch-thumb": {
                    width: "12px", // Width of the thumb
                    height: "12px", // Height of the thumb
                    backgroundColor: "#262626", // Change the background color of the thumb icon
                    mt: 0.5,
                  },
                  "& .MuiSwitch-switchBase": {
                    padding: "1px", // Padding of the switch base
                  },
                  "& .MuiSwitch-track": {
                    borderRadius: "13px", // Shape of the track
                  },

                  "&.Mui-checked": {
                    "& .MuiSwitch-thumb": {
                      transform: "translateX(16px)", // Change the position of the thumb when checked
                    },
                    "& .MuiSwitch-track": {
                      backgroundColor: "red", // Color of the track when switch is checked
                    },
                  },
                }}
                onChange={(event) => {
                  setShowHidden(event.target.checked);
                }}
                checked={showHidden}
              />
              <span>{!showHidden ? " Show hidden" : "Hide hidden"}</span>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            width={"92%"}
            margin={"auto"}
            border={"1px solid black"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid container>
              <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
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
                      token
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
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
                      invested
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
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
                      remaining
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
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
                      sold
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
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
                      change in P&L
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box margin={"auto"} width={"92.3%"}>
            {[2, 15, 7, 25, 15, 15, 7, 7, 7, 7, 2].map((items, index) => {
              return (
                <Grid
                  key={index}
                  display={!showHidden && items / 7 === 1 ? "none" : ""}
                  container
                  mt={0.4}
                >
                  <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
                    <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        height={"62px"}
                        bgcolor={"#DDDDDD"}
                        borderRight={"1px solid #00000026"}
                      >
                        <Box display={"flex"} alignItems={"center"} gap={1}>
                          <Box
                            ml={2}
                            width={"16px"}
                            height={"16px"}
                            component={"img"}
                            src={pepeCoinLogo}
                          />
                          <Typography
                            mt={0.2}
                            fontFamily={"Perfect_DOSVGA"}
                            fontSize={"16px"}
                            fontWeight={400}
                          >
                            {items / 5 === 3
                              ? "$dogefer"
                              : items / 5 === 5
                              ? "PAT"
                              : items / 7 === 1
                              ? "Hidden Coin"
                              : "PEON"}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
                    <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        height={"62px"}
                        bgcolor={"#EEEEEE"}
                        borderRight={"1px solid #00000026"}
                      >
                        <Box display={"flex"} alignItems={"center"} gap={1}>
                          <Box
                            ml={2}
                            width={"18px"}
                            height={"18px"}
                            component={"img"}
                            src={EthereumIcon}
                          />
                          <Typography
                            mt={0.2}
                            fontFamily={"Perfect_DOSVGA"}
                            fontSize={"16px"}
                            fontWeight={400}
                          >
                            0
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
                    <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"space-evenly"}
                        height={"62px"}
                        bgcolor={"#EEEEEE"}
                        borderRight={"1px solid #00000026"}
                      >
                        <Box display={"flex"} alignItems={"center"} gap={1}>
                          <Box
                            ml={2}
                            width={"18px"}
                            height={"18px"}
                            component={"img"}
                            src={EthereumIcon}
                          />
                          <Typography
                            mt={0.2}
                            fontFamily={"Perfect_DOSVGA"}
                            fontSize={"16px"}
                            fontWeight={400}
                          >
                            {items / 5 === 5 ? "0.012182" : "0"}
                          </Typography>
                        </Box>
                        <Typography
                          ml={2.5}
                          //   mt={0.2}
                          fontFamily={"Perfect_DOSVGA"}
                          fontSize={"16px"}
                          fontWeight={400}
                        >
                          0
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
                    <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"space-evenly"}
                        height={"62px"}
                        bgcolor={"#EEEEEE"}
                        borderRight={"1px solid #00000026"}
                      >
                        <Box display={"flex"} alignItems={"center"} gap={1}>
                          <Box
                            ml={2}
                            width={"18px"}
                            height={"18px"}
                            component={"img"}
                            src={EthereumIcon}
                          />
                          <Typography
                            mt={0.2}
                            fontFamily={"Perfect_DOSVGA"}
                            fontSize={"16px"}
                            fontWeight={400}
                          >
                            0
                          </Typography>
                        </Box>
                        <Typography
                          ml={2.5}
                          //   mt={0.2}
                          fontFamily={"Perfect_DOSVGA"}
                          fontSize={"16px"}
                          fontWeight={400}
                        >
                          0
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xl={2.4} lg={2.4} md={2.4} sm={2.4} xs={2.4}>
                    <Box
                      width={"100%"}
                      display={"flex"}
                      alignItems={"center"}
                      height={"62px"}
                      bgcolor={"#EEEEEE"}
                      borderRight={"1px solid #00000026"}
                    >
                      <Typography
                        ml={2}
                        mt={0.2}
                        fontFamily={"Perfect_DOSVGA"}
                        fontSize={"16px"}
                        color={items / 5 === 5 ? "#FF0000" : "#03A100"}
                        fontWeight={400}
                      >
                        {items / 5 === 5 ? "-87.77&" : "+0.00%"}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
