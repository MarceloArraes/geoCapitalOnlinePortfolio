import { Chart, registerables } from "chart.js";
//import Chart from 'chart.js/auto';

const MONTHS_NUMBER_TO_NAME_MAP = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  0: "Dec",
};

function StockChart(rawData: {
  chart: {
    result: {
      meta: {
        currency: string;
        symbol: string;
        exchangeName: string;
        instrumentType: string;
        firstTradeDate: number;
        regularMarketTime: number;
        gmtoffset: number;
        timezone: string;
        exchangeTimezoneName: string;
        regularMarketPrice: number;
        chartPreviousClose: number;
        priceHint: number;
        currentTradingPeriod: {
          pre: {
            timezone: string;
            start: number;
            end: number;
            gmtoffset: number;
          };
          regular: {
            timezone: string;
            start: number;
            end: number;
            gmtoffset: number;
          };
          post: {
            timezone: string;
            start: number;
            end: number;
            gmtoffset: number;
          };
        };
        dataGranularity: string;
        range: string;
        validRanges: string[];
      };
      timestamp: number[];
      events: {
        dividends: {
          "1619841600": { amount: number; date: number };
          "1627790400": { amount: number; date: number };
          "1635739200": { amount: number; date: number };
          "1643691600": { amount: number; date: number };
        };
      };
      indicators: {
        quote: {
          high: number[];
          low: number[];
          volume: number[];
          open: number[];
          close: number[];
        }[];
        adjclose: { adjclose: number[] }[];
      };
    }[];
    error: any;
  };
}) {
  Chart.register(...registerables);

  var canvas = document.getElementById("chartLine") as HTMLCanvasElement;
  var widthRatio = 1.5;
  canvas.width = canvas.height * widthRatio;

  var timestamp = rawData.chart.result[0].timestamp;

  var months = [];
  timestamp.map((t) => {
    var date = new Date(t * 1000);

    months.push(MONTHS_NUMBER_TO_NAME_MAP[date.getMonth()]);
  });

  const labels = months;
  const data = {
    labels: labels,
    datasets: [
      {
        label: rawData.chart.result[0].meta.symbol,
        backgroundColor: "#e5803d", //#e5803d orange
        borderColor: "#e5803d",
        data: rawData.chart.result[0].indicators.adjclose[0].adjclose,
      },
    ],
  };

  const configLineChart = {
    type: "line",
    data,
    options: {},
  };
  //Here i would call for a new canvas draw..
  /*   window.addEventListener('resize', function (e) {
    console.log('Window Resize...')
    
  }) */

  var chartLine = new Chart(
    document.getElementById("chartLine") as HTMLCanvasElement,
    configLineChart as any
  );
}
export default StockChart;
