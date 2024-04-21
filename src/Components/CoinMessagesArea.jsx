/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";
import twoFacesIcon from "../assets/images/file-sharing.png";
import homeImage from "../assets/images/HomeMessages.png";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { MessagesHome } from "./MessagesHome";
import { MessagesTopicalTitle } from "./MessagesTopicalTitle";
import { MessagesUnderTopical } from "./MessagesUnderTopical";

export const CoinMessagesArea = (props) => {
  const [conditionalRendering, setConditionalRendering] = useState(null);
  const [itemsIndex, setItemIndex] = useState(null);
  const [dropOptions, setDropOptions] = useState({
    dropOption: false,
    dropOption1: false,
    dropOption2: false,
    dropOption3: false,
  });
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
              src={twoFacesIcon}
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
              {"Message Board.php"}
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
        height={"80vh"}
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
        <Box>
          <Grid container>
            <Grid item xl={3} lg={3} md={3} xs={3} sm={3}>
              <Box>
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
                      Topics
                    </Typography>
                  </Box>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"5px"}
                  margin={"10px"}
                >
                  <Box
                    display={"flex"}
                    gap={"10px"}
                    alignItems={"center"}
                    bgcolor={"#EEEEEE"}
                    padding={"10px 12px"}
                  >
                    <Box
                      component={"img"}
                      src={homeImage}
                      width={"16px"}
                      height={"12px"}
                    />
                    <Typography
                      fontSize={"16px"}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      Home
                    </Typography>
                  </Box>
                  {/* All Drop downs */}
                  {/* 1Drop down */}
                  <Box>
                    <Box
                      display={"flex"}
                      onClick={() =>
                        setDropOptions((prevState) => ({
                          ...prevState,
                          dropOption: !prevState.dropOption,
                        }))
                      }
                      gap={"10px"}
                      alignItems={"center"}
                      bgcolor={
                        dropOptions.dropOption == false ? "#EEEEEE" : "#333399"
                      }
                      padding={"10px 12px"}
                      sx={{ cursor: "pointer" }}
                    >
                      <Box
                        component={"img"}
                        src={homeImage}
                        width={"16px"}
                        height={"12px"}
                      />
                      <Typography
                        fontSize={"16px"}
                        lineHeight={"16px"}
                        color={
                          dropOptions.dropOption == false ? "inherit" : "white"
                        }
                        fontWeight={"400"}
                        fontFamily={"Perfect_DOSVGA"}
                      >
                        topical title
                      </Typography>
                      {dropOptions.dropOption == false ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowDropUpIcon sx={{ color: "white" }} />
                      )}
                    </Box>
                    {/* Drop Items */}
                    {dropOptions.dropOption && (
                      <Box
                        margin={"5px 0 5px 15px"}
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"5px"}
                      >
                        {[0, 1, 2, 3].map((item) => {
                          return (
                            <Box
                              key={item}
                              display={"flex"}
                              gap={"10px"}
                              alignItems={"center"}
                              padding={"10px 12px"}
                              color={`${
                                conditionalRendering === "underTheTopic" &&
                                item == itemsIndex
                                  ? "whitesmoke"
                                  : "black"
                              }`}
                              bgcolor={`${
                                conditionalRendering === "underTheTopic" &&
                                item == itemsIndex
                                  ? "#333399"
                                  : "#EEEEEE"
                              }`}
                              sx={{ cursor: "pointer" }}
                              onClick={() => {
                                setConditionalRendering("underTheTopic");
                                setItemIndex(item);
                              }}
                            >
                              <Box
                                component={"img"}
                                src={homeImage}
                                width={"16px"}
                                height={"12px"}
                              />
                              <Typography
                                fontSize={"16px"}
                                lineHeight={"16px"}
                                fontWeight={"400"}
                                fontFamily={"Perfect_DOSVGA"}
                              >
                                under the topic
                              </Typography>
                            </Box>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                  {/* 2Drop down */}
                  <Box>
                    <Box
                      display={"flex"}
                      onClick={() =>
                        setDropOptions((pre) => ({
                          ...pre,
                          dropOption1: !pre.dropOption1,
                        }))
                      }
                      gap={"10px"}
                      alignItems={"center"}
                      bgcolor={
                        dropOptions.dropOption1 == false ? "#EEEEEE" : "#333399"
                      }
                      padding={"10px 12px"}
                      sx={{ cursor: "pointer" }}
                    >
                      <Box
                        component={"img"}
                        src={homeImage}
                        width={"16px"}
                        height={"12px"}
                      />
                      <Typography
                        fontSize={"16px"}
                        lineHeight={"16px"}
                        color={
                          dropOptions.dropOption1 == false ? "inherit" : "white"
                        }
                        fontWeight={"400"}
                        fontFamily={"Perfect_DOSVGA"}
                      >
                        topical title
                      </Typography>
                      {dropOptions.dropOption1 == false ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowDropUpIcon sx={{ color: "white" }} />
                      )}
                    </Box>
                    {/* Drop Items */}
                    {dropOptions.dropOption1 && (
                      <Box
                        margin={"5px 0 5px 15px"}
                        display={"flex"}
                        flexDirection={"column"}
                        gap={"5px"}
                      >
                        {[4, 5, 6, 7].map((items) => {
                          return (
                            <Box
                              key={items}
                              display={"flex"}
                              gap={"10px"}
                              alignItems={"center"}
                              // bgcolor={"#EEEEEE"}
                              padding={"10px 12px"}
                              color={`${
                                conditionalRendering === "underTheTopic2" &&
                                items == itemsIndex
                                  ? "whitesmoke"
                                  : "black"
                              }`}
                              bgcolor={`${
                                conditionalRendering === "underTheTopic2" &&
                                items == itemsIndex
                                  ? "#333399"
                                  : "#EEEEEE"
                              }`}
                              sx={{ cursor: "pointer" }}
                              onClick={() => {
                                setConditionalRendering("underTheTopic2");
                                setItemIndex(items);
                              }}
                            >
                              <Box
                                component={"img"}
                                src={homeImage}
                                width={"16px"}
                                height={"12px"}
                              />
                              <Typography
                                fontSize={"16px"}
                                lineHeight={"16px"}
                                fontWeight={"400"}
                                fontFamily={"Perfect_DOSVGA"}
                              >
                                under the topic
                              </Typography>
                            </Box>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xl={9} lg={9} md={9} xs={9} sm={9}>
              <Box>
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
                      Main
                    </Typography>
                  </Box>
                </Box>
                {conditionalRendering === null ? (
                  <MessagesHome />
                ) : conditionalRendering === "underTheTopic" ? (
                  <MessagesTopicalTitle
                    setRenderFromMessageUnderTopical={setConditionalRendering}
                  />
                ) : (
                  <MessagesUnderTopical
                    setRenderFromMessageUnderTopical={setConditionalRendering}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  bgcolor: "#FFFFFF",
  border: "none",
  //       overflowX:'hidden',
  //       overflowY:'auto',
};
