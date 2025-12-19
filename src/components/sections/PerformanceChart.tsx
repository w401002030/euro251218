import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { performanceData } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
export function PerformanceChart() {
  return (
    <section
      id="performance"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              资金增长曲线
            </h2>
            <div className="flex flex-col items-center mx-auto max-w-2xl mt-4">
              <p className="text-xl md:text-2xl font-semibold text-foreground text-center">
                查看我们的EA策略从小资金开启的稳定增长曲线。
              </p>
              <p className="mt-2 text-xl md:text-2xl font-bold text-golden-glow">
                并感受复利带来的魅力
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Button
                size="lg"
                onClick={() => window.open('https://www.myfxbook.com/zh/members/RobotForexProEA/eurostable-ea-lite/10995603', '_blank')}
                className="w-full max-w-md mx-auto bg-emerald-500 hover:bg-emerald-600 text-white text-lg md:text-xl px-10 py-6 lg:py-8 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                查看实盘业绩
              </Button>
            </div>
          </div>
          <Card className="shadow-xl dark:shadow-emerald-500/10 overflow-hidden border-2 border-emerald-500/20">
            <CardHeader>
              <CardTitle>资金增长曲线 (美元)</CardTitle>
            </CardHeader>
            <CardContent className="p-0 pt-4">
              <div className="h-[400px] md:h-[500px] w-full min-h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={performanceData}
                    margin={{
                      top: 10,
                      right: 20,
                      left: 70, // Increased to 70 for 6-figure value visibility ($113,580)
                      bottom: 10,
                    }}
                  >
                    <defs>
                      <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#10B981"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#10B981"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      vertical={false}
                      strokeDasharray="3 3"
                      stroke="hsl(var(--muted))"
                    />
                    <XAxis
                      dataKey="name"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={12}
                      fontSize={12}
                      interval="preserveStartEnd"
                      minTickGap={60}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tickMargin={12}
                      fontSize={11}
                      domain={[0, 'auto']}
                      tickFormatter={(value) => `${value.toLocaleString()}`}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      }}
                      formatter={(value: number) => [`${value.toLocaleString()}`, "账户余额"]}
                      cursor={{ stroke: 'hsl(var(--foreground))', strokeWidth: 1, strokeDasharray: '3 3' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="profit"
                      stroke="#10B981"
                      strokeWidth={3}
                      fill="url(#profitFill)"
                      animationDuration={2500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}