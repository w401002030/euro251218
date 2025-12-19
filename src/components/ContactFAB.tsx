import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCheckoutStore } from "@/hooks/useCheckoutStore";
import { cn } from "@/lib/utils";
export function ContactFAB() {
  const open = useCheckoutStore((state) => state.open);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 1,
          ease: [0.23, 1, 0.32, 1]
        }}
        className="fixed z-50 bottom-4 right-4 left-4 md:left-auto md:bottom-6 md:right-6 flex justify-center md:justify-end pointer-events-none"
      >
        <Button
          onClick={() => open()}
          size="lg"
          className={cn(
            "pointer-events-auto",
            "bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-xl hover:shadow-2xl",
            "transition-all duration-300 transform hover:-translate-y-1 active:scale-95",
            "rounded-full h-auto",
            "w-full max-w-sm md:w-auto",
            "text-lg md:text-xl px-10 py-6 lg:py-8",
            "flex items-center justify-center gap-2"
          )}
        >
          <MessageCircle className="h-6 w-6" />
          <span>联系我们</span>
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}