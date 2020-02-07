import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default class Wykres extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

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
          {console.log(this.props.dane)}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend stroke="#C8E40F" formatter={this.renderColorfulLegendText} />
          {this.props.wyswietlaneAlgorytmy[2] && (
            <Line
              type="monotone"
              dataKey={this.props.jakieAlgorytmy[2]}
              stroke="#C8E40F"
              activeDot={{ r: 8 }}
            />
          )}
        </LineChart>
      </div>
    );
  }
}
