/* eslint-disable no-unused-vars */
import { ArrowDropDown } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import custumdate from "../assets/images/custumdate.png";
import Chart from "react-apexcharts";

export const CoinChart = () => {
  const chartsData = [
    {
      name: "PepeCoin",
      data: [
        12280.0, 12590.0, 13300.0, 14310.0, 13320.0, 13330.0, 12340.0, 14350.0,
        12160.0, 14370.0, 13380.0, 14390.0, 12400.0, 12410.0, 14420.0, 13416.12,
        12440.0, 15450.0, 15460.0,
      ],
    },

    // Add more data series as needed
  ];

  const chartOption = {
    chart: {
      height: 300,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      // curve: "straight",
      // curve: "stepline",
      curve: "smooth",
      colors: ["#4747FA"],
      width: 2,
    },
    xaxis: {
      xaxis: {
        type: "datetime",
      },

      labels: {
        show: true,
      },
      // title: { text: "X-axis TITLE" },
      categories: [
        8,
        "",
        "6.00",

        "",
        "12:00",
        "",
        "18:00",
        "",
        9,
        "",
        "06:00",
        "",
        "12:00",
        "",
        "18:00",
        "",
        10,
        "06:00",
        "12:00",
        "18:00",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },

    grid: {
      show: true,
      borderColor: "#e0e0e0",
      // strokeDashArray: 0,
      position: "back",
      yaxis: {
        lines: {
          show: true,
        },
      },
    },

    yaxis: {
      labels: {
        show: true,
      },
      opposite: true,
      // reversed: true,
    },
  };

  return (
    <Box minHeight={"400px"} border={"1px solid black"} padding={"1rem"}>
      <Box
        width={"100%"}
        display={"flex"}
        height={"20px"}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        <Typography fontSize={"10px"}>USD</Typography>
        <ArrowDropDown />
      </Box>
      <Chart
        options={chartOption}
        series={chartsData}
        type="line"
        height={"100%"}
        width={"100%"}
        style={{ overflow: "visible" }}
        // className="right-y-axis-labels"
      />
      <Box width={"100%"} display={"flex"}>
        <Box
          width={"80%"}
          height={"31px"}
          display={"flex"}
          alignItems={"center"}
          gap={1}
        >
          <Typography fontSize={"12px"} fontWeight={400}>
            1D
          </Typography>
          <Typography fontSize={"12px"} fontWeight={400}>
            5D
          </Typography>
          <Typography fontSize={"12px"} fontWeight={400}>
            1M
          </Typography>
          <Typography fontSize={"12px"} fontWeight={400}>
            3M
          </Typography>
          <Typography fontSize={"12px"} fontWeight={400}>
            6M
          </Typography>
          <Typography fontSize={"12px"} fontWeight={400}>
            YTD
          </Typography>
          <Typography fontSize={"12px"} fontWeight={400}>
            1Y
          </Typography>
          <Typography fontSize={"12px"} fontWeight={400}>
            5Y
          </Typography>
          <Typography fontSize={"12px"} fontWeight={400}>
            All
          </Typography>
          <Box bgcolor={"#E8E8E8"} height={"17px"} width={"1px"}></Box>
          <img
            src={custumdate}
            alt="Calender Icon"
            width={"18px"}
            height={"18px"}
          />
        </Box>
        <Box
          width={"20%"}
          height={"31px"}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gap={1}
        >
          <Typography fontSize={"12px"} fontWeight={400}>
            09:27:02 (UTC)&nbsp; % &nbsp;log
          </Typography>
          <Typography fontSize={"12px"} color={"#2E60FF"} fontWeight={400}>
            auto
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
