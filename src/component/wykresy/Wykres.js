import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default class Wykres extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";
  kolorki = ["#fff200", "#ff0000", "#00ff15", "#ff00ea"];

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
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="iloscElementowSortoweanejTAblicy" />
          <YAxis />
          <Tooltip />
          <Legend stroke="#000000" formatter={this.renderColorfulLegendText} />
          {this.props.wyswietlaneAlgorytmy.map((el, index, array) => {
            if (el) {
              return (
                <Line
                  type="monotone"
                  dataKey={this.props.jakieAlgorytmy[index]}
                  stroke={this.kolorki[index]}
                  activeDot={{ r: 8 }}
                  key={index}
                />
              );
            }
          })}
        </LineChart>
      </div>
    );
  }
}
