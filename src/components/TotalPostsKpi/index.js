import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import KpiContext from "../../contexts/KpiContext";

import "./index.css";

const TotalPostsKpi = () => {
  return (
    <KpiContext.Consumer>
      {(value) => {
        const { postsData, totalPosts } = value;
        return (
          <div>
            <div>
              <h1 className="kpi-heading">Posts published each day</h1>
              <BarChart width={450} height={250} data={postsData}>
                <Bar fill="#13cfc5" type="monotone" dataKey="postsPublished" />
                <XAxis dataKey="day" />
                <YAxis dataKey="postsPublished" />
                <Tooltip />
              </BarChart>
            </div>
            <div className="mini-kpi-container">
              <div className="mini-kpi">
                <p>Active Posts</p>
                <h1>{postsData[postsData.length - 1].postsPublished}</h1>
              </div>
              <div className="mini-kpi">
                <p>Total Posts</p>
                <h1>{totalPosts}</h1>
              </div>
            </div>
          </div>
        );
      }}
    </KpiContext.Consumer>
  );
};

export default TotalPostsKpi;
