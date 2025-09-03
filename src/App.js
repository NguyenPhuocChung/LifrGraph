import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from "recharts";

const data = [
  { age: 5, event: "Tuổi thơ gặp khó khăn", happiness: -20 },
  { age: 7, event: "Vào lớp 1, môi trường bỡ ngỡ", happiness: -80 },
  { age: 9, event: "Kiên trì tập đá cầu", happiness: 70 },
  { age: 10, event: "Quên giờ thi", happiness: -100 },
  { age: 10, event: "Thi lại và đậu", happiness: 100 },
  { age: 11, event: "Môi trường lớp mới và áp lực học tập", happiness: -35 },
  { age: 14, event: "Có bạn gái", happiness: 40 },
  { age: 15, event: "Lớp mới, bạn mới", happiness: 50 },
  { age: 15, event: "Tham gia văn nghệ, giải nhì", happiness: 80 },
  { age: 15, event: "Học lớp chọn trong trường", happiness: 100 },
  { age: 15, event: "Ít giao tiếp bạn bè", happiness: -20 },
  { age: 16, event: "Được làm phó học tập", happiness: 90 },
  { age: 16, event: "Được thưởng tiền hoa điểm điểm 10", happiness: 100 },

  { age: 18, event: "Học lớp chọn khối tự nhiên", happiness: 80 },
  { age: 18, event: "Thi tin học được 10 điểm", happiness: 60 },
  { age: 18, event: "Không chụp kỷ yếu cuối năm", happiness: -20 },
  { age: 19, event: "Lên đại học", happiness: 90 },
  { age: 19, event: "Áp lực học tập, môi trường tiếng Anh", happiness: -70 },
  { age: 19, event: "Tự học và nói được tiếng Anh cơ bản", happiness: 80 },
  { age: 21, event: "Covid, thuyết trình áp lực", happiness: -100 },
  { age: 22, event: "Tự tin thuyết trình và học lập trình", happiness: 90 },
  { age: 22, event: "Tham gia Business Challenge", happiness: 70 },
  { age: 22, event: "Được đầu tư 2 triệu làm app AI", happiness: 80 },
  { age: 22, event: "Được giải 500k và kết bạn mới", happiness: 50 },
  { age: 22, event: "Leader team Thực tập tại UTA Solution", happiness: 60 },
  { age: 23, event: "Làm leader tốt nghiệp", happiness: 80 },
  { age: 23, event: "Áp lực deadline", happiness: -10 },
  { age: 23, event: "Báo cáo tốt nghiệp thành công", happiness: 100 },
]


const LifeGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={data} margin={{ top: 50, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <ReferenceLine y={0} stroke="black" strokeDasharray="3 3" />
        <XAxis dataKey="age" label={{ value: "Tuổi", position: "insideBottomRight", offset: 0 }} />
        <YAxis label={{ value: "Hạnh phúc", angle: -90, position: "insideLeft" }} domain={[-120, 120]} />
        <Tooltip 
          formatter={(value) => [`${value}`, 'Happiness']} 
          labelFormatter={(label, payload) => `Tuổi: ${label}, Sự kiện: ${payload[0].payload.event}`}
        />
        <Line
          type="monotone"
          dataKey="happiness"
          stroke="#8884d8"
          strokeWidth={2}
          dot={(props) => {
            const { cx, cy, payload } = props;
            const color = payload.happiness >= 0 ? "green" : "red";
            return (
              <g>
                <circle cx={cx} cy={cy} r={5} fill={color} stroke="black" />
                <text x={cx} y={cy - 10} textAnchor="middle" fontSize={12} fill="#333">
                  {payload.event}
                </text>
              </g>
            );
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LifeGraph;
