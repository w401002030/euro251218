import React, { useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useCheckoutStore } from "@/hooks/useCheckoutStore";
import { Copy, CheckCircle2 } from "lucide-react";
export function CheckoutDialog() {
  const isOpen = useCheckoutStore((s) => s.isOpen);
  const selectedPlan = useCheckoutStore((s) => s.selectedPlan);
  const close = useCheckoutStore((s) => s.close);
  const baseDescription = "欢迎通过电话或微信联系我们咨询详细的配置方案。微信与电话同号，在线服务时间为：北京时间（UTC+8）09:00 - 18:00。";
  const descriptionText = selectedPlan
    ? `您已选择 "${selectedPlan}" 方案。${baseDescription}`
    : baseDescription;
  const phoneNum = "+86 18666888095";
  const overseasPhoneNum = "(719) 524-8014";
  const emailAddr = "673351805@qq.com";
  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("已成功复制到剪贴板！", {
        icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />,
      });
    } catch (err) {
      console.error("Clipboard copy failed:", err);
      const textarea = document.createElement("textarea");
      Object.assign(textarea.style, {
        position: "fixed",
        left: "-9999px",
        top: "0",
        opacity: "0",
      });
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        const ok = document.execCommand("copy");
        if (ok) {
          toast.success("已成功复制到剪贴板！");
        } else {
          toast.error("复制失败，请尝试手��选择并复制。");
        }
      } catch (e) {
        console.error("Fallback copy failed:", e);
        toast.error("复制失败，请尝试手动选择并复制。");
      }
      document.body.removeChild(textarea);
    }
  }, []);
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="max-w-[95vw] sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">联系购买</DialogTitle>
          <DialogDescription className="text-base md:text-lg font-medium leading-relaxed text-muted-foreground mt-2">
            {descriptionText}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 flex flex-col gap-6">
          <div className="w-full space-y-4">
            {[
              { label: "联系电话 / 微信", value: phoneNum },
              { label: "国际专线", value: overseasPhoneNum },
              { label: "官方邮箱", value: emailAddr },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">
                  {item.label}
                </span>
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 p-2 rounded-xl border border-border/50">
                  <code className="flex-1 text-sm sm:text-base font-mono font-medium text-foreground truncate px-2">
                    {item.value}
                  </code>
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="h-9 px-3 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors"
                    onClick={() => copyToClipboard(item.value)}
                  >
                    <Copy className="h-3.5 w-3.5 mr-1.5" />
                    复制
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter className="sm:justify-center pt-2">
          <Button variant="outline" onClick={close} className="w-full rounded-xl h-11 text-base font-medium">
            返回预览页面
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}