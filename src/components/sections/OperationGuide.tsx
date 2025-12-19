import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Download, Settings, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const steps = [
  {
    icon: UserPlus,
    title: "1. 准备账户",
    description: "在受监管的经纪商处开设 MT4 交易账户，建议使用 ECN 低点差账户以获得最佳执行。",
  },
  {
    icon: Download,
    title: "2. 下载软件",
    description: "购买后，您将收到包含 EA 文件、安装手册和预设参数文件的下载链接。",
  },
  {
    icon: Settings,
    title: "3. 加载 EA",
    description: "将 EA 文件放入 MT4 专用目录，加载到指定的货币对图表，并导入我们提供的优化参数。",
  },
  {
    icon: Play,
    title: "4. 开启交易",
    description: "确保 MT4 的“自动交易”按钮已开启。EA 将开始全天候监控市场并自动执行策略。",
  },
];
export function OperationGuide() {
  return (
    <section id="operation" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            操作说明
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            只需简单的四步，即可开启您的自动化交易之旅。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-none bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-4 bg-emerald-500 text-white rounded-full mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}