import {
  ShieldCheck,
  Zap,
  TrendingUp,
  BarChart,
  LifeBuoy,
  Clock,
  DollarSign,
  TrendingDown,
  Users,
  type LucideIcon,
} from "lucide-react";
export const performanceData = [
  { name: "2024年3月", profit: 1000 },
  { name: "2024年4月", profit: 1240 },
  { name: "2024年5月", profit: 1540 },
  { name: "2024年6月", profit: 1910 },
  { name: "2024年7月", profit: 2370 },
  { name: "2024年8月", profit: 2940 },
  { name: "2024年9月", profit: 3650 },
  { name: "2024年10月", profit: 4530 },
  { name: "2024年11月", profit: 5620 },
  { name: "2024年12月", profit: 6970 },
  { name: "2025年1月", profit: 8650 },
  { name: "2025年2月", profit: 10730 },
  { name: "2025年3月", profit: 13310 },
  { name: "2025年4月", profit: 16510 },
  { name: "2025年5月", profit: 20480 },
  { name: "2025年6月", profit: 25410 },
  { name: "2025年7月", profit: 31520 },
  { name: "2025年8月", profit: 39100 },
  { name: "2025年9月", profit: 48500 },
  { name: "2025年10月", profit: 60100 },
  { name: "2025年11月", profit: 74500 },
  { name: "2025年12月", profit: 113580 },
];
export const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Zap,
    title: "全自动智能交易",
    description: "基于深度神经网络算法，24小时全天候自动识别市场趋势并执行交易，无需人工盯盘，彻底解放交易员的时间与精力。",
  },
  {
    icon: TrendingUp,
    title: "复利增长模式",
    description: "设置动态仓位管理系统，根据账户净值的实时增长自动调整下单手数，科学实现资金的指数级复利增长效应。",
  },
  {
    icon: BarChart,
    title: "主流货币对优化",
    description: "系统针对EURUSD、GBPUSD等主流货币对进行了深度参数优化，通过跨货币对分散投资策略，有效降低系统性交易风险。",
  },
  {
    icon: LifeBuoy,
    title: "智能新闻过滤",
    description: "实时监控全球影响力经济事件，在市场剧烈波动期自动选择暂停交易或加强风控，确保核心资金在极端行情下的安全性。",
  },
  {
    icon: ShieldCheck,
    title: "多层风险控制算法",
    description: "采用多维度风险控制逻辑，严密限制单笔交易的风险敞口，确保最大回撤始终处于可预期的稳健范围之内。",
  },
  {
    icon: Clock,
    title: "一对一技术支持",
    description: "提供专业的一对一远程安装指导、参数调优以及日常运维咨询，确保您的量化交易系统在任何环境下都能流畅运行。",
  }
];
export const pricingPlans = [
  {
    name: "V2.3 标准版",
    price: "$299",
    features: [
      "1个真实账户终身许可",
      "标准技术支持响应",
      "建议初始资金≥500美元起步",
      "免费 VPS 部署视频教程",
      "核心交易策略永久授权"
    ],
    isRecommended: false
  },
  {
    name: "V3 Pro 专业版",
    price: "$599",
    features: [
      "2个真实账户终身许可",
      "终身免费算法迭代更新",
      "VIP优质技术支持通道",
      "高级新闻过滤系统",
      "建议初始资金：1000美元起步",
      "免费 VPS 部署视频教程"
    ],
    isRecommended: true
  },
  {
    name: "V4 旗舰版",
    price: "即将推出",
    features: [
      "3个真实账户终身许可",
      "无限模拟账户测试许可",
      "24/7 专家级一对一支持",
      "独家 Beta 新功能优先权",
      "专为机构级大资金设计",
      "极低延迟 VPS 直连支持"
    ],
    isRecommended: false
  }
];
export const faqItems = [
  {
    question: "什么是 MT4 (MetaTrader 4) 平台？",
    answer: "MT4是目前全球最受欢迎的在线外汇交易标杆平台，以其卓越的系统稳定性、强大的技术图表分析能力以及对EA自动化脚本的完美兼容性而著称。它为全球数百万交易者提供了一个公平、透明且高效的交易环境，是运行自动化量化策略的理想首选平台。"
  },
  {
    question: "EA (智能交易系统) 的核心优势是什么？",
    answer: "EA的核心优势在于能够完全排除人类在交易中不可避免的贪婪、恐惧等情绪干扰。Euro Stable EA采用了先进的深度神经网络算法，能够24/7全天候精准监控全球市场波动，并严格执行预设的风控逻辑，确保在各类市场行情下都能保持理性且高精度的执行力。"
  },
  {
    question: "开始交易需要准备多少初始资金？",
    answer: "我们建议新手投资者使用美分账户时以500美元（即50000美分）起步，标准美金账户则建议1000美元以上。充足的初始资金不仅能让系统的动态仓位管理逻辑拥有更充分的发挥空间，还能有效提升账户的整体抗风险能力，从而在复利增长的路径上走得更稳健和长远。"
  },
  {
    question: "为什么需要 24 小时保持在线运行？如何实现？",
    answer: "为了不错过任何时区的交易信号并确保订单平仓的安全，MT4交易终端必须保持持续在线。由于家庭电脑难以保证电力与网络的持久稳定，我们强烈建议并提供详尽的VPS（云端虚拟专用服务器）部署教程。这能确保EA实现100%全天候在线，并获得最低的市场连接延迟。"
  },
  {
    question: "软件的安装和后续配置复杂吗？",
    answer: "安装流程经过深度优化，极其方便，即便是零基础用户通常也能在10分钟内完成部署。我们打包提供详尽的视频操作手册、预设好的优化参数文件，并配备专业的技术团队提供一对一远程安装协助。我们的目标是让每位投资者都能轻松跨越技术门槛，顺利开启自动化投资。"
  },
  {
    question: "购买后需要支付后续续费或订阅费吗？",
    answer: "Euro Stable EA 采用一次性付费、终身授权的商业模式。购买后您将获得永久使用权限，没有任何隐性订阅成本或后续续费要求。此外，我们承诺为所有授权用户提供终身免费的策略优化更新与算法升级支持，确保您的系统能够持续适应不断变化的市场环境。"
  },
  {
    question: "我该如何开设交易账户？",
    answer: "您可以选择全球受监管的知名经纪商开设MT4/ECN账户。基本流程包括：在线注册、上传证件进行KYC身份验证、通过电汇或第三方支付入金。为了让EA发挥最佳性能，我们强烈建议选择低点差、低延迟的交易环境。如您在开户过程中遇到困难，请随时联系我们的客服团队，我们将全程协助您完成开户和资金部署。"
  }
];
export const statsData = [
  { icon: TrendingUp, label: "历史胜率", value: "85.3%" },
  { icon: DollarSign, label: "累计获利", value: "$228k+" },
  { icon: TrendingDown, label: "最大回撤", value: "15.2%" },
  { icon: Users, label: "活跃用户", value: "12,847+" }
];
export const testimonials = [
  {
    quote: "Euro Stable EA 彻底改变了我的投资方式，其稳定性和回撤控制能力在同类产品中令人印象深刻。",
    author: "Alex Johnson",
    role: "全职交易员",
  },
  {
    quote: "作为一名资产管理经理，V3 Pro 表现出的可靠性超乎预期，收益曲线在剧烈波动的市场中依然平滑。",
    author: "Sophia Lee",
    role: "资管经理",
  },
  {
    quote: "专业的技术支持，安装流程非常顺利。运行3个月以来账户一直保持稳定盈利，非常值得信赖。",
    author: "Michael Chen",
    role: "外汇爱好者",
  },
  {
    quote: "严格的风险管控逻辑完美契合我的长期投资组合要求。全方位优质售后支持也非常到位。",
    author: "Emma Wilson",
    role: "职业投资者",
  },
  {
    quote: "内置的新闻过滤器完美应对了非农期的市场剧烈波动，帮助我成功规避了多次风险行情，信心倍增。",
    author: "David Park",
    role: "资深交易员",
  },
  {
    quote: "技术团队非常有耐心，即便我是个新手也能在指导下轻松上手。账户目前的盈利曲线非常优美。",
    author: "Olivia Kim",
    role: "新手投资者",
  },
  {
    quote: "精准的量化逻辑，过去一年来实现资产的持续增长。遇到技术问题反馈与解决的速度极快。",
    author: "Ryan Zhang",
    role: "机构分析师",
  },
  {
    quote: "对冲策略带来了极高的安全性，顶级回撤控制. 我会把这款软件推荐给所有追求稳健收益的零售投资者。",
    author: "Sarah Thompson",
    role: "金融分析师",
  },
];