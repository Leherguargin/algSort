import React, { PureComponent } from "react";
// import dane from "./dane";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

//const data = dane.dane_do_wykresu; //dane z jsona z pliku

export default class Wykres extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  constructor(props) {
    super(props);
    this.psumaCzasow = this.psumaCzasow.bind(this);
    //this.renderColorfulLegendText = this.renderColorfulLegendText.bind(this);
  }

  psumaCzasow(dane) {
    let sumaCzasow = 0;
    dane.forEach(element => {
      sumaCzasow += element.bubble_sort_time;
    });
    return sumaCzasow / 1000;
  }

  renderColorfulLegendText(value, entry) {
    const { color } = entry;

    return <span style={{ color }}>{value}</span>;
  }

  render() {
    return (
      <div>
        <LineChart
          width={this.props.szerokoscWykresu}
          height={this.props.wysokoscWykresu}
          data={this.props.dane}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend stroke="#C8E40F" formatter={this.renderColorfulLegendText} />
          <Line
            type="monotone"
            dataKey="bubble_sort_time"
            stroke="#C8E40F"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="bubble_with_flag"
            stroke="#F3040F"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="merge_sort_time" stroke="#82ca9d" /> */}
        </LineChart>
        <p className="text-white">
          suma czasu: {this.psumaCzasow(this.props.dane)} s
        </p>
      </div>
    );
  }
}
