import { Box, Button } from "@mui/material";

import { CoinBuy } from "./CoinBuy";

import { CoinSell } from "./CoinSell";

import { CoinThread } from "./CoinThread";
import { CoinChart } from "./CoinChart";
import { useState } from "react";

import { CoinInfo } from "./CoinInfo";

import { CoinTxs } from "./CoinTxs";

export const CoinDetail_Header = () => {
  const [renderingDetail, setRenderingDetail] = useState("info");
  return (
    <>
      <Box padding={"24px"} border={"1px solid #0000"}>
        <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
          <Box>
            {/* info */}
            <Button
              onClick={() => {
                setRenderingDetail("info");
              }}
              sx={{
                // clipPath: "polygon(16% 22%, 87% 21%, 100% 100%, 0 100%)",
                clipPath: "polygon(18% 14%, 87% 14%, 100% 100%, 0 100%)",
                width: "80px",
                height: "30px",
                textTransform: "lowercase",
                color: `${renderingDetail === "info" ? "whitesmoke" : "black"}`,
                bgcolor: `${
                  renderingDetail === "info" ? "#363636" : "#EEEEEE"
                }`,
                ":hover": { bgcolor: "#363636", color: "whitesmoke" },
                // borderTopRightRadius: "10px",
                // borderTopLeftRadius: "25px",
                // borderBottomLeftRadius: "",
                // borderBottomRightRadius: "",

                border: "1px solid #000000",

                fontSize: "15px",
                fontFamily: "Perfect_DOSVGA",
                fontWeight: 400,
              }}
            >
              info
            </Button>
            {/* buy */}
            <Button
              onClick={() => {
                setRenderingDetail("coinBuy");
              }}
              sx={{
                clipPath: "polygon(18% 14%, 87% 14%, 100% 100%, 0 100%)",
                width: "50px",
                height: "30px",
                textTransform: "lowercase",
                color: `${
                  renderingDetail === "coinBuy" ? "whitesmoke" : "black"
                }`,
                bgcolor: `${
                  renderingDetail === "coinBuy" ? "#363636" : "#EEEEEE"
                }`,
                ":hover": { bgcolor: "#363636", color: "whitesmoke" },
                borderTopRightRadius: "1rem",
                borderTopLeftRadius: "1rem",
                border: "1px solid #000000",
                fontSize: "15px",
                fontFamily: "Perfect_DOSVGA",
                fontWeight: 400,
              }}
            >
              buy
            </Button>
            {/* sell */}
            <Button
              onClick={() => {
                setRenderingDetail("coinSell");
              }}
              sx={{
                clipPath: "polygon(18% 14%, 87% 14%, 100% 100%, 0 100%)",
                width: "50px",
                height: "30px",
                color: `${
                  renderingDetail === "coinSell" ? "whitesmoke" : "black"
                }`,
                bgcolor: `${
                  renderingDetail === "coinSell" ? "#363636" : "#EEEEEE"
                }`,
                textTransform: "lowercase",
                ":hover": { bgcolor: "#363636", color: "whitesmoke" },
                borderTopRightRadius: "1rem",
                borderTopLeftRadius: "1rem",
                border: "1px solid #000000",
                fontSize: "15px",
                fontFamily: "Perfect_DOSVGA",
                fontWeight: 400,
              }}
            >
              sell
            </Button>
            {/* chart */}
            <Button
              onClick={() => {
                setRenderingDetail("coinChart");
              }}
              sx={{
                clipPath: "polygon(18% 14%, 87% 14%, 100% 100%, 0 100%)",
                width: "80px",
                height: "30px",
                color: `${
                  renderingDetail === "coinChart" ? "whitesmoke" : "black"
                }`,
                bgcolor: `${
                  renderingDetail === "coinChart" ? "#363636" : "#EEEEEE"
                }`,
                textTransform: "lowercase",
                ":hover": { bgcolor: "#363636", color: "whitesmoke" },
                borderTopRightRadius: "1rem",
                borderTopLeftRadius: "1rem",
                border: "1px solid #000000",
                fontSize: "15px",
                fontFamily: "Perfect_DOSVGA",
                fontWeight: 400,
              }}
            >
              chart
            </Button>
            {/* thread */}
            <Button
              onClick={() => {
                setRenderingDetail("coinThread");
              }}
              sx={{
                clipPath: "polygon(18% 14%, 87% 14%, 100% 100%, 0 100%)",
                width: "120px",
                height: "30px",
                color: `${
                  renderingDetail === "coinThread" ? "whitesmoke" : "black"
                }`,
                bgcolor: `${
                  renderingDetail === "coinThread" ? "#363636" : "#EEEEEE"
                }`,
                textTransform: "lowercase",
                ":hover": { bgcolor: "#363636", color: "whitesmoke" },
                borderTopRightRadius: "1rem",
                borderTopLeftRadius: "1rem",
                border: "1px solid #000000",
                fontSize: "15px",
                fontFamily: "Perfect_DOSVGA",
                fontWeight: 400,
              }}
            >
              thread
            </Button>
            {/* txs */}
            <Button
              onClick={() => {
                setRenderingDetail("coinTxs");
              }}
              sx={{
                clipPath: "polygon(18% 14%, 87% 14%, 100% 100%, 0 100%)",
                width: "80px",
                height: "30px",
                color: `${
                  renderingDetail === "coinTxs" ? "whitesmoke" : "black"
                }`,
                bgcolor: `${
                  renderingDetail === "coinTxs" ? "#363636" : "#EEEEEE"
                }`,
                textTransform: "lowercase",
                ":hover": { bgcolor: "#363636", color: "whitesmoke" },
                borderTopRightRadius: "1rem",
                borderTopLeftRadius: "1rem",
                border: "1px solid #000000",
                fontSize: "15px",
                fontFamily: "Perfect_DOSVGA",
                fontWeight: 400,
              }}
            >
              txs
            </Button>
            <Box>
              {renderingDetail === "info" ? (
                <CoinInfo />
              ) : renderingDetail === "coinBuy" ? (
                <CoinBuy />
              ) : renderingDetail === "coinSell" ? (
                <CoinSell />
              ) : renderingDetail === "coinTxs" ? (
                <CoinTxs />
              ) : renderingDetail === "coinThread" ? (
                <CoinThread />
              ) : renderingDetail === "coinChart" ? (
                <CoinChart />
              ) : (
                <h2>Not Found!</h2>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
