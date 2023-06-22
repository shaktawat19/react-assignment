import "../../App.scss";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then((res) => res.json())
      .then((data) => setApiData(data.products));
  }, []);

  console.log(apiData);

  return (
    <>
      <h3 className="chart-heading">Smartphones</h3>
      <ResponsiveContainer width="100%" aspect={5}>
        <LineChart
          data={apiData}
          width={500}
          height={300}
          margin={{ top: 0, right: 10, left: 0, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="brand" //
            interval={"preserveStartEnd"}
            tickFormatter={(value) => value}
          />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="rating" //
            stroke="red"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="discountPercentage"
            stroke="green"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chart;
