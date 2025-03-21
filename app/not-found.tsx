"use client";

import { useEffect, useState, useRef } from "react";
import NavBar from "@/components/NavBar";
import { JetBrains_Mono } from "next/font/google";
import TypewriterComponent from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function NotFound() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isAudioLoaded, setIsAudioLoaded] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [glitchText, setGlitchText] = useState(false);
    const [beatIntensity, setBeatIntensity] = useState(0);
    const [strobeActive, setStrobeActive] = useState(false);
    const [bgColor, setBgColor] = useState("bg-neutral");
    const [dropActive, setDropActive] = useState(false);

    useEffect(() => {
        // Create audio element when component mounts
        audioRef.current = new Audio("/audio/404.mp3");
        
        // Set the start position to 1:31 (91 seconds)
        if (audioRef.current) {
            audioRef.current.currentTime = 91;
        }
        
        const handleAudioLoaded = () => {
            setIsAudioLoaded(true);
        };
        
        const handleAudioEnded = () => {
            setAudioPlaying(false);
        };
        
        if (audioRef.current) {
            audioRef.current.addEventListener("canplaythrough", handleAudioLoaded);
            audioRef.current.addEventListener("ended", handleAudioEnded);
        }
        
        // Clean up
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.removeEventListener("canplaythrough", handleAudioLoaded);
                audioRef.current.removeEventListener("ended", handleAudioEnded);
            }
        };
    }, []);
    
    // Start playing audio after the component mounts
    useEffect(() => {
        if (isAudioLoaded && audioRef.current) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setAudioPlaying(true);
                        
                        // Trigger glitch effect every few seconds
                        const glitchInterval = setInterval(() => {
                            setGlitchText(true);
                            setTimeout(() => setGlitchText(false), 200);
                        }, 2000);
                        
                        // Simulate beats for screen dance effect
                        const beatInterval = setInterval(() => {
                            const intensity = Math.random() * 0.7 + 0.3; // Random intensity between 0.3 and 1
                            setBeatIntensity(intensity);
                            
                            // Randomly trigger drop effects
                            if (Math.random() > 0.92) {
                                setDropActive(true);
                                setTimeout(() => setDropActive(false), 2000);
                            }
                            
                            setTimeout(() => setBeatIntensity(0), 150);
                        }, 470); // Approximate beat timing for dance music (128 BPM)
                        
                        // Color changing background
                        const bgInterval = setInterval(() => {
                            const colors = ["bg-neutral", "bg-purple-900/40", "bg-blue-900/40", "bg-pink-900/40"];
                            setBgColor(colors[Math.floor(Math.random() * colors.length)]);
                        }, 5000);
                        
                        // Strobe light effect
                        const strobeInterval = setInterval(() => {
                            if (Math.random() > 0.7) {
                                setStrobeActive(true);
                                setTimeout(() => setStrobeActive(false), 100);
                            }
                        }, 1000);
                        
                        return () => {
                            clearInterval(glitchInterval);
                            clearInterval(beatInterval);
                            clearInterval(bgInterval);
                            clearInterval(strobeInterval);
                        };
                    })
                    .catch(error => {
                        console.error("Audio playback failed:", error);
                    });
            }
        }
    }, [isAudioLoaded]);
    
    const toggleAudio = () => {
        if (audioRef.current) {
            if (audioPlaying) {
                audioRef.current.pause();
                setAudioPlaying(false);
            } else {
                audioRef.current.play();
                setAudioPlaying(true);
            }
        }
    };

    // Screen dance/shake animation variants
    const screenAnimationVariants = {
        idle: {
            rotate: 0,
            scale: 1,
            x: 0,
            y: 0,
        },
        dancing: {
            rotate: beatIntensity * 1.5,
            scale: 1 + (beatIntensity * 0.02),
            x: beatIntensity * 5 * (Math.random() > 0.5 ? 1 : -1),
            y: beatIntensity * 4 * (Math.random() > 0.5 ? 1 : -1),
        },
        drop: {
            rotate: [-2, 2, -2, 2, 0],
            scale: [1, 1.05, 1],
            x: [-10, 10, -10, 10, 0],
            y: [-5, 5, -5, 5, 0],
        }
    };

    // Generate random laser beams
    const generateLasers = () => {
        const laserCount = 6;
        const lasers = [];
        
        for (let i = 0; i < laserCount; i++) {
            const startX = Math.random() * 100;
            const startY = Math.random() * 50;
            const width = Math.random() * 2 + 1;
            const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            
            lasers.push(
                <motion.div
                    key={`laser-${i}`}
                    className="absolute h-screen opacity-40"
                    style={{
                        left: `${startX}%`,
                        top: `${startY}%`,
                        width: `${width}px`,
                        backgroundColor: color,
                        transformOrigin: "top left",
                        transform: `rotate(${Math.random() * 180}deg)`,
                        filter: "blur(1px)",
                        boxShadow: `0 0 8px ${color}`
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ 
                        scaleY: dropActive ? 1 : [0, 1, 0],
                        opacity: dropActive ? 0.7 : [0, 0.7, 0]
                    }}
                    transition={{
                        duration: dropActive ? 1.8 : 1,
                        repeat: dropActive ? 0 : Infinity,
                        repeatType: "loop",
                        delay: i * 0.2
                    }}
                />
            );
        }
        
        return lasers;
    };

    return (
        <>
            {/* Strobe light effect */}
            <AnimatePresence>
                {strobeActive && (
                    <motion.div 
                        className="fixed inset-0 bg-white z-50 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    />
                )}
            </AnimatePresence>
            
            <motion.main 
                className={`${bgColor} flex flex-col min-h-screen ${jetBrainsMono.className} transition-colors duration-1000 overflow-hidden`}
                variants={screenAnimationVariants}
                animate={dropActive ? "drop" : (audioPlaying ? "dancing" : "idle")}
                transition={dropActive 
                    ? { 
                        type: "tween", 
                        duration: 1.5, 
                        ease: "easeInOut" 
                      } 
                    : { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 10 
                      }
                }
            >
                {/* Laser beams */}
                {audioPlaying && generateLasers()}
                
                {/* Overlay gradient for rave feel */}
                <div className="fixed inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20 pointer-events-none" />
                
                <NavBar />
                <div className="h-28" />
                <div className="flex flex-col justify-center items-center flex-grow h-full relative z-10">
                    <motion.div 
                        className="flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div
                            className={`text-5xl font-bold ${glitchText ? 'text-error' : 'text-primary'}`}
                            animate={{
                                x: glitchText ? [0, -10, 5, -5, 0] : 0,
                                y: beatIntensity ? [0, -5 * beatIntensity, 0] : 0,
                                filter: glitchText ? "blur(2px)" : "blur(0px)",
                                textShadow: beatIntensity > 0.6 ? "0 0 8px rgba(255,0,255,0.8)" : "none",
                                scale: dropActive ? [1, 1.2, 1] : 1,
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <TypewriterComponent
                                options={{
                                    wrapperClassName: "text-5xl",
                                    cursorClassName: "text-5xl",
                                    cursor: "|",
                                    delay: 50,
                                    autoStart: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString("404 Not Found...").callFunction((element) => {
                                        element.elements.cursor.style.display = "none";
                                    }).start();
                                }} 
                            />
                        </motion.div>

                        <motion.div 
                            className="mt-8 flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                                opacity: 1, 
                                y: 0,
                                rotate: beatIntensity * (Math.random() > 0.5 ? 2 : -2),
                                scale: dropActive ? [1, 1.1, 1] : 1,
                            }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                        >
                            <p className="text-xl mb-4">Knife Party - 404</p>
                            
                            <button 
                                onClick={toggleAudio} 
                                className="btn btn-primary mt-2"
                            >
                                {audioPlaying ? "Pause Audio" : "Play Audio"}
                            </button>
                        </motion.div>

                        {/* Enhanced visualizer with more bars and colors */}
                        <motion.div
                            className="mt-12 flex space-x-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 0.5 }}
                        >
                            {Array.from({ length: 20 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-16 rounded-t-full"
                                    style={{
                                        backgroundColor: `hsl(${(i * 15) % 360}, 100%, 50%)`,
                                        boxShadow: dropActive ? `0 0 8px hsl(${(i * 15) % 360}, 100%, 50%)` : 'none'
                                    }}
                                    animate={{
                                        height: audioPlaying 
                                            ? [
                                                16, 
                                                Math.random() * 80 + 16, 
                                                Math.random() * 40 + 16, 
                                                Math.random() * 60 + 16, 
                                                16
                                              ] 
                                            : 16,
                                        scaleY: dropActive ? [1, 2, 1] : 1
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        repeat: audioPlaying ? Infinity : 0,
                                        repeatType: "loop",
                                        delay: i * 0.02
                                    }}
                                />
                            ))}
                        </motion.div>
                        
                        {/* Background elements that react to the beat */}
                        {audioPlaying && Array.from({ length: dropActive ? 40 : 20 }).map((_, i) => (
                            <motion.div
                                key={`bg-${i}`}
                                className="fixed w-2 h-2 rounded-full bg-opacity-30"
                                style={{ 
                                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                                }}
                                initial={{ 
                                    opacity: 0,
                                    x: Math.random() * window.innerWidth, 
                                    y: Math.random() * window.innerHeight 
                                }}
                                animate={{ 
                                    opacity: [0, 0.6 * beatIntensity, 0],
                                    scale: [0, 2 + (beatIntensity * 3), 0],
                                    x: Math.random() * window.innerWidth, 
                                    y: Math.random() * window.innerHeight,
                                    boxShadow: `0 0 ${dropActive ? 15 : 5}px hsl(${Math.random() * 360}, 100%, 70%)`
                                }}
                                transition={{
                                    duration: dropActive ? 1 : 2,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    delay: i * (dropActive ? 0.05 : 0.1)
                                }}
                            />
                        ))}
                        
                        {/* Fog/Smoke effect */}
                        {audioPlaying && (
                            <motion.div
                                className="fixed bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"
                                animate={{
                                    opacity: [0.1, 0.3, 0.1],
                                    height: dropActive ? ["30vh", "50vh", "30vh"] : "30vh"
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                        )}
                    </motion.div>
                </div>
                
                {/* Floor grid - rave floor effect */}
                {audioPlaying && (
                    <div className="fixed bottom-0 inset-x-0 h-[30vh] perspective-[800px] overflow-hidden">
                        <motion.div 
                            className="w-full h-[200%] bg-gradient-to-b from-transparent to-black/30 grid grid-cols-10 grid-rows-20"
                            style={{
                                transformOrigin: "center bottom",
                                transform: "rotateX(60deg)",
                                backgroundSize: "100px 100px",
                                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), 
                                                 linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`
                            }}
                            animate={{
                                backgroundPosition: ["0px 0px", "0px 100px"]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {dropActive && Array.from({ length: 10 }).map((_, i) => (
                                <motion.div
                                    key={`floor-light-${i}`}
                                    className="absolute rounded-full"
                                    style={{
                                        width: Math.random() * 100 + 50,
                                        height: Math.random() * 100 + 50,
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                                        filter: "blur(40px)",
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ 
                                        opacity: [0, 0.3, 0],
                                        scale: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>
                )}
            </motion.main>
        </>
    );
}