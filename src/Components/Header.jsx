import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import blastLogo from "../assets/images/blastIcon.png";
import solanaIcon from "../assets/images/solanaIcon.png";
import { Fade, IconButton, Paper, Popper, Typography } from "@mui/material";
import fireLogo from "../assets/images/FireSimple.png";
import pepeCoinLogo from "../assets/images/icon.png";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import earthLogo from "../assets/images/Website.png";
import fullScreenLogo from "../assets/images/Rectangle.png";
import dayjs from "dayjs";
import { useState } from "react";
function Header() {
  // dropdown arrow states and function is here
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleFullscreenButtonClick = () => {
    const element = document.documentElement; // Fullscreen the whole document
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      /* Safari */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      /* IE11 */
      element.msRequestFullscreen();
    }
  };
  return (
    <>
      <Box
        width={"100%"}
        sx={{
          height: {
            xs: "150px",
            sm: "150px",
            md: "30px",
            lg: "30px",
            xl: "30px",
          },
        }}
        // height={"30px"}
        bgcolor={"#C0C0C0"}
        borderBottom={"1px solid #000000"}
        borderTop={"1px solid #000000"}
      >
        <Grid container justifyContent={"space-around"}>
          <Grid
            item
            xs={12}
            sm={12}
            md={1}
            lg={1}
            xl={1}
            height={"28px"}
            display={"flex"}
            alignItems={"center"}
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
                lg: "space-between",
                xl: "space-between",
              },
            }}
            // justifyContent={"space-between"}
          >
            <Box
              sx={{
                fontSize: {
                  xs: "8px",
                  sm: "8px",
                  md: "11px",
                  lg: "14px",
                  xl: "14px",
                },
              }}
            >
              DEGEN.DAY
            </Box>
            <Box
              sx={{
                fontSize: {
                  xs: "8px",
                  sm: "8px",
                  md: "11px",
                  lg: "14px",
                  xl: "14px",
                },
                opacity: "50%",
              }}
            >
              V1.0.1
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
            display={"flex"}
            alignItems={"center"}
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "",
                lg: "",
                xl: "",
              },
            }}
            gap={2}
          >
            <Box
              sx={{
                fontSize: {
                  xs: "8px",
                  sm: "8px",
                  md: "11px",
                  lg: "14px",
                  xl: "14px",
                },
                opacity: "50%",
              }}
            >
              selected chain:
            </Box>
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <img
                width={"16px"}
                height={"16px"}
                src={blastLogo}
                alt="blastLogo image"
              />
              <Typography
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "8px",
                    md: "11px",
                    lg: "14px",
                    xl: "14px",
                  },
                  fontFamily: "Perfect_DOSVGA",
                }}
              >
                Blast
              </Typography>
              <Box
                ml={1}
                bgcolor={"#363636"}
                display={"flex"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
                width={"92px"}
                // sx={{width:{xs:'45px',sm:'45px',md:'45px',lg:'92px',xl:'92px'}}}
                height={"30px"}
              >
                <img
                  src={solanaIcon}
                  alt="Solana Icon Image"
                  width={"16px"}
                  height={"16px"}
                />{" "}
                <Typography
                  sx={{
                    fontSize: {
                      xs: "8px",
                      sm: "8px",
                      md: "11px",
                      lg: "14px",
                      xl: "14px",
                    },
                    color: "whitesmoke",
                    fontFamily: "Perfect_DOSVGA",
                  }}
                >
                  Solana
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
            display={"flex"}
            alignItems={"center"}
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "",
                lg: "",
                xl: "",
              },
            }}
            gap={1}
          >
            <Box display={"flex"} alignItems={"center"} height={"29px"}>
              <img
                width={"16px"}
                height={"16px"}
                src={fireLogo}
                alt="fireLogo image"
              />
              <Typography
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "8px",
                    md: "11px",
                    lg: "14px",
                    xl: "14px",
                  },
                  color: "#FF0000",
                  fontWeight: 400,
                  fontFamily: "Perfect_DOSVGA",
                }}
              >
                {" "}
                hottest offerings:
              </Typography>
            </Box>
            <Box display={"flex"} gap={1} alignItems={"center"}>
              <img
                width={"16px"}
                height={"16px"}
                src={pepeCoinLogo}
                alt="pepeCoinLogo image"
              />
              <Typography
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "8px",
                    md: "11px",
                    lg: "14px",
                    xl: "14px",
                  },
                  fontFamily: "Perfect_DOSVGA",
                }}
              >
                pepecoin.day
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            height={"29px"}
            display={"flex"}
            alignItems={"center"}
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "",
                lg: "",
                xl: "",
              },
            }}
          >
            <Box display={"flex"} height={"30px"} alignItems={"center"}>
              <Box
                sx={{
                  fontSize: {
                    xs: "8px",
                    sm: "8px",
                    md: "11px",
                    lg: "14px",
                    xl: "14px",
                  },
                  opacity: "50%",
                }}
              >
                points:
              </Box>
              <Box fontSize={"14px"}>18532</Box>
              <Box display={"flex"}>
                {" "}
                <IconButton
                  aria-label="pointsDropDown"
                  size="small"
                  onClick={handleClick("bottom-end")}
                  sx={{ height: "28px" }}
                >
                  {!open ? (
                    <ArrowDropDown
                      sx={{ fontSize: "26px", cursor: "pointer" }}
                    />
                  ) : (
                    <ArrowDropUp
                      sx={{ fontSize: "26px", cursor: "pointer", color: "red" }}
                    />
                  )}
                </IconButton>
                <Box
                  height={"28px"}
                  width={"5px"}
                  bgcolor={"#BBBBBB"}
                  border={"1px inset #FFFFFF"}
                ></Box>
                <Box
                  ml={2}
                  display={"flex"}
                  alignItems={"center"}
                  gap={1}
                  height={"30px"}
                >
                  <img
                    src={earthLogo}
                    alt="Earth logo"
                    width={"16px"}
                    height={"16px"}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "8px",
                        sm: "8px",
                        md: "11px",
                        lg: "14px",
                        xl: "14px",
                      },
                      fontWeight: 400,
                      fontFamily: "Perfect_DOSVGA",
                    }}
                  >
                    {dayjs(new Date()).format("ddd h:mm:ss A")}
                  </Typography>
                </Box>
                <Box
                  ml={2}
                  height={"28px"}
                  width={"5px"}
                  bgcolor={"#BBBBBB"}
                  border={"1px inset #FFFFFF"}
                ></Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  sx={{ cursor: "pointer" }}
                  height={"30px"}
                  ml={2}
                  gap={1}
                  onClick={handleFullscreenButtonClick}
                >
                  <img
                    src={fullScreenLogo}
                    alt="Full Screen Logo"
                    height={"16px"}
                    width={"16px"}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "8px",
                        sm: "8px",
                        md: "11px",
                        lg: "14px",
                        xl: "14px",
                      },
                      fontWeight: 400,
                      fontFamily: "Perfect_DOSVGA",
                    }}
                  >
                    Full screen
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* points drop down popper is here  */}
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ marginTop: "5%" }}>
              <Box width={"189px"} height={"146px"}>
                <Box
                  width={"187px"}
                  bgcolor={"#DDDDDD"}
                  height={"26px"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  border={"1px solid #000000"}
                >
                  <span
                    style={{
                      opacity: "50%",
                      fontSize: "14px",
                      color: "#000000",
                      marginTop: "3%",
                      marginLeft: "6%",
                    }}
                  >
                    Your points:
                  </span>
                  <span
                    style={{
                      color: "#03A100",
                      fontSize: "14px",
                      marginTop: "3%",
                      marginRight: "5%",
                    }}
                  >
                    18532
                  </span>
                </Box>

                <Box
                  width={"187px"}
                  bgcolor={"#DDDDDD"}
                  height={"58px"}
                  display={"flex"}
                  flexDirection={"column"}
                  border={"1px solid #000000"}
                >
                  <Box width={"100%"} mt={0.5}>
                    <span
                      style={{
                        marginLeft: "7%",
                        width: "79px",
                        height: "14px",
                        opacity: "50%",
                        fontSize: "14px",
                        color: "#000000",
                        fontWeight: 400,
                      }}
                    >
                      Next Drop:
                    </span>
                  </Box>
                  <Box width={"100%"} mt={0.5}>
                    <Box
                      ml={1.5}
                      sx={{
                        width: "95px",
                        height: "24px",
                        color: "#000000",
                        fontSize: "24px",
                      }}
                      display={"flex"}
                      gap={2}
                    >
                      <span>24d</span>
                      <span>24h</span>
                    </Box>
                  </Box>
                </Box>

                <Box
                  width={"187px"}
                  bgcolor={"#DDDDDD"}
                  height={"58px"}
                  display={"flex"}
                  flexDirection={"column"}
                  border={"1px solid #000000"}
                >
                  <Box width={"100%"} mt={0.5}>
                    <span
                      style={{
                        marginLeft: "7%",
                        width: "79px",
                        height: "14px",
                        opacity: "50%",
                        fontSize: "14px",
                        color: "#000000",
                        fontWeight: 400,
                      }}
                    >
                      Your Rank:
                    </span>
                  </Box>
                  <Box width={"100%"} mt={0.5}>
                    <Box
                      ml={1.5}
                      sx={{
                        width: "95px",
                        height: "24px",
                        color: "#000000",
                        fontSize: "24px",
                      }}
                      display={"flex"}
                    >
                      <span style={{ marginLeft: "2%" }}>#234</span>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}

export default Header;
