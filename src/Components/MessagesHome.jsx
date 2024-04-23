import messageProfile from "../assets/images/MessageIcon.png";
import pepeCoinLogo from "../assets/images/pepenIcon.png";
import pepeCoinIcon from "../assets/images/icon.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import homeImage from "../assets/images/HomeMessages.png";
import { Badge, Box, Divider, Typography, styled } from "@mui/material";

export const MessagesHome = () => {
  return (
    <Box
      border={"1px solid gray"}
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
      // sx={{ width: "100%", overflowX: "hidden" }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"5px"}
        padding={"5px 10px"}
      >
        <Box display={"flex"} gap={"15px"} alignItems={"center"}>
          <Box
            component={"img"}
            src={homeImage}
            width={"24px"}
            height={"18px"}
            sx={{
              width: {
                xs: "13px",
                sm: "14px",
                md: "18px",
                lg: "24px",
                xl: "24px",
              },
              height: {
                xs: "13px",
                sm: "14px",
                md: "18px",
                lg: "24px",
                xl: "24px",
              },
            }}
          />
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "14px",
                md: "18px",
                lg: "24px",
                xl: "24px",
              },
            }}
            lineHeight={"24px"}
            fontWeight={"400"}
            fontFamily={"Perfect_DOSVGA"}
            color={"gary"}
          >
            Topical title
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "14px",
                md: "18px",
                lg: "24px",
                xl: "24px",
              },
            }}
            lineHeight={"14px"}
            fontWeight={"400"}
            fontFamily={"Perfect_DOSVGA"}
            color={"gary"}
          >
            under the topic
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box display={"flex"} flexDirection={"column"} gap={"5px"} margin={"7px"}>
        <Box
          display={"flex"}
          gap={"15px"}
          padding={"5px 10px"}
          bgcolor={"#EEEEEE"}
          sx={{
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              xs: "column",
              sm: "column",
            },
          }}
        >
          <Box>
            <Box display={"flex"} gap={"15px"}>
              <Box
                component={"img"}
                src={messageProfile}
                sx={{
                  width: {
                    xs: "50px",
                    sm: "50px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                  height: {
                    xs: "50px",
                    sm: "50px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                }}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                >
                  Title
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                  color={"gray"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Box
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                  }}
                >
                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                    <Box
                      component={"img"}
                      src={pepeCoinLogo}
                      width={"18px"}
                      height={"18px"}
                    />
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "16px",
                          lg: "16px",
                          xl: "16px",
                        },
                      }}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      0x0000
                    </Typography>
                    <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  </Box>
                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "16px",
                          lg: "16px",
                          xl: "16px",
                        },
                      }}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      Today, at 02:02
                    </Typography>
                    <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  </Box>

                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
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
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          />
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Box
              component={"img"}
              src={pepeCoinIcon}
              sx={{
                width: {
                  xs: "50px",
                  sm: "50px",
                  md: "66px",
                  lg: "66px",
                  xl: "66px",
                },
                height: {
                  xs: "50px",
                  sm: "50px",
                  md: "66px",
                  lg: "66px",
                  xl: "66px",
                },
              }}
            />
            <Box display={"flex"} gap={"5px"} flexDirection={"column"}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "16px",
                    lg: "16px",
                    xl: "16px",
                  },
                }}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
              >
                0x0000
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                  },
                }}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
                color={"gray"}
              >
                Today, at 02:02
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* box */}
        <Box
          display={"flex"}
          gap={"15px"}
          padding={"5px 10px"}
          bgcolor={"#EEEEEE"}
          sx={{
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              xs: "column",
              sm: "column",
            },
          }}
        >
          <Box>
            <Box display={"flex"} gap={"15px"}>
              <Box
                component={"img"}
                src={messageProfile}
                sx={{
                  width: {
                    xs: "50px",
                    sm: "50px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                  height: {
                    xs: "50px",
                    sm: "50px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                }}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                >
                  Title
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                  color={"gray"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Box
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                  }}
                >
                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                    <Box
                      component={"img"}
                      src={pepeCoinLogo}
                      width={"18px"}
                      height={"18px"}
                    />
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "16px",
                          lg: "16px",
                          xl: "16px",
                        },
                      }}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      0x0000
                    </Typography>
                    <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  </Box>
                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "16px",
                          lg: "16px",
                          xl: "16px",
                        },
                      }}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      Today, at 02:02
                    </Typography>
                    <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  </Box>

                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
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
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          />
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Box
              component={"img"}
              src={pepeCoinIcon}
              sx={{
                width: {
                  xs: "50px",
                  sm: "50px",
                  md: "66px",
                  lg: "66px",
                  xl: "66px",
                },
                height: {
                  xs: "50px",
                  sm: "50px",
                  md: "66px",
                  lg: "66px",
                  xl: "66px",
                },
              }}
            />
            <Box display={"flex"} gap={"5px"} flexDirection={"column"}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "16px",
                    lg: "16px",
                    xl: "16px",
                  },
                }}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
              >
                0x0000
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                  },
                }}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
                color={"gray"}
              >
                Today, at 02:02
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* box */}
        <Box
          display={"flex"}
          gap={"15px"}
          padding={"5px 10px"}
          bgcolor={"#EEEEEE"}
          sx={{
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              xs: "column",
              sm: "column",
            },
          }}
        >
          <Box>
            <Box display={"flex"} gap={"15px"}>
              <Box
                component={"img"}
                src={messageProfile}
                sx={{
                  width: {
                    xs: "50px",
                    sm: "50px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                  height: {
                    xs: "50px",
                    sm: "50px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                }}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                >
                  Title
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                  color={"gray"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Box
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                  }}
                >
                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                    <Box
                      component={"img"}
                      src={pepeCoinLogo}
                      width={"18px"}
                      height={"18px"}
                    />
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "16px",
                          lg: "16px",
                          xl: "16px",
                        },
                      }}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      0x0000
                    </Typography>
                    <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  </Box>
                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "16px",
                          lg: "16px",
                          xl: "16px",
                        },
                      }}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      Today, at 02:02
                    </Typography>
                    <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  </Box>

                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
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
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          />
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Box
              component={"img"}
              src={pepeCoinIcon}
              sx={{
                width: {
                  xs: "50px",
                  sm: "50px",
                  md: "66px",
                  lg: "66px",
                  xl: "66px",
                },
                height: {
                  xs: "50px",
                  sm: "50px",
                  md: "66px",
                  lg: "66px",
                  xl: "66px",
                },
              }}
            />
            <Box display={"flex"} gap={"5px"} flexDirection={"column"}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "16px",
                    lg: "16px",
                    xl: "16px",
                  },
                }}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
              >
                0x0000
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                  },
                }}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
                color={"gray"}
              >
                Today, at 02:02
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* box */}
        <Box
          display={"flex"}
          gap={"15px"}
          padding={"5px 10px"}
          bgcolor={"#EEEEEE"}
          sx={{
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              xs: "column",
              sm: "column",
            },
          }}
        >
          <Box>
            <Box display={"flex"} gap={"15px"}>
              <Box
                component={"img"}
                src={messageProfile}
                sx={{
                  width: {
                    xs: "50px",
                    sm: "50px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                  height: {
                    xs: "50px",
                    sm: "50px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                }}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                >
                  Title
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                  color={"gray"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Box
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                  }}
                >
                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                    <Box
                      component={"img"}
                      src={pepeCoinLogo}
                      width={"18px"}
                      height={"18px"}
                    />
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "16px",
                          lg: "16px",
                          xl: "16px",
                        },
                      }}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      0x0000
                    </Typography>
                    <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  </Box>
                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "16px",
                          lg: "16px",
                          xl: "16px",
                        },
                      }}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      Today, at 02:02
                    </Typography>
                    <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  </Box>

                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
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
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          />
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Box
              component={"img"}
              src={pepeCoinIcon}
              sx={{
                width: {
                  xs: "50px",
                  sm: "50px",
                  md: "66px",
                  lg: "66px",
                  xl: "66px",
                },
                height: {
                  xs: "50px",
                  sm: "50px",
                  md: "66px",
                  lg: "66px",
                  xl: "66px",
                },
              }}
            />
            <Box display={"flex"} gap={"5px"} flexDirection={"column"}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "16px",
                    lg: "16px",
                    xl: "16px",
                  },
                }}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
              >
                0x0000
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                  },
                }}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
                color={"gray"}
              >
                Today, at 02:02
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* box */}
        <Box
          display={"flex"}
          gap={"15px"}
          padding={"5px 10px"}
          bgcolor={"#EEEEEE"}
          sx={{
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              xs: "column",
              sm: "column",
            },
          }}
        >
          <Box>
            <Box display={"flex"} gap={"15px"}>
              <Box
                component={"img"}
                src={messageProfile}
                sx={{
                  width: {
                    xs: "50px",
                    sm: "50px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                  height: {
                    xs: "50px",
                    sm: "50px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                }}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                >
                  Title
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                  color={"gray"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Box
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                  }}
                >
                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                    <Box
                      component={"img"}
                      src={pepeCoinLogo}
                      width={"18px"}
                      height={"18px"}
                    />
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "16px",
                          lg: "16px",
                          xl: "16px",
                        },
                      }}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      0x0000
                    </Typography>
                    <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  </Box>
                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "16px",
                          lg: "16px",
                          xl: "16px",
                        },
                      }}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      Today, at 02:02
                    </Typography>
                    <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  </Box>

                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
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
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          />
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Box
              component={"img"}
              src={pepeCoinIcon}
              sx={{
                width: {
                  xs: "50px",
                  sm: "50px",
                  md: "66px",
                  lg: "66px",
                  xl: "66px",
                },
                height: {
                  xs: "50px",
                  sm: "50px",
                  md: "66px",
                  lg: "66px",
                  xl: "66px",
                },
              }}
            />
            <Box display={"flex"} gap={"5px"} flexDirection={"column"}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "16px",
                    lg: "16px",
                    xl: "16px",
                  },
                }}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
              >
                0x0000
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                  },
                }}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
                color={"gray"}
              >
                Today, at 02:02
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* box */}
        <Box
          display={"flex"}
          gap={"15px"}
          padding={"5px 10px"}
          bgcolor={"#EEEEEE"}
          sx={{
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              xs: "column",
              sm: "column",
            },
          }}
        >
          <Box>
            <Box display={"flex"} gap={"15px"}>
              <Box
                component={"img"}
                src={messageProfile}
                sx={{
                  width: {
                    xs: "50px",
                    sm: "50px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                  height: {
                    xs: "50px",
                    sm: "50px",
                    md: "66px",
                    lg: "66px",
                    xl: "66px",
                  },
                }}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                >
                  Title
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "13px",
                      md: "16px",
                      lg: "16px",
                      xl: "16px",
                    },
                  }}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                  color={"gray"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Box
                  display={"flex"}
                  gap={"10px"}
                  alignItems={"center"}
                  sx={{
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                  }}
                >
                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                    <Box
                      component={"img"}
                      src={pepeCoinLogo}
                      width={"18px"}
                      height={"18px"}
                    />
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "16px",
                          lg: "16px",
                          xl: "16px",
                        },
                      }}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      0x0000
                    </Typography>
                    <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  </Box>
                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "13px",
                          md: "16px",
                          lg: "16px",
                          xl: "16px",
                        },
                      }}
                      lineHeight={"16px"}
                      fontWeight={"400"}
                      fontFamily={"Perfect_DOSVGA"}
                    >
                      Today, at 02:02
                    </Typography>
                    <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  </Box>

                  <Box display={"flex"} gap={"5px"} alignItems={"center"}>
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
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          />
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Box
              component={"img"}
              src={pepeCoinIcon}
              sx={{
                width: {
                  xs: "50px",
                  sm: "50px",
                  md: "66px",
                  lg: "66px",
                  xl: "66px",
                },
                height: {
                  xs: "50px",
                  sm: "50px",
                  md: "66px",
                  lg: "66px",
                  xl: "66px",
                },
              }}
            />
            <Box display={"flex"} gap={"5px"} flexDirection={"column"}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "16px",
                    lg: "16px",
                    xl: "16px",
                  },
                }}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
              >
                0x0000
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "14px",
                    xl: "14px",
                  },
                }}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
                color={"gray"}
              >
                Today, at 02:02
              </Typography>
            </Box>
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
