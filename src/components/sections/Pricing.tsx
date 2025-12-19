import { motion } from "framer-motion";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useCheckoutStore } from "@/hooks/useCheckoutStore";
export function Pricing() {
  const open = useCheckoutStore((state) => state.open);
  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            选择适合您的计划
          </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              一次性付款，终身使用。无订阅，无隐藏费用。
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const isBeta = plan.price === "即将推出";
            const isRecommended = plan.isRecommended;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className={cn(
                    "flex flex-col h-full transition-all duration-300 hover:scale-[1.02]",
                    isBeta
                      ? "border border-border shadow-md"
                      : "border-2 border-emerald-500 shadow-xl dark:shadow-emerald-500/20",
                    isRecommended ? "ring-4 ring-emerald-500/10" : ""
                  )}
                >
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-2xl md:text-3xl font-bold">{plan.name}</CardTitle>
                      {isRecommended && (
                        <Badge variant="default" className="bg-emerald-500 text-lg font-bold px-3 py-1">
                          推荐
                        </Badge>
                      )}
                    </div>
                    <CardDescription>
                      <span className="text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      {!isBeta && <span className="text-muted-foreground"> / 终身许可</span>}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className={cn(
                            "h-5 w-5 mr-2 flex-shrink-0 mt-1",
                            isBeta ? "text-muted-foreground" : "text-emerald-500"
                          )} />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {isBeta ? (
                      <Button className="w-full text-lg md:text-xl px-10 py-6 lg:py-8 font-bold" disabled variant="outline">
                        敬请期待
                      </Button>
                    ) : (
                      <Button
                        onClick={() => open(plan.name)}
                        size="lg"
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg md:text-xl px-10 py-6 lg:py-8 font-bold shadow-xl"
                        variant="default"
                      >
                        立即购买
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}