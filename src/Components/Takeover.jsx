/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import mac_Comp from "../assets/images/Happy_Mac.png";
import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
export default function Takeover(props) {
 
    const style = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '43%',
        bgcolor: '#FFFFFF',
        border: 'none',
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
                <Box width={"2%"} >

                    <Box onClick={() => { props.closeFromChild(false) }} sx={{ border: "1px outset #808080", width: "13px", height: "13px", cursor: 'pointer' }}>
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

                <Box width={"33%"} height={"13px"} bgcolor={"#CCCCCC"} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} >
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
                            src={mac_Comp}
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
                            {"takeover"}
                        </Typography>
                    </Box>
                </Box>

                <Box width={"33%"} height={"13px"} bgcolor={"#CCCCCC"} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} >
                    <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
                    <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
                    <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
                    <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
                    <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
                    <Box width={"100%"} height={"1px"} bgcolor={"#999999"}></Box>
                </Box>
            </Box>
            <Box width={"100%"} height={"55vh"} sx={{
                overflow: 'auto',
                //                      //       // for scrollbar styling
                '&::-webkit-scrollbar': {
                    width: '15px', /* Width of the scrollbar */
                },
                '&::-webkit-scrollbar-track': {
                    background: '#AAAAAA', /* Color of the scrollbar track */
                },
                '&::-webkit-scrollbar-thumb': {
                    background: '#9999FF', /* Color of the scrollbar thumb */
                    borderRadius: '5px', /* Rounded corners for the thumb */
                    boxShadow: '-2px -1px 1px 0px #4C4C99 inset;'
                },
                //     '&::-webkit-scrollbar-thumb:hover': {
                //       background: '#555', /* Color of the thumb on hover */
                //     },
            }} >
                <Box mt={1} ml={2} fontSize={"14px"} width={"160.6px"} height={"16px"} display={"flex"} alignItems={"center"} fontWeight={400}>C:<ArrowRight /> inbox</Box>
                <Box mt={1} ml={5} fontSize={"14px"} width={"279.6px"} height={"16px"} display={"flex"} alignItems={"center"} fontWeight={400}>  <span style={{ color: 'red' }}>std:</span> :string generate_takeover()</Box>
                <Box width={"500px"} height={"199px"} margin={"auto"} mt={1} border={"1px solid #CECECE"}>


                    <Box width={"100%"} height={"40px"} display={"flex"} alignItems={"center"} justifyContent={"center"} borderBottom={"1px solid #CECECE"}>
                        <Box width={"28%"}><span style={{ color: '#0029FF', fontSize: '16px', fontWeight: 400 }}>Enter a ticker:</span></Box>
                        <Box width={"60%"} height={"38px"}><input name="ticker" type="text" style={{ height: '38px', textAlign: 'left', width: '98%', outline: 'none', border: 'none', }} placeholder="..."></input></Box>
                    </Box>
                    <Box width={"100%"} height={"119px"} display={"flex"} alignItems={"flex-start"} justifyContent={"center"} borderBottom={"1px solid #CECECE"}>
                        <Box width={"50%"}  marginLeft={"2%"}><span style={{lineHeight:'30px',color: '#0029FF', fontSize: '16px', fontWeight: 400 }}>Enter takeover description:</span></Box>
                        <Box width={"40%"} height={"38px"}><textarea  name="description" type="text" style={{ marginTop:"2%",height: '113px', textAlign: 'left', width: '100%', outline: 'none', border: 'none' }} placeholder="..."></textarea></Box>
                    </Box>
                    <Box  width={"90%"} height={"40px"}  display={"flex"} marginLeft={"6%"} alignItems={"center"}>

                    <span style={{fontSize:'16px', fontWeight:400,color:'#0029FF'}}>Choose day</span>
                    <ArrowDropDown sx={{fontSize:'32px'}}/>
                </Box>


                </Box>
             

                <Box marginLeft={"7%"} marginTop={"1%"} width={"290px"} height={"45px"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={2}>
                <button style={{ width: '139px', height: '40px', backgroundColor: '#EEEEEE', border: '1px solid #000000', borderRadius: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily:'Perfect_DOSVGA',fontWeight:400,fontSize:'16px'  }}>Submit Coin       
                                </button>
                                <Box width={"135px"} height={"36px"} display={"flex"} flexDirection={"column"} gap={0.5}>
                    <span style={{fontSize:'16px', fontWeight:400,opacity:'20%'}}>Cost to deploy:</span>
                    <span style={{fontSize:'16px', fontWeight:400}}>0.1 ETH</span>

                                </Box>
                </Box>
            </Box>




        </Box>
    )
}
