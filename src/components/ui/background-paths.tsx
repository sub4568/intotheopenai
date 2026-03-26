import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    // Select a few paths for boats to travel on
    const boatPaths = [5, 15, 25];

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-accent"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.05 + path.id * 0.01}
                        initial={{ pathLength: 0.3, opacity: 0.3 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.2, 0.5, 0.2],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
                
                {/* Animated boats traveling along select paths */}
                {boatPaths.map((pathIndex) => {
                    const path = paths[pathIndex];
                    const duration = 12 + pathIndex * 2;
                    const delay = pathIndex * 4;
                    
                    return (
                        <motion.g
                            key={`boat-${pathIndex}`}
                            initial={{ offsetDistance: "0%" }}
                            animate={{ offsetDistance: "100%" }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                ease: "linear",
                                delay: delay,
                            }}
                            style={{
                                offsetPath: `path('${path.d}')`,
                                offsetRotate: "auto 90deg",
                            }}
                        >
                            {/* Simple boat/ship icon */}
                            <g transform="scale(1.2)">
                                {/* Boat hull */}
                                <motion.path
                                    d="M-8,-3 L8,-3 L6,3 L-6,3 Z"
                                    fill="currentColor"
                                    className="text-[#111]"
                                    animate={{
                                        opacity: [0.5, 0.9, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                                {/* Boat sail/mast */}
                                <motion.path
                                    d="M0,-6 L3,-3 L-3,-3 Z"
                                    fill="currentColor"
                                    className="text-[#555]"
                                    animate={{
                                        opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.3,
                                    }}
                                />
                                {/* Wake/trail effect - front */}
                                <motion.circle
                                    cx="6"
                                    cy="0"
                                    r="2"
                                    fill="currentColor"
                                    className="text-[#888]"
                                    animate={{
                                        opacity: [0.4, 0, 0],
                                        scale: [0.3, 1.5, 2.5],
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                    }}
                                />
                                {/* Wake/trail effect - back */}
                                <motion.circle
                                    cx="-6"
                                    cy="0"
                                    r="2"
                                    fill="currentColor"
                                    className="text-[#888]"
                                    animate={{
                                        opacity: [0.3, 0, 0],
                                        scale: [0.5, 1.8, 3],
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        repeat: Infinity,
                                        ease: "easeOut",
                                        delay: 0.6,
                                    }}
                                />
                            </g>
                        </motion.g>
                    );
                })}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
        </div>
    );
}
