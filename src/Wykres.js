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

  constructor(props) {
    super(props);
    //this.renderColorfulLegendText = this.renderColorfulLegendText.bind(this);
  }

  renderColorfulLegendText(value, entry) {
    const { color } = entry;

    return <span style={{ color }}>{value}</span>;
  }

  render() {
    let lines;
    this.props.jakieAlgorytmy.map((element, index, arr) => {
      if (this.props.wyswietlaneAlgorytmy[index]) {
        lines += (
          <Line
            type="monotone"
            dataKey={element}
            stroke="#C8E40F" //uzaleznij kolor od indexu moze... xD
            activeDot={{ r: 8 }}
          />
        );
      }
    });
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
          {lines}
        </LineChart>
      </div>
    );
  }
}
