import { Box, Typography, Grid } from "@mui/material";

import pepeCoinLogo from "../assets/images/pepenIcon.png";

import fireLogo from "../assets/images/FireSimple.png";

export const CoinInfo = () => {
  return (
    <Box
      minHeight={"400px"}
      border={"1px solid black"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Grid container>
        <Grid item xl={2.1} lg={2.1} md={2.1} sm={2.1} xs={2.1}>
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
                icon
              </Typography>
            </Box>
          </Box>
          <Box
            height={"92.5%"}
            bgcolor={"#DDDDDD"}
            border={"1px solid #00000026"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Box
              width={"120px"}
              height={"120px"}
              component={"img"}
              src={pepeCoinLogo}
              mt={"2.5rem"}
            />
          </Box>
        </Grid>

        <Grid item xl={3.3} lg={3.3} md={3.3} sm={3.3} xs={3.3}>
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
                statistics
              </Typography>
            </Box>
          </Box>

          <Box
            height={"80.5%"}
            bgcolor={"#EEEEEE"}
            border={"1px solid #00000026"}
            padding={"1.5rem 1.5rem"}
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
              <Box
                width={"16px"}
                height={"16px"}
                component={"img"}
                src={fireLogo}
              />
              <Typography
                fontFamily={"Perfect_DOSVGA"}
                lineHeight={"16px"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#FF0000"}
              >
                hottest offerings on 16.04.2024, 09:22:50
              </Typography>
            </Box>
            <Box>
              <Typography
                fontFamily={"Perfect_DOSVGA"}
                fontSize={"16px"}
                fontWeight={500}
                color={"gray"}
              >
                ticker :
              </Typography>
              <Typography
                fontFamily={"Perfect_DOSVGA"}
                fontSize={"16px"}
                fontWeight={500}
              >
                pepecoin.day
              </Typography>
            </Box>
            <Box>
              <Typography
                fontFamily={"Perfect_DOSVGA"}
                fontSize={"16px"}
                fontWeight={500}
                color={"gray"}
              >
                virtual liquidity :
              </Typography>
              <Typography
                fontFamily={"Perfect_DOSVGA"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#03A100"}
              >
                $15 071
              </Typography>
            </Box>
            <Box>
              <Typography
                fontFamily={"Perfect_DOSVGA"}
                fontSize={"16px"}
                fontWeight={500}
                color={"gray"}
              >
                market cap :
              </Typography>
              <Typography
                fontFamily={"Perfect_DOSVGA"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#03A100"}
              >
                $15 972,703
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xl={3.3} lg={3.3} md={3.3} sm={3.3} xs={3.3}>
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
                description
              </Typography>
            </Box>
          </Box>

          <Box
            height={"80.5%"}
            bgcolor={"#EEEEEE"}
            border={"1px solid #00000026"}
            padding={"1.5rem 1.5rem"}
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            <Typography
              fontFamily={"Perfect_DOSVGA"}
              fontSize={"16px"}
              fontWeight={500}
              lineHeight={"16px"}
              color={"#000000"}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              quidem labore ex nulla explicabo quisquam, aliquid, hic laboriosam
              maiores dolores earum soluta? Laborum tempore in voluptatum? Ut
              tempore porro alias. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Libero quidem labore ex nulla explicabo
              quisquam, aliquid, hic laboriosam maiores dolores earum soluta?
              Laborum tempore in voluptatum? Ut tempore porro alias. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Libero quidem
              labore ex nulla explicabo quisquam, aliquid, hic laboriosam
              maiores dolores earum soluta? Laborum tempore in voluptatum? Ut
              tempore porro alias.
            </Typography>
          </Box>
        </Grid>
        <Grid item xl={3.3} lg={3.3} md={3.3} sm={3.3} xs={3.3}>
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
                progress
              </Typography>
            </Box>
          </Box>
          <Box
            height={"80.5%"}
            bgcolor={"#EEEEEE"}
            border={"1px solid #00000026"}
            padding={"1.5rem 1.5rem"}
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
          >
            <Box display={"flex"} gap={"5px"} alignItems={"center"}>
              <Typography
                fontFamily={"Perfect_DOSVGA"}
                lineHeight={"16px"}
                fontSize={"16px"}
                fontWeight={500}
                color={"gray"}
              >
                bonding curve progress :
              </Typography>
              <Typography
                fontFamily={"Perfect_DOSVGA"}
                lineHeight={"24px"}
                fontSize={"24px"}
                fontWeight={500}
                color={"#4747FA"}
              >
                61%
              </Typography>
            </Box>
            <Box
              width={"100%"}
              height={"12px"}
              bgcolor={"#BBBBBB"}
              border={"1px inset #E5E5F2"}
              boxShadow={"inset 0 0 1px 1px #262626"} // Box shadow with black color inside
            >
              <Box
                sx={{
                  backgroundImage:
                    "linear-gradient(to bottom, #E5E5F2, #0B0B53, #8C8CF2)",
                }}
                width={"60%"}
                // bgcolor={"#262688"}
                height={"10px"}
                border={"0.5px inset #262626"}
              ></Box>
            </Box>
            <Box></Box>

            <Typography
              fontFamily={"Perfect_DOSVGA"}
              fontSize={"16px"}
              fontWeight={500}
              lineHeight={"16px"}
              color={"#000000"}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              quidem labore ex nulla explicabo quisquam, aliquid, hic laboriosam
              maiores dolores earum soluta? Laborum tempore in voluptatum? Ut
              tempore porro alias. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Libero quidem labore ex nulla explicabo
              quisquam, aliquid, hic laboriosam maiores dolores earum soluta?
              Laborum tempore in voluptatum? Ut tempore porro alias.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
