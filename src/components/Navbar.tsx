import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { useCheckoutStore } from "@/hooks/useCheckoutStore";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const open = useCheckoutStore((state) => state.open);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "战绩", href: "#performance" },
    { name: "特性", href: "#features" },
    { name: "价格", href: "#pricing" },
    { name: "操作说明", href: "#operation" },
    { name: "常见问题", href: "#faq" },
  ];
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center space-x-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-emerald-500"
                >
                  <path
                    fill="currentColor"
                    d="M12 2L1 21h22L12 2zm0 3.84L19.07 19H4.93L12 5.84z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 12.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5z"
                  />
                </svg>
                <span className="font-bold text-2xl lg:text-3xl text-foreground">
                  Euro Stable EA
                </span>
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle className="relative top-0 right-0" />
            <Button
              onClick={() => open()}
              size="lg"
              className="hidden sm:inline-flex bg-emerald-500 hover:bg-emerald-600 text-white text-lg md:text-xl px-10 py-6 lg:py-8 font-bold shadow-xl"
            >
              立即购买
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}