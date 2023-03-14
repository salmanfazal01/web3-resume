// TradingViewWidget.jsx

import { Box, useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import CustomPaper from "../components/CustomPaper.jsx";

let tvScriptLoadingPromise;

const TvChartSection = () => {
  const theme = useTheme();
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_8032b") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          height: "100%",
          symbol: "Binance:BTCUSD",
          interval: "1",
          // theme: "dark",
          style: "3",
          locale: "en",
          hide_top_toolbar: true,
          container_id: "tradingview_8032b",
          disabled_features: [
            "use_localstorage_for_settings",
            "create_volume_indicator_by_default",
          ],
          overrides: {
            "paneProperties.background": theme.palette.background.paper,
            "scalesProperties.textColor": theme.palette.text.primary,
            "paneProperties.vertGridProperties.color": "rgba(250,0,0,0)",
            "paneProperties.horzGridProperties.color": "rgba(0,0,0,0)",
            // "mainSeriesProperties.areaStyle.color1": theme.palette.primary.main, // DOES NOT WORK
            "mainSeriesProperties.areaStyle.color2": theme.palette.primary.main,
            "mainSeriesProperties.areaStyle.linecolor":
              theme.palette.primary.main,
          },
        });
      }
    }
  }, []);

  return (
    <CustomPaper sx={{ height: 400, position: "relative" }}>
      <div className="tradingview-widget-container">
        <div id="tradingview_8032b" />
      </div>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          border: `5px solid ${theme.palette.background.paper}`,
          m: 3,
        }}
      ></Box>
    </CustomPaper>
  );
};

export default TvChartSection;
