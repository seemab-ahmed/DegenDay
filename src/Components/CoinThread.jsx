import { Box, Typography, Button, styled, Badge } from "@mui/material";

import pepeCoinLogo from "../assets/images/pepenIcon.png";

import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

import TurnLeftIcon from "@mui/icons-material/TurnLeft";

import FavoriteIcon from "@mui/icons-material/Favorite";

export const CoinThread = () => {
  return (
    <Box minHeight={"400px"} border={"1px solid black"} padding={"1rem"}>
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{
            flexDirection: {
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            },
          }}
          gap={"5px"}
        >
          <Button
            variant="contained"
            sx={{
              textTransform: "lowercase",
              backgroundColor: "#EEEEEE",
              ":hover": { backgroundColor: "#EEEEEE" },
              color: "black",
              border: "1px solid black",
              lineHeight: "14px",
              fontFamily: "Perfect_DOSVGA",
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            scroll to bottom
          </Button>
          <Button
            endIcon={<ModeEditOutlinedIcon />}
            variant="contained"
            sx={{
              textTransform: "initial",
              backgroundColor: "#EEEEEE",
              ":hover": { backgroundColor: "#EEEEEE" },
              color: "black",
              border: "1px solid black",
              fontSize: "14px",
              lineHeight: "14px",
              fontWeight: "500",
              fontFamily: "Perfect_DOSVGA",
            }}
          >
            Post a reply
          </Button>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          bgcolor={"#EEEEEE"}
          padding={"1rem"}
        >
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
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* user side */}
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
                gap: {
                  xs: "5px",
                  sm: "5px",
                  md: "1.2rem",
                  lg: "1.2rem",
                  xl: "1.2rem",
                },
              }}
            >
              <Box display={"flex"} gap={"5px"}>
                <Typography
                  fontSize="14px"
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight="14px"
                  fontWeight="400"
                  color={"gray"}
                >
                  user :
                </Typography>
                <Box display={"flex"} gap={"5px"}>
                  <Box
                    width={"16px"}
                    fontFamily={"Perfect_DOSVGA"}
                    height={"16px"}
                    component={"img"}
                    src={pepeCoinLogo}
                  />
                  <Typography
                    fontSize="14px"
                    fontFamily={"Perfect_DOSVGA"}
                    lineHeight="14px"
                    fontWeight="400"
                  >
                    username
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} gap={"5px"}>
                <Typography
                  fontSize="14px"
                  fontFamily={"Perfect_DOSVGA"}
                  lineHeight="14px"
                  fontWeight="400"
                  color={"gray"}
                >
                  date :
                </Typography>
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize="14px"
                  lineHeight="14px"
                  fontWeight="400"
                >
                  18.04.2024
                </Typography>
              </Box>
            </Box>
            {/* reply side */}
            <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
              <Box
                display={"flex"}
                gap={"5px"}
                alignItems={"center"}
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                }}
              >
                <Typography
                  fontSize="14px"
                  lineHeight="14px"
                  fontWeight="400"
                  color={"gray"}
                >
                  #461843
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
                    fontWeight: "400",
                    fontFamily: "Perfect_DOSVGA",
                  }}
                >
                  reply
                </Button>
              </Box>
              <Box mr={"10px"}>
                <CustonBadge badgeContent={2}>
                  <FavoriteIcon sx={{ color: "gray" }} />
                </CustonBadge>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              fontFamily={"Perfect_DOSVGA"}
              fontSize="14px"
              lineHeight="16px"
              fontWeight="400"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              id, quo odio praesentium animi laudantium ipsam expedita hic in,
              commodi voluptas soluta aliquam similique repellendus. Consectetur
              inventore eaque blanditiis vero. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Culpa, labore! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ad corporis mollitia veritatis
              enim fugiat reprehenderit rem dolorum cumque. Praesentium, eum.
            </Typography>
          </Box>
        </Box>
        {/* red heart1 */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          bgcolor={"#EEEEEE"}
          padding={"1rem"}
        >
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
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* user side */}
            <Box
              display={"flex"}
              gap={"1.2rem"}
              sx={{
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                },
                gap: {
                  xs: "5px",
                  sm: "5px",
                  md: "1.2rem",
                  lg: "1.2rem",
                  xl: "1.2rem",
                },
              }}
            >
              <Box display={"flex"} gap={"5px"}>
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize="14px"
                  lineHeight="14px"
                  fontWeight="400"
                  color={"gray"}
                >
                  user :
                </Typography>
                <Box display={"flex"} gap={"5px"}>
                  <Box
                    width={"16px"}
                    height={"16px"}
                    component={"img"}
                    src={pepeCoinLogo}
                  />
                  <Typography
                    fontFamily={"Perfect_DOSVGA"}
                    fontSize="14px"
                    lineHeight="14px"
                    fontWeight="400"
                  >
                    username
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} gap={"5px"}>
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize="14px"
                  lineHeight="14px"
                  fontWeight="400"
                  color={"gray"}
                >
                  date :
                </Typography>
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize="14px"
                  lineHeight="14px"
                  fontWeight="400"
                >
                  18.04.2024
                </Typography>
              </Box>
            </Box>
            {/* reply side */}
            <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
              <Box
                display={"flex"}
                gap={"5px"}
                alignItems={"center"}
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                }}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize="14px"
                  lineHeight="14px"
                  fontWeight="400"
                  color={"gray"}
                >
                  #461843
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
                    fontWeight: "400",
                    fontFamily: "Perfect_DOSVGA",
                  }}
                >
                  reply
                </Button>
              </Box>
              <Box mr={"10px"}>
                <CustonBadge badgeContent={2}>
                  <FavoriteIcon sx={{ color: "#FF0000" }} />
                </CustonBadge>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              fontFamily={"Perfect_DOSVGA"}
              fontSize="14px"
              lineHeight="16px"
              fontWeight="400"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              id, quo odio praesentium animi laudantium ipsam expedita hic in,
              commodi voluptas soluta aliquam similique repellendus. Consectetur
              inventore eaque blanditiis vero. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Culpa, labore! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ad corporis mollitia veritatis
              enim fugiat reprehenderit rem dolorum cumque. Praesentium, eum.
            </Typography>
          </Box>
        </Box>
        {/* red heart2 */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          bgcolor={"#EEEEEE"}
          padding={"1rem"}
        >
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
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* user side */}
            <Box
              display={"flex"}
              gap={"1.2rem"}
              sx={{
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                },
                gap: {
                  xs: "5px",
                  sm: "5px",
                  md: "1.2rem",
                  lg: "1.2rem",
                  xl: "1.2rem",
                },
              }}
            >
              <Box display={"flex"} gap={"5px"}>
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize="14px"
                  lineHeight="14px"
                  fontWeight="400"
                  color={"gray"}
                >
                  user :
                </Typography>
                <Box display={"flex"} gap={"5px"}>
                  <Box
                    width={"16px"}
                    height={"16px"}
                    component={"img"}
                    src={pepeCoinLogo}
                  />
                  <Typography
                    fontFamily={"Perfect_DOSVGA"}
                    fontSize="14px"
                    lineHeight="14px"
                    fontWeight="400"
                  >
                    username
                  </Typography>
                </Box>
              </Box>
              <Box display={"flex"} gap={"5px"}>
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize="14px"
                  lineHeight="14px"
                  fontWeight="400"
                  color={"gray"}
                >
                  date :
                </Typography>
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize="14px"
                  lineHeight="14px"
                  fontWeight="400"
                >
                  18.04.2024
                </Typography>
              </Box>
            </Box>
            {/* reply side */}
            <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
              <Box
                display={"flex"}
                gap={"5px"}
                alignItems={"center"}
                sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                }}
              >
                <Typography
                  fontFamily={"Perfect_DOSVGA"}
                  fontSize="14px"
                  lineHeight="14px"
                  fontWeight="400"
                  color={"gray"}
                >
                  #461843
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
                    fontWeight: "500",
                    fontFamily: "Perfect_DOSVGA",
                  }}
                >
                  reply
                </Button>
              </Box>
              <Box mr={"10px"}>
                <CustonBadge badgeContent={2}>
                  <FavoriteIcon sx={{ color: "#FF0000" }} />
                </CustonBadge>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              fontFamily={"Perfect_DOSVGA"}
              fontSize="14px"
              lineHeight="16px"
              fontWeight="400"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              id, quo odio praesentium animi laudantium ipsam expedita hic in,
              commodi voluptas soluta aliquam similique repellendus. Consectetur
              inventore eaque blanditiis vero. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Culpa, labore! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Ad corporis mollitia veritatis
              enim fugiat reprehenderit rem dolorum cumque. Praesentium, eum.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            onClick={() => {
              console.log("hello");
              window.scrollTo({
                top: 0,
                behavior: "smooth", // Optional: Scroll behavior
              });
            }}
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
          >
            scroll to top
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
const CustonBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    top: 7,
    right: 0,
    left: 10,
    padding: "0px",
  },
}));
