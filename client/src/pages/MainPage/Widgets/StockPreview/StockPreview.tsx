import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import styles from "./StockPreview.scss";
import { useSelector } from "@redux/useSelector";
import { selectedService } from "@pages/MainPage/SelectedService";

const StockPreview = () => {
  const [data, setData] = useState(null);
  const symbol = useSelector((state) => state.selectedItem.symbol);
  useEffect(() => {
    symbol &&
      selectedService.getSelectedItemHistory().then((res) => {
        console.log(res);
        setData(
          res.map((d) => [new Date(d.date).getTime(), parseFloat(d.close)])
        );
      });
  }, [symbol]);

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },

    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: "hollow",
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
      labels: {
        style: {
          colors: "var(--fontSecondaryColor)",
          fontFamily: "Rubik",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "var(--fontSecondaryColor)",
          fontFamily: "Rubik",
        },
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
      style: {
        colors: "#c1bbef",
      },
    },
    colors: ["#c6a1f3"],
    grid: {
      borderColor: "var(--fontSecondaryColor)",
    },
    fill: {
      colors: ["#c1bbef", "transparent"],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    stroke: {
      width: 1,
    },
  };

  if (!data) return null;

  return (
    <div className={styles.wrapper}>
      <Chart
        options={options}
        series={[{ data }]}
        type="area"
        height={"100%"}
      />
    </div>
  );
};

export default StockPreview;
