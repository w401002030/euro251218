import React from "react";
import { motion } from "framer-motion";
import { statsData } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
export function StatsTicker() {
  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            实时数据更新
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-sm bg-background/50 backdrop-blur-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 mb-4">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-widest mt-1">
                      {stat.label}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}