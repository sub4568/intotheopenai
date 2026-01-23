import { motion } from "framer-motion";
import { TrendingUp, Target, Zap, BarChart3, CheckCircle2, Sparkles } from "lucide-react";

const FloatingMetricCards = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Card 1: Performance Score */}
      <motion.div
        className="absolute top-8 right-12 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 w-64 hover:shadow-glow hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 20, rotateX: -15 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 0.5 },
          y: { duration: 0.5 },
          rotateX: { duration: 0.5 },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }
        }}
        style={{ 
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)"
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-muted-foreground">Performance Score</span>
          <TrendingUp className="w-5 h-5 text-soft-blue" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-primary-navy">87</span>
          <span className="text-lg font-medium text-muted-foreground">/100</span>
        </div>
        <div className="mt-3 flex items-center gap-1">
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full"
              style={{ backgroundColor: '#699ACD' }}
              initial={{ width: "0%" }}
              animate={{ width: "87%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>
        </div>
        <p className="text-xs mt-2 text-muted-foreground">Above industry average</p>
      </motion.div>

      {/* Card 2: Predicted Engagement */}
      <motion.div
        className="absolute top-32 left-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 w-72 hover:shadow-glow hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 20, rotateX: -15 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          y: [0, -15, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.2 },
          y: { duration: 0.5, delay: 0.2 },
          rotateX: { duration: 0.5, delay: 0.2 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }
        }}
        style={{ 
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)"
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-muted-foreground">Predicted Engagement</span>
          <Zap className="w-5 h-5 text-warm-peach" />
        </div>
        <div className="flex items-center gap-2">
          <motion.span 
            className="text-4xl font-bold text-primary-navy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            +42%
          </motion.span>
          <div className="px-2 py-1 rounded-full text-xs font-medium bg-warm-peach/20 text-warm-peach">
            High
          </div>
        </div>
        <p className="text-xs mt-3 text-muted-foreground">Estimated reach: 24,500 users</p>
      </motion.div>

      {/* Card 3: Audience Match */}
      <motion.div
        className="absolute bottom-24 right-16 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 w-64 hover:shadow-glow hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 20, rotateX: -15 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          y: [0, -12, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.4 },
          y: { duration: 0.5, delay: 0.4 },
          rotateX: { duration: 0.5, delay: 0.4 },
          y: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }
        }}
        style={{ 
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)"
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-muted-foreground">Audience Match</span>
          <Target className="w-5 h-5 text-secondary-navy" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Target personas</span>
            <CheckCircle2 className="w-4 h-4 text-soft-blue" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Tone alignment</span>
            <CheckCircle2 className="w-4 h-4 text-soft-blue" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Message clarity</span>
            <CheckCircle2 className="w-4 h-4 text-soft-blue" />
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <span className="text-xs font-medium text-primary-navy">✓ Ready to publish</span>
        </div>
      </motion.div>

      {/* Card 4: Real-time Analysis */}
      <motion.div
        className="absolute bottom-8 left-12 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 w-56 hover:shadow-glow hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 20, rotateX: -15 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.6 },
          y: { duration: 0.5, delay: 0.6 },
          rotateX: { duration: 0.5, delay: 0.6 },
          y: {
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }
        }}
        style={{ 
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)"
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="w-4 h-4 text-soft-blue" />
          <span className="text-xs font-medium text-muted-foreground">Analysis complete</span>
        </div>
        <div className="text-2xl font-bold mb-1 text-primary-navy">2.4s</div>
        <p className="text-xs text-muted-foreground">15+ validations checked</p>
      </motion.div>

      {/* Card 5: Content Quality */}
      <motion.div
        className="absolute -bottom-12 right-32 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 w-60 hover:shadow-glow hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 20, rotateX: -15 }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 0.5, delay: 0.8 },
          y: { duration: 0.5, delay: 0.8 },
          rotateX: { duration: 0.5, delay: 0.8 },
          y: {
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }
        }}
        style={{ 
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)"
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-muted-foreground">Content Quality</span>
          <Sparkles className="w-5 h-5 text-warm-peach" />
        </div>
        <div className="flex items-center gap-2 mb-3">
          <div className="text-3xl font-bold text-primary-navy">A+</div>
          <div className="px-2 py-1 rounded-full text-xs font-medium bg-soft-blue/20 text-soft-blue">
            Excellent
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Clarity</span>
            <span className="text-xs font-medium text-primary-navy">95%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Engagement</span>
            <span className="text-xs font-medium text-primary-navy">92%</span>
          </div>
        </div>
      </motion.div>

      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(105, 154, 205, 0.1)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(228, 183, 149, 0.08)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </div>
  );
};

export default FloatingMetricCards;

