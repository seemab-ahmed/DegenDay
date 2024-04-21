/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import pencilInHand from "../assets/images/Script_editor.png";
import notepad from '../assets/images/Notepad.png';
import iTunes from "../assets/images/iTunes.png";
import twoFacesIcon from "../assets/images/file-sharing.png";
import purpleFileIcon from "../assets/images/DefaultFile.png";
import keyWithPages from "../assets/images/AppleFilesecurity.png";
import mac_Comp from "../assets/images/Happy_Mac.png";
function SideBar(props) {
  return (
    <>
      <Box
      
      borderLeft={"1px solid #FFFFFF26"}
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        sx={{flexDirection:{ xs:'row',sm:'row',md:'column',lg:'column',xl:'column'},flexWrap:{xs:'wrap',sm:'wrap',md:'nowrap',lg:'',xl:''}}}
        // flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >

        <Box
        // sx={{cursor:'pointer','&:hover':{border:'1px solid red'}}}
        sx={{cursor:'pointer'}}
        onClick={()=>{props.setRenderFromSidebar("startNewCoin"); props.setModalOpenFromSidebar(true)}}
          width={"102px"}
          height={"88px"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <img
            src={pencilInHand}
            alt="Script Editor Icon"
            width={"32px"}
            height={"32px"}
          />
          <Box
            width={"86px"}
            bgcolor={"#7373A6"}
            color={"#FFFFFF"}
            fontSize={"14px"}
            textAlign={"center"}
            fontWeight={400}
          >
            Start a new coin
          </Box>
        </Box>



        <Box
          sx={{cursor:'pointer'}}
          onClick={()=>{props.setRenderFromSidebar("wallet"); props.setModalOpenFromSidebar(true)}}
          width={"102px"}
          height={"88px"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <img
            src={keyWithPages}
            alt="Script Editor Icon"
            width={"32px"}
            height={"32px"}
          />
          <Box
            width={"86px"}
            bgcolor={"#7373A6"}
            color={"#FFFFFF"}
            fontSize={"14px"}
            textAlign={"center"}
            fontWeight={400}
          >
           wallet.js
          </Box>
        </Box>




        <Box
          width={"102px"}
          height={"88px"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <img
            src={notepad}
            alt="notepad Icon"
            width={"32px"}
            height={"32px"}
          />
          <Box
            width={"86px"}
            bgcolor={"#7373A6"}
            color={"#FFFFFF"}
            fontSize={"14px"}
            textAlign={"center"}
            fontWeight={400}
          >
            how it works.txt
          </Box>
        </Box>


        <Box
          width={"102px"}
          height={"88px"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <img
            src={iTunes}
            alt="itunes  Icon"
            width={"32px"}
            height={"32px"}
          />
          <Box
            width={"86px"}
            bgcolor={"#7373A6"}
            color={"#FFFFFF"}
            fontSize={"14px"}
            textAlign={"center"}
            fontWeight={400}
          >
            radio.app
          </Box>
        </Box>

        <Box
          width={"102px"}
          height={"88px"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <img
            src={purpleFileIcon}
            alt="Default File Icon"
            width={"32px"}
            height={"32px"}
          />
          <Box
            width={"86px"}
            bgcolor={"#7373A6"}
            color={"#FFFFFF"}
            fontSize={"14px"}
            textAlign={"center"}
            fontWeight={400}
          >
            Links
          </Box>
        </Box>

        <Box
          sx={{cursor:'pointer'}}
          onClick={()=>{props.setRenderFromSidebar("message"); props.setModalOpenFromSidebar(true)}}
          width={"102px"}
          height={"88px"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <img
            src={twoFacesIcon}
            alt="Two Faces Icon"
            width={"32px"}
            height={"32px"}
          />
          <Box
            width={"86px"}
            bgcolor={"#7373A6"}
            color={"#FFFFFF"}
            fontSize={"14px"}
            textAlign={"center"}
            fontWeight={400}
          >
           Message Board.php
          </Box>
        </Box>

        <Box
           sx={{cursor:'pointer'}}
           onClick={()=>{props.setRenderFromSidebar("takeOver"); props.setModalOpenFromSidebar(true)}}
          width={"102px"}
          height={"88px"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <img
            src={mac_Comp}
            alt="Mac Computer Icon"
            width={"32px"}
            height={"32px"}
          />
          <Box
            width={"86px"}
            bgcolor={"#7373A6"}
            color={"#FFFFFF"}
            fontSize={"14px"}
            textAlign={"center"}
            fontWeight={400}
          >
           inbox
          </Box>
        </Box>



      </Box>
    </>
  );
}

export default SideBar;
