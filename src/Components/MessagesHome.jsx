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
          />
          <Typography
            fontSize={"24px"}
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
            fontSize={"14px"}
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
        >
          <Box>
            <Box display={"flex"} gap={"15px"}>
              <Box
                component={"img"}
                src={messageProfile}
                width={"66px"}
                height={"66px"}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                >
                  Title
                </Typography>
                <Typography
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                  color={"gray"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                  <Box
                    component={"img"}
                    src={pepeCoinLogo}
                    width={"18px"}
                    height={"18px"}
                  />
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"16px"}
                    fontWeight={"400"}
                    fontFamily={"Perfect_DOSVGA"}
                  >
                    0x0000
                  </Typography>
                  <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"16px"}
                    fontWeight={"400"}
                    fontFamily={"Perfect_DOSVGA"}
                  >
                    Today, at 02:02
                  </Typography>
                  <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
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
          <Divider orientation="vertical" flexItem />
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Box
              component={"img"}
              src={pepeCoinIcon}
              width={"66px"}
              height={"66px"}
            />
            <Box display={"flex"} gap={"5px"} flexDirection={"column"}>
              <Typography
                fontSize={"16px"}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
              >
                0x0000
              </Typography>
              <Typography
                fontSize={"16px"}
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
        >
          <Box>
            <Box display={"flex"} gap={"15px"}>
              <Box
                component={"img"}
                src={messageProfile}
                width={"66px"}
                height={"66px"}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                >
                  Title
                </Typography>
                <Typography
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                  color={"gray"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                  <Box
                    component={"img"}
                    src={pepeCoinLogo}
                    width={"18px"}
                    height={"18px"}
                  />
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"16px"}
                    fontWeight={"400"}
                    fontFamily={"Perfect_DOSVGA"}
                  >
                    0x0000
                  </Typography>
                  <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"16px"}
                    fontWeight={"400"}
                    fontFamily={"Perfect_DOSVGA"}
                  >
                    Today, at 02:02
                  </Typography>
                  <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
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
          <Divider orientation="vertical" flexItem />
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Box
              component={"img"}
              src={pepeCoinIcon}
              width={"66px"}
              height={"66px"}
            />
            <Box display={"flex"} gap={"5px"} flexDirection={"column"}>
              <Typography
                fontSize={"16px"}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
              >
                0x0000
              </Typography>
              <Typography
                fontSize={"16px"}
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
        >
          <Box>
            <Box display={"flex"} gap={"15px"}>
              <Box
                component={"img"}
                src={messageProfile}
                width={"66px"}
                height={"66px"}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                >
                  Title
                </Typography>
                <Typography
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                  color={"gray"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                  <Box
                    component={"img"}
                    src={pepeCoinLogo}
                    width={"18px"}
                    height={"18px"}
                  />
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"16px"}
                    fontWeight={"400"}
                    fontFamily={"Perfect_DOSVGA"}
                  >
                    0x0000
                  </Typography>
                  <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"16px"}
                    fontWeight={"400"}
                    fontFamily={"Perfect_DOSVGA"}
                  >
                    Today, at 02:02
                  </Typography>
                  <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
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
          <Divider orientation="vertical" flexItem />
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Box
              component={"img"}
              src={pepeCoinIcon}
              width={"66px"}
              height={"66px"}
            />
            <Box display={"flex"} gap={"5px"} flexDirection={"column"}>
              <Typography
                fontSize={"16px"}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
              >
                0x0000
              </Typography>
              <Typography
                fontSize={"16px"}
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
        >
          <Box>
            <Box display={"flex"} gap={"15px"}>
              <Box
                component={"img"}
                src={messageProfile}
                width={"66px"}
                height={"66px"}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                >
                  Title
                </Typography>
                <Typography
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                  color={"gray"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                  <Box
                    component={"img"}
                    src={pepeCoinLogo}
                    width={"18px"}
                    height={"18px"}
                  />
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"16px"}
                    fontWeight={"400"}
                    fontFamily={"Perfect_DOSVGA"}
                  >
                    0x0000
                  </Typography>
                  <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"16px"}
                    fontWeight={"400"}
                    fontFamily={"Perfect_DOSVGA"}
                  >
                    Today, at 02:02
                  </Typography>
                  <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
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
          <Divider orientation="vertical" flexItem />
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Box
              component={"img"}
              src={pepeCoinIcon}
              width={"66px"}
              height={"66px"}
            />
            <Box display={"flex"} gap={"5px"} flexDirection={"column"}>
              <Typography
                fontSize={"16px"}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
              >
                0x0000
              </Typography>
              <Typography
                fontSize={"16px"}
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
        >
          <Box>
            <Box display={"flex"} gap={"15px"}>
              <Box
                component={"img"}
                src={messageProfile}
                width={"66px"}
                height={"66px"}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                >
                  Title
                </Typography>
                <Typography
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                  color={"gray"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                  <Box
                    component={"img"}
                    src={pepeCoinLogo}
                    width={"18px"}
                    height={"18px"}
                  />
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"16px"}
                    fontWeight={"400"}
                    fontFamily={"Perfect_DOSVGA"}
                  >
                    0x0000
                  </Typography>
                  <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"16px"}
                    fontWeight={"400"}
                    fontFamily={"Perfect_DOSVGA"}
                  >
                    Today, at 02:02
                  </Typography>
                  <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
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
          <Divider orientation="vertical" flexItem />
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Box
              component={"img"}
              src={pepeCoinIcon}
              width={"66px"}
              height={"66px"}
            />
            <Box display={"flex"} gap={"5px"} flexDirection={"column"}>
              <Typography
                fontSize={"16px"}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
              >
                0x0000
              </Typography>
              <Typography
                fontSize={"16px"}
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
        >
          <Box>
            <Box display={"flex"} gap={"15px"}>
              <Box
                component={"img"}
                src={messageProfile}
                width={"66px"}
                height={"66px"}
              />
              <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
                <Typography
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                >
                  Title
                </Typography>
                <Typography
                  fontSize={"16px"}
                  lineHeight={"16px"}
                  fontWeight={"400"}
                  fontFamily={"Perfect_DOSVGA"}
                  color={"gray"}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                  <Box
                    component={"img"}
                    src={pepeCoinLogo}
                    width={"18px"}
                    height={"18px"}
                  />
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"16px"}
                    fontWeight={"400"}
                    fontFamily={"Perfect_DOSVGA"}
                  >
                    0x0000
                  </Typography>
                  <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
                  <Typography
                    fontSize={"16px"}
                    lineHeight={"16px"}
                    fontWeight={"400"}
                    fontFamily={"Perfect_DOSVGA"}
                  >
                    Today, at 02:02
                  </Typography>
                  <Box width={"4px"} height={"4px"} bgcolor={"#c5c5c5"}></Box>
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
          <Divider orientation="vertical" flexItem />
          <Box display={"flex"} gap={"1rem"} alignItems={"center"}>
            <Box
              component={"img"}
              src={pepeCoinIcon}
              width={"66px"}
              height={"66px"}
            />
            <Box display={"flex"} gap={"5px"} flexDirection={"column"}>
              <Typography
                fontSize={"16px"}
                lineHeight={"16px"}
                fontWeight={"400"}
                fontFamily={"Perfect_DOSVGA"}
              >
                0x0000
              </Typography>
              <Typography
                fontSize={"16px"}
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
