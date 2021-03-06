import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from "recharts";

export default class Wykres extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";
  kolorki = [
    "#fff200",
    "#ff0000",
    "#00ff15",
    "#ff00ea",
    "#211aec",
    "#ec6f10",
    "#334567",
  ];
  mapping = {
    quickSort: "sortowanie szybkie",
    heapSort: "sortowanie przez kopcowanie",
    mergeSort: "sortowanie przez scalanie",
    countingSort: "sortowanie przez zliczanie",
    insertionSort: "sortowanie przez wstawianie",
    bubbleSort: "sortowanie bąbelkowe",
    selectionSort: "sortowanie przez wybór",
    iloscElementowSortoweanejTAblicy: "liczba elementów",
  };
  x = [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2];

  renderColorfulLegendText(value, entry) {
    const { color } = entry;
    return <span style={{ color }}> {value} </span>;
  }

  render() {
    console.log(this.props.dane);
    let dane = [];
    this.props.dane.forEach((element) => {
      let el = {};
      el["sortowanie szybkie"] = element["quickSort"];
      el["sortowanie przez kopcowanie"] = element["heapSort"];
      el["sortowanie przez scalanie"] = element["mergeSort"];
      el["sortowanie przez zliczanie"] = element["countingSort"];
      el["sortowanie przez wstawianie"] = element["insertionSort"];
      el["sortowanie bąbelkowe"] = element["bubbleSort"];
      el["sortowanie przez wybór"] = element["selectionSort"];
      el["liczba elementów"] = element["iloscElementowSortoweanejTAblicy"];
      dane.push(el);
    });
    let osY = (
      <YAxis>
        <Label
          value="czas sortowania [ms]"
          offset={0}
          position="left"
          angle={-90}
          fill={"white"}
        />
      </YAxis>
    );
    if (this.props.czyPamiec === "true") {
      osY = (
        <YAxis>
          <Label
            value="ilość pamięci  [byte]"
            offset={0}
            position="left"
            angle={-90}
            fill={"white"}
          />
        </YAxis>
      );
    }
    return (
      <div>
        <LineChart
          width={this.props.szerokoscWykresu}
          height={this.props.wysokoscWykresu}
          data={dane}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="liczba elementów">
            <Label
              value="liczba elementów"
              offset={0}
              position="insideBottom"
              fill={"white"}
            />
          </XAxis>
          {osY}
          <Tooltip />
          <Legend stroke="#000000" formatter={this.renderColorfulLegendText} />
          {this.props.wyswietlaneAlgorytmy.map((el, index, array) => {
            if (el) {
              return (
                <Line
                  type="monotone"
                  dataKey={this.mapping[this.props.jakieAlgorytmy[index]]}
                  label={this.x[index]}
                  stroke={this.kolorki[index]}
                  activeDot={{ r: 8 }}
                  key={index}
                />
              );
            } else {
              return null;
            }
          })}
        </LineChart>
      </div>
    );
  }
}
