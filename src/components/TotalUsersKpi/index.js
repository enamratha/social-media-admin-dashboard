import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import KpiContext from "../../contexts/KpiContext";

import "./index.css";

const TotalUsersKpi = () => (
  <KpiContext.Consumer>
    {(value) => {
      const { userData, totalUsers, activeUsers } = value;
      return (
        <div>
          <h1 className="kpi-heading">Total Users</h1>
          <div>
            <LineChart width={450} height={250} data={userData}>
              <Line type="monotone" dataKey="totalUsers" stroke="#097570" />
              <XAxis dataKey="day" />
              <YAxis dataKey="totalUsers" />
              <Tooltip />
            </LineChart>
          </div>
          <div className="mini-kpi-container">
            <div className="mini-kpi">
              <p>Total Users</p>
              <h1>{totalUsers}</h1>
            </div>
            <div className="mini-kpi">
              <p>Active Users</p>
              <h1>{activeUsers}</h1>
            </div>
          </div>
        </div>
      );
    }}
  </KpiContext.Consumer>
);

export default TotalUsersKpi;
