/* eslint-disable no-unused-vars */
import { Box, Divider, Grid } from "@mui/material";
import PepCoin_Screen_Icon from "./PepCoin_Screen_Icon";
import SideBar from "./SideBar";
import pepeCoinIcon from "../assets/images/icon.png";
import defaultFileIcon from "../assets/images/DefaultFile.png";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import File from "./File";
import StartNewCoin from "./StartNewCoin";
import Takeover from "./Takeover";
import Wallet from "./Wallet";
import { CoinMessagesArea } from "./CoinMessagesArea";
import PepeCoin_Day from "./PepeCoin_Day";

export default function MainWindow() {
  const [open, setOpen] = useState(false);
  const [currentFileRendering, setCurrentFileRendering] = useState(null);
  return (
    <>
      <Box
        bgcolor={"#63639C"}
        width={"100%"}
        sx={{
          height: { xs: "", sm: "", md: "94.8vh", lg: "95.7vh", xl: "100vh" },
        }}
      >
        <Grid container gap={9}>
          <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
            <Box
              // border={"1px solid red"}
              margin={"1% auto"}
              width={"98%"}
              display={"flex"}
              gap={3}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box
                display={"flex"}
                width={"100%"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
              >
                {/* iconType fire is for fireIcon,greenArrow is for green Arrow Icon and if you don't pass any value icon will not show */}
                <PepCoin_Screen_Icon
                  iconType="fire"
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  iconType="fire"
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  iconType="fire"
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  iconType="greenArrow"
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  iconType="greenArrow"
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  iconType="greenArrow"
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
              </Box>

              <Box
                display={"flex"}
                width={"100%"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
              >
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
              </Box>

              <Box
                display={"flex"}
                width={"100%"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
              >
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
              </Box>

              <Box
                display={"flex"}
                width={"100%"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
              >
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
              </Box>

              <Box
                display={"flex"}
                width={"100%"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
              >
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
              </Box>

              <Box
                display={"flex"}
                width={"100%"}
                justifyContent={"space-between"}
                flexWrap={"wrap"}
              >
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
                <PepCoin_Screen_Icon
                  setRenderFromPepCoin_Screen_Icon={setCurrentFileRendering}
                  setModalOpenFromPepCoin_Screen_Icon={setOpen}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
            <SideBar
              setRenderFromSidebar={setCurrentFileRendering}
              setModalOpenFromSidebar={setOpen}
            />
          </Grid>
        </Grid>

        {/* as Client Demands This Section is removing because it is for V 1.0.1 and we are currently in V1.0.0 */}
        {/* <Divider
          sx={{
            bgcolor: "#FFFFFF26",
            height: "1px",
            maxWidth: "82%",
            margin: "2% 1%",
          }}
        />
        <br />
        <Box
          width={"85%"}
          margin={"-3% 1%"}
          // border={"1px solid white"}
          display={"flex"}
          alignItems={"flex-start"}
          justifyContent={"space-evenly"}
          flexWrap={"wrap"}
          height={"200px"}
        >
          <Box
            width={"298px"}
            height={"102px"}
            display={"flex"}
            // flexDirection={"column"}
            alignItems={"center"}
            // justifyContent={"space-around"}
          >
            <Box
              width={"77px"}
              height={"77px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              border={"3px solid #03A100"}
              borderRadius={"50%"}
            >
              <img
                src={pepeCoinIcon}
                width={"61px"}
                height={"61px"}
                alt="pepecoin icon picture"
              />
            </Box>
            <Box
              width={"185px"}
              height={"78px"}
              // textAlign={"center"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              gap={1}
              alignItems={"flex-start"}
              ml={1}
            >
              <span style={{ color: "#FFFFFF", fontSize: "14px" }}>Title</span>
              <p style={{ color: "#FFFFFF", fontSize: "14px", opacity: "50%" }}>
                Lorem ipsum dolor sit amet consectetur. Suspendisse fames.
              </p>
              <Box display={"flex"}>
                <Box
                  width={"103px"}
                  height={"18px"}
                  bgcolor={"#7373A6"}
                  color={"#FFFFFF"}
                  fontSize={"14px"}
                  textAlign={"center"}
                >
                  pepecoin.day
                </Box>
                <Box
                  width={"74px"}
                  height={"18px"}
                  color={"#FFFFFF"}
                  fontSize={"14px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={1}
                >
                  <img
                    src={pepeCoinIcon}
                    width={"18px"}
                    height={"18px"}
                    alt="pepecoin icon picture"
                  />{" "}
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    0x0000
                  </span>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            width={"298px"}
            height={"102px"}
            display={"flex"}
            // flexDirection={"column"}
            alignItems={"center"}
            // justifyContent={"space-around"}
          >
            <Box
              width={"77px"}
              height={"77px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              border={"3px solid #03A100"}
              borderRadius={"50%"}
            >
              <img
                src={pepeCoinIcon}
                width={"61px"}
                height={"61px"}
                alt="pepecoin icon picture"
              />
            </Box>
            <Box
              width={"185px"}
              height={"78px"}
              // textAlign={"center"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              gap={1}
              alignItems={"flex-start"}
              ml={1}
            >
              <span style={{ color: "#FFFFFF", fontSize: "14px" }}>Title</span>
              <p style={{ color: "#FFFFFF", fontSize: "14px", opacity: "50%" }}>
                Lorem ipsum dolor sit amet consectetur. Suspendisse fames.
              </p>
              <Box display={"flex"}>
                <Box
                  width={"103px"}
                  height={"18px"}
                  bgcolor={"#7373A6"}
                  color={"#FFFFFF"}
                  fontSize={"14px"}
                  textAlign={"center"}
                >
                  pepecoin.day
                </Box>
                <Box
                  width={"74px"}
                  height={"18px"}
                  color={"#FFFFFF"}
                  fontSize={"14px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={1}
                >
                  <img
                    src={pepeCoinIcon}
                    width={"18px"}
                    height={"18px"}
                    alt="pepecoin icon picture"
                  />{" "}
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    0x0000
                  </span>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            width={"298px"}
            height={"102px"}
            display={"flex"}
            // flexDirection={"column"}
            alignItems={"center"}
            // justifyContent={"space-around"}
          >
            <Box
              width={"77px"}
              height={"77px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              border={"3px solid #03A100"}
              borderRadius={"50%"}
            >
              <img
                src={pepeCoinIcon}
                width={"61px"}
                height={"61px"}
                alt="pepecoin icon picture"
              />
            </Box>
            <Box
              width={"185px"}
              height={"78px"}
              // textAlign={"center"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
              gap={1}
              alignItems={"flex-start"}
              ml={1}
            >
              <span style={{ color: "#FFFFFF", fontSize: "14px" }}>Title</span>
              <p style={{ color: "#FFFFFF", fontSize: "14px", opacity: "50%" }}>
                Lorem ipsum dolor sit amet consectetur. Suspendisse fames.
              </p>
              <Box display={"flex"}>
                <Box
                  width={"103px"}
                  height={"18px"}
                  bgcolor={"#7373A6"}
                  color={"#FFFFFF"}
                  fontSize={"14px"}
                  textAlign={"center"}
                >
                  pepecoin.day
                </Box>
                <Box
                  width={"74px"}
                  height={"18px"}
                  color={"#FFFFFF"}
                  fontSize={"14px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={1}
                >
                  <img
                    src={pepeCoinIcon}
                    width={"18px"}
                    height={"18px"}
                    alt="pepecoin icon picture"
                  />{" "}
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    0x0000
                  </span>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            mt={2.5}
            width={"102px"}
            onClick={() => {
              setCurrentFileRendering("file");
              setOpen(true);
            }}
            height={"74px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
          >
            <img
              src={defaultFileIcon}
              alt="Default File Icon"
              width={"32px"}
              height={"32px"}
            />
            <Box
              width={"86px"}
              height={"18px"}
              bgcolor={"#7373A6"}
              textAlign={"center"}
              color={"whitesmoke"}
            >
              {" "}
              File
            </Box>
          </Box>
        </Box> */}
      </Box>
      {/* modal code is here */}
      <div>
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {currentFileRendering === "file" ? (
            <File closeFromChild={setOpen} />
          ) : currentFileRendering === "startNewCoin" ? (
            <StartNewCoin closeFromChild={setOpen} />
          ) : currentFileRendering === "takeOver" ? (
            <Takeover closeFromChild={setOpen} />
          ) : currentFileRendering === "wallet" ? (
            <Wallet closeFromChild={setOpen} />
          ) : currentFileRendering === "message" ? (
            <CoinMessagesArea closeFromChild={setOpen} />
          ) : currentFileRendering === "pepeCoin_Day_Open" ? (
            <PepeCoin_Day closeFromChild={setOpen} />
          ) : (
            <Box>Another Component</Box>
          )}
        </Modal>
      </div>
    </>
  );
}
