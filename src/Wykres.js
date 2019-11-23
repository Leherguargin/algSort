import React, { PureComponent } from "react";
import dane from "./dane";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

//const data = dane.dane_do_wykresu; //dane z jsona z serwera

export default class Wykres extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
      <div>
        {console.log(this.props.dane)}
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

          <Legend />
          <Line
            type="monotone"
            dataKey="bubble_sort_time"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="p" stroke="#82ca9d" /> */}
        </LineChart>
      </div>
    );
  }
}
