import { motion } from "framer-motion";
import { TrendingUp, Target, Zap, BarChart3, CheckCircle2, Sparkles } from "lucide-react";

const FloatingMetricCards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <div className="relative w-full h-[600px]">
      {/* Grid layout with intentional spacing */}
      
      {/* Top Row - Card 1: Performance Score */}
      <motion.div
        className="absolute top-0 right-0 bg-white rounded-3xl shadow-lg border border-blue-100/50 p-7 w-72 cursor-pointer hover:-translate-y-2 transition-all duration-300"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={0.6}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 20px 50px -12px rgba(249, 115, 22, 0.25), 0 0 0 1px rgba(251, 191, 36, 0.1)"
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground/80">Performance Score</span>
          <div className="p-2 rounded-xl bg-blue-100">
            <TrendingUp className="w-4 h-4 text-[#333]" />
          </div>
        </div>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-5xl font-black text-black">87</span>
          <span className="text-xl font-bold text-muted-foreground/50">/100</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
            <motion.div 
              className="h-full rounded-full bg-black"
              initial={{ width: "0%" }}
              animate={{ width: "87%" }}
              transition={{ duration: 1.8, delay: 1, ease: "easeOut" }}
            />
          </div>
        </div>
        <p className="text-xs mt-3 font-medium text-[#333]">↑ Above industry average</p>
      </motion.div>

      {/* Top-Middle Row - Card 2: Predicted Engagement */}
      <motion.div
        className="absolute top-20 left-0 bg-white rounded-3xl shadow-lg border border-blue-100/50 p-7 w-80 cursor-pointer hover:-translate-y-2 transition-all duration-300"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={0.8}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 20px 50px -12px rgba(251, 191, 36, 0.25), 0 0 0 1px rgba(249, 115, 22, 0.1)"
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground/80">Predicted Engagement</span>
          <div className="p-2 rounded-xl bg-blue-100">
            <Zap className="w-4 h-4 text-[#333]" />
          </div>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <motion.span 
            className="text-5xl font-black text-black"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
          >
            +42%
          </motion.span>
          <div className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#111] text-white shadow-md">
            High Impact
          </div>
        </div>
        <p className="text-xs font-medium text-muted-foreground/70">Estimated reach: <span className="text-black font-semibold">24,500 users</span></p>
      </motion.div>

      {/* Middle Row - Card 3: Content Quality */}
      <motion.div
        className="absolute top-[280px] right-8 bg-white rounded-3xl shadow-lg border border-blue-100/50 p-7 w-72 cursor-pointer hover:-translate-y-2 transition-all duration-300"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={1.0}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 20px 50px -12px rgba(249, 115, 22, 0.25), 0 0 0 1px rgba(251, 191, 36, 0.1)"
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground/80">Content Quality</span>
          <div className="p-2 rounded-xl bg-blue-100">
            <Sparkles className="w-4 h-4 text-[#333]" />
          </div>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="text-5xl font-black text-black">A+</div>
          <div className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#111] text-white shadow-md">
            Excellent
          </div>
        </div>
        <div className="space-y-2.5">
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-muted-foreground/70">Clarity</span>
            <div className="flex items-center gap-1.5">
              <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#f97316] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "95%" }}
                  transition={{ duration: 1.2, delay: 1.4 }}
                />
              </div>
              <span className="text-xs font-bold text-black w-8 text-right">95%</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-muted-foreground/70">Engagement</span>
            <div className="flex items-center gap-1.5">
              <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#f97316] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1.2, delay: 1.6 }}
                />
              </div>
              <span className="text-xs font-bold text-black w-8 text-right">92%</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom-Left - Card 4: Real-time Analysis */}
      <motion.div
        className="absolute bottom-32 left-12 bg-white rounded-3xl shadow-lg border border-blue-100/50 p-6 w-64 cursor-pointer hover:-translate-y-2 transition-all duration-300"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={1.2}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 20px 50px -12px rgba(105, 154, 205, 0.25)"
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-xl bg-blue-100">
            <BarChart3 className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground/80">Analysis</span>
        </div>
        <div className="text-4xl font-black mb-2 text-black">2.4s</div>
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-black animate-pulse" />
          <p className="text-xs font-medium text-muted-foreground/70">15+ validations checked</p>
        </div>
      </motion.div>

      {/* Bottom Row - Card 5: Audience Match */}
      <motion.div
        className="absolute bottom-0 right-20 bg-white rounded-3xl shadow-lg border border-blue-100/50 p-7 w-72 cursor-pointer hover:-translate-y-2 transition-all duration-300"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={1.4}
        whileHover={{ 
          scale: 1.03,
          boxShadow: "0 20px 50px -12px rgba(249, 115, 22, 0.25), 0 0 0 1px rgba(251, 191, 36, 0.1)"
        }}
      >
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-semibold tracking-wide uppercase text-muted-foreground/80">Audience Match</span>
          <div className="p-2 rounded-xl bg-blue-100">
            <Target className="w-4 h-4 text-[#333]" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium text-muted-foreground/70">Target personas</span>
            <CheckCircle2 className="w-5 h-5 text-[#555]" />
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium text-muted-foreground/70">Tone alignment</span>
            <CheckCircle2 className="w-5 h-5 text-[#555]" />
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium text-muted-foreground/70">Message clarity</span>
            <CheckCircle2 className="w-5 h-5 text-[#555]" />
          </div>
        </div>
        <div className="mt-5 pt-4 border-t border-blue-100">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#f97316] animate-pulse" />
            <span className="text-sm font-bold text-[#333]">Ready to publish</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default FloatingMetricCards;

