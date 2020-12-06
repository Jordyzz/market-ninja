import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

import styles from "./StockPreview.scss";
import { useSelector } from "@redux/useSelector";
import { selectedService } from "@pages/MainPage/SelectedService";

const StockPreview = () => {
  const [data, setData] = useState<Array<any>>([]);
  const selectedItems = useSelector((state) => state.selectedItems);
  console.log(selectedItems, data);

  useEffect(() => {
    let stock;
    if (selectedItems.length === data.length) return;
    if (selectedItems.length === 0) {
      setData([]);
      return;
    }

    if (selectedItems.length > data.length) {
      stock = selectedItems.find(
        (item) => !data?.map((series) => series.name).includes(item.symbol)
      );
      console.log("stock added", stock.symbol);
      selectedService.getSelectedItemHistory(stock.symbol).then((res) => {
        setData((prevState) => [
          ...prevState,
          {
            name: stock.symbol,
            data: res.map((d) => [
              new Date(d.date).getTime(),
              parseFloat(d.close),
            ]),
          },
        ]);
        selectedService.updatePriceInfo(stock.symbol, res[0]);
      });
    } else {
      setData((prevState) =>
        prevState.filter((series) =>
          selectedItems.find((item) => item.symbol === series.name)
        )
      );
      console.log("stock removed");
    }
  }, [selectedItems]);

  if (!selectedItems.length || !data.length) return null;

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
    legend: {
      fontFamily: "Rubik",
      labels: {
        colors: "var(--fontSecondaryColor)",
      },
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
      tooltip: {
        enabled: false,
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
    colors: ["#c6a1f3", "#F94144", "#F3722C", "#F9C74F", "#90BE6D", "#43AA8B"],
    grid: {
      borderColor: "var(--fontSecondaryColor)",
    },
    fill: {
      colors: [
        "#c6a1f3",
        "#F94144",
        "#F3722C",
        "#F9C74F",
        "#90BE6D",
        "#43AA8B",
      ],
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

  return (
    <div className={styles.wrapper}>
      <Chart options={options} series={data} type="area" height={"100%"} />
    </div>
  );
};

export default StockPreview;
