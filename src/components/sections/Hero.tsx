import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-900/95 dark:to-emerald-900/20"
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyMzYgMjUxIDI1NSAvIDAuMDUpIj48cGF0aCBkPSJNMCAuNUgzMS41VjMyIi8+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNSAyMyA0MiAvIDAuMDUpIj48cGF0aCBkPSJNMCAuNUgzMS41VjMyIi8+PC9zdmc+')] opacity-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 text-balance">
            <span className="block">稳定盈利的全自动外汇交易系统</span>
            <span className="block text-emerald-500 mt-2">
              Euro Stable EA 专业版
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 text-pretty">
            释放您的交易潜力。我们的智能交易系统 (EA) 采用先进算法，旨在实现长期稳定的资本增长，同时将风险降至最低。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <Button
              size="lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg md:text-xl px-10 py-6 lg:py-8 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              立即获取
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('performance')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg md:text-xl px-10 py-6 lg:py-8 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              查看战绩
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}