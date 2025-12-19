import React from 'react';
import { Button } from "@/components/ui/button";
import { useCheckoutStore } from "@/hooks/useCheckoutStore";
export function Footer() {
  const open = useCheckoutStore((state) => state.open);
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center text-sm text-muted-foreground max-w-4xl mx-auto">
            <h3 className="font-bold text-base md:text-lg mb-4 text-foreground text-center">风险免责声明</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-3xl mx-auto">
              外汇交易带来高风险，可能不适合所有投资者。在决定交易外汇之前，您应该仔细考虑您的投资目标、经验水平和风险承受能力。存在蒙受部分或全部初始投资损失的可能性，因此，您不应投入您无法承受损失的资金。过去的表现并非未来结果的指标。
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 mt-12 mx-auto max-w-4xl w-full">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg md:text-xl px-10 py-6 lg:py-8 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full max-w-md mx-auto rounded-xl"
              onClick={() => open()}
              variant="default"
            >
              联系我们
            </Button>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Euro Stable EA. All Rights Reserved.
            </p>
            <p className="mt-1">Built with ❤️ at Cloudflare</p>
          </div>
        </div>
      </div>
    </footer>
  );
}