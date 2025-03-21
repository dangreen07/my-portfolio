"use client";

import { useEffect, useState, useRef } from "react";
import NavBar from "@/components/NavBar";
import { JetBrains_Mono } from "next/font/google";
import TypewriterComponent from "typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

// Define AudioContext interface for TypeScript
interface WindowWithAudioContext extends Window {
    AudioContext: typeof AudioContext;
    webkitAudioContext?: typeof AudioContext;
}

export default function NotFound() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isAudioLoaded, setIsAudioLoaded] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [glitchText, setGlitchText] = useState(false);
    const [beatIntensity, setBeatIntensity] = useState(0);
    const [strobeActive, setStrobeActive] = useState(false);
    const [bgColor, setBgColor] = useState("bg-neutral");
    const [dropActive, setDropActive] = useState(false);
    const danceMode = useState(true)[0]; // Always enable dance mode, no setter needed
    const [viewport, setViewport] = useState({ width: 1200, height: 800 }); // Default fallback size
    const [userInteracted, setUserInteracted] = useState(false);
    const [audioInitialized, setAudioInitialized] = useState(false);

    // Safe access to window dimensions
    useEffect(() => {
        // Update viewport dimensions
        const updateViewport = () => {
            setViewport({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        
        // Set initial dimensions
        updateViewport();
        
        // Update dimensions on resize
        window.addEventListener('resize', updateViewport);
        
        // Setup user interaction detection for audio autoplay
        const interactionEvents = ['click', 'touchstart', 'keydown', 'scroll'];
        const handleUserInteraction = () => {
            setUserInteracted(true);
            
            // Try to play audio if it exists and isn't already playing
            if (audioRef.current && !audioPlaying) {
                audioRef.current.muted = false;
                audioRef.current.play().catch(err => 
                    console.warn("Couldn't play audio after user interaction:", err)
                );
            }
            
            // Remove event listeners after first interaction
            interactionEvents.forEach(event => {
                window.removeEventListener(event, handleUserInteraction);
            });
        };
        
        // Add event listeners for user interaction
        interactionEvents.forEach(event => {
            window.addEventListener(event, handleUserInteraction);
        });
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', updateViewport);
            interactionEvents.forEach(event => {
                window.removeEventListener(event, handleUserInteraction);
            });
        };
    }, [audioPlaying]);

    useEffect(() => {
        if (audioInitialized) return; // Prevent multiple initializations
        
        // Create audio element when component mounts
        audioRef.current = new Audio("/audio/404.mp3");
        
        // Set the start position to 1:31 (91 seconds)
        if (audioRef.current) {
            // Configure audio element
            const audio = audioRef.current;
            audio.currentTime = 91;
            audio.volume = 1.0;
            audio.loop = true;
            
            // Apply multiple autoplay strategies
            audio.muted = true; // Start muted to bypass browser restrictions
            audio.setAttribute('playsinline', ''); // Important for iOS
            audio.setAttribute('webkit-playsinline', ''); // For older iOS
            audio.preload = 'auto';
            
            const handleAudioLoaded = () => {
                setIsAudioLoaded(true);
                
                // Attempt to play immediately after loading
                playAudio();
            };
            
            const handleAudioEnded = () => {
                // No need to handle when looping
            };
            
            audio.addEventListener("canplaythrough", handleAudioLoaded);
            audio.addEventListener("ended", handleAudioEnded);
            
            // Try to start loading the audio
            audio.load();
            
            setAudioInitialized(true);
            
            // Clean up
            return () => {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.removeEventListener("canplaythrough", handleAudioLoaded);
                    audioRef.current.removeEventListener("ended", handleAudioEnded);
                }
            };
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    // Function to handle audio playback attempts
    const playAudio = async () => {
        if (!audioRef.current) return;
        
        try {
            // Play attempt 1 - standard method
            await audioRef.current.play();
            setAudioPlaying(true);
            startVisualEffects();
            
            // If user has interacted, try to unmute
            if (userInteracted) {
                audioRef.current.muted = false;
            } else {
                // Schedule automatic unmute attempts
                const unmuteTrier = setInterval(() => {
                    const windowWithAudio = window as WindowWithAudioContext;
                    const AudioContextClass = windowWithAudio.AudioContext || windowWithAudio.webkitAudioContext;
                    const context = new AudioContextClass!();
                    
                    // If context is running or user has interacted
                    if (context.state === 'running' || userInteracted) {
                        if (audioRef.current) {
                            // Try to unmute
                            audioRef.current.muted = false;
                            
                            // Ensure still playing (some browsers pause when changing mute state)
                            audioRef.current.play().catch(() => {});
                        }
                        clearInterval(unmuteTrier);
                    }
                    
                    // Cleanup context
                    if (context.close) context.close();
                }, 1000);
                
                // Clean up interval after 10 seconds max
                setTimeout(() => clearInterval(unmuteTrier), 10000);
            }
        } catch (error) {
            console.warn("First audio playback attempt failed:", error);
            
            // Play attempt 2 - try with user gesture simulation (may work in some browsers)
            try {
                // Create and clean up temporary button for simulating user interaction
                const tempButton = document.createElement('button');
                tempButton.style.display = 'none';
                document.body.appendChild(tempButton);
                tempButton.click();
                document.body.removeChild(tempButton);
                
                await audioRef.current.play();
                setAudioPlaying(true);
                startVisualEffects();
            } catch (secondError) {
                console.warn("Second audio playback attempt failed:", secondError);
                
                // Fall back to enabling visual effects without audio
                setAudioPlaying(false);
                startVisualEffects();
            }
        }
    };
    
    // Function to start all visual effects
    const startVisualEffects = () => {
        // Trigger glitch effect more frequently
        const glitchInterval = setInterval(() => {
            setGlitchText(true);
            setTimeout(() => setGlitchText(false), 200);
        }, 1000); // More frequent glitches
        
        // Simulate beats for screen dance effect - more intense
        const beatInterval = setInterval(() => {
            const intensity = Math.random() * 1.2 + 0.5; // Higher intensity between 0.5 and 1.7
            setBeatIntensity(intensity);
            
            // More frequent drop effects
            if (Math.random() > 0.85) {
                setDropActive(true);
                setTimeout(() => setDropActive(false), 2000);
            }
            
            setTimeout(() => setBeatIntensity(0), 150);
        }, 350); // Faster beat timing for more dancing
        
        // Color changing background - more rapid changes
        const bgInterval = setInterval(() => {
            const colors = ["bg-neutral", "bg-purple-900/40", "bg-blue-900/40", "bg-pink-900/40", 
                            "bg-red-900/40", "bg-green-900/40", "bg-cyan-900/40"];
            setBgColor(colors[Math.floor(Math.random() * colors.length)]);
        }, 3000); // Faster color changes
        
        // More frequent strobe light effect
        const strobeInterval = setInterval(() => {
            if (Math.random() > 0.6) { // More frequent strobes
                setStrobeActive(true);
                setTimeout(() => setStrobeActive(false), 100);
            }
        }, 800);
        
        return () => {
            clearInterval(glitchInterval);
            clearInterval(beatInterval);
            clearInterval(bgInterval);
            clearInterval(strobeInterval);
        };
    };
    
    // Start playing audio after user visits page - removed the old useEffect and added page visibility check
    useEffect(() => {
        if (isAudioLoaded && !audioPlaying) {
            playAudio();
            
            // Additionally try to detect page visibility changes
            const handleVisibilityChange = () => {
                if (!document.hidden && audioRef.current && !audioRef.current.paused) {
                    // Page became visible, try to play and unmute if possible
                    audioRef.current.play().catch(() => {});
                    
                    if (userInteracted) {
                        audioRef.current.muted = false;
                    }
                }
            };
            
            document.addEventListener('visibilitychange', handleVisibilityChange);
            
            return () => {
                document.removeEventListener('visibilitychange', handleVisibilityChange);
            };
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAudioLoaded, audioPlaying]);
    
    // Even without audio, keep some dancing animations
    useEffect(() => {
        if (danceMode && !audioPlaying) {
            // Simulate beats even without audio
            const danceBeatInterval = setInterval(() => {
                const intensity = Math.random() * 0.8 + 0.3;
                setBeatIntensity(intensity);
                
                if (Math.random() > 0.92) {
                    setDropActive(true);
                    setTimeout(() => setDropActive(false), 1500);
                }
                
                setTimeout(() => setBeatIntensity(0), 150);
            }, 400);
            
            return () => clearInterval(danceBeatInterval);
        }
    }, [danceMode, audioPlaying]);
    
    const toggleAudio = () => {
        if (audioRef.current) {
            if (audioPlaying) {
                audioRef.current.pause();
                setAudioPlaying(false);
            } else {
                audioRef.current.muted = false; // Ensure it's unmuted when manually playing
                audioRef.current.play()
                    .then(() => setAudioPlaying(true))
                    .catch(err => console.error("Couldn't toggle audio:", err));
                setUserInteracted(true); // Mark that user has interacted
            }
        }
    };

    // Enhanced screen dance/shake animation variants
    const screenAnimationVariants = {
        idle: {
            rotate: 0,
            scale: 1,
            x: 0,
            y: 0,
        },
        dancing: {
            rotate: beatIntensity * 2.5, // More rotation
            scale: 1 + (beatIntensity * 0.04), // More scaling
            x: beatIntensity * 8 * (Math.random() > 0.5 ? 1 : -1), // More horizontal movement
            y: beatIntensity * 6 * (Math.random() > 0.5 ? 1 : -1), // More vertical movement
        },
        drop: {
            rotate: [-3, 3, -3, 3, 0],
            scale: [1, 1.08, 1],
            x: [-15, 15, -15, 15, 0],
            y: [-8, 8, -8, 8, 0],
        }
    };

    // Generate random laser beams - more beams
    const generateLasers = () => {
        const laserCount = 12; // More lasers
        const lasers = [];
        
        for (let i = 0; i < laserCount; i++) {
            const startX = Math.random() * 100;
            const startY = Math.random() * 50;
            const width = Math.random() * 3 + 1; // Wider lasers
            const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            
            lasers.push(
                <motion.div
                    key={`laser-${i}`}
                    className="absolute h-screen opacity-50" // Higher opacity
                    style={{
                        left: `${startX}%`,
                        top: `${startY}%`,
                        width: `${width}px`,
                        backgroundColor: color,
                        transformOrigin: "top left",
                        transform: `rotate(${Math.random() * 180}deg)`,
                        filter: "blur(1px)",
                        boxShadow: `0 0 12px ${color}` // More glow
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ 
                        scaleY: dropActive || danceMode ? 1 : [0, 1, 0],
                        opacity: dropActive || danceMode ? 0.8 : [0, 0.8, 0]
                    }}
                    transition={{
                        duration: dropActive ? 1.8 : 0.8, // Faster animations
                        repeat: dropActive ? 0 : Infinity,
                        repeatType: "loop",
                        delay: i * 0.1
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
                className={`${bgColor} flex flex-col min-h-screen ${jetBrainsMono.className} transition-colors duration-500 overflow-hidden`} // Faster color transitions
                variants={screenAnimationVariants}
                animate={dropActive ? "drop" : ((audioPlaying || danceMode) ? "dancing" : "idle")}
                transition={dropActive 
                    ? { 
                        type: "tween", 
                        duration: 1.5, 
                        ease: "easeInOut" 
                      } 
                    : { 
                        type: "spring", 
                        stiffness: 400, // More springy
                        damping: 8 // Less damping for more bounce
                      }
                }
            >
                {/* Add global overflow hidden */}
                <style jsx global>{`
                    html, body {
                        overflow: hidden;
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        width: 100%;
                    }
                `}</style>
                
                {/* Laser beams - active even without audio if in dance mode */}
                {(audioPlaying || danceMode) && generateLasers()}
                
                {/* Overlay gradient for rave feel - more intense */}
                <div className="fixed inset-0 bg-gradient-to-b from-purple-900/30 to-blue-900/30 pointer-events-none" />
                
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
                                x: glitchText ? [0, -15, 8, -8, 0] : (beatIntensity ? [0, beatIntensity * 5, 0, -beatIntensity * 5, 0] : 0), // Text moves with beat
                                y: beatIntensity ? [0, -8 * beatIntensity, 0] : 0,
                                filter: glitchText ? "blur(3px)" : "blur(0px)",
                                textShadow: beatIntensity > 0.5 ? "0 0 12px rgba(255,0,255,0.9)" : "none", // More glow
                                scale: dropActive ? [1, 1.3, 1] : (beatIntensity ? [1, 1 + beatIntensity * 0.1, 1] : 1), // Text pulses with beat
                                skewX: beatIntensity > 0.8 ? [0, 2, -2, 0] : 0, // Text skews on strong beats
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
                                rotate: beatIntensity * (Math.random() > 0.5 ? 3 : -3), // More rotation
                                scale: dropActive ? [1, 1.15, 1] : (beatIntensity ? [1, 1 + beatIntensity * 0.08, 1] : 1), // Pulse with beat
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

                        {/* Enhanced visualizer with more bars and colors - more dynamic */}
                        <motion.div
                            className="mt-12 flex space-x-1" // Tighter spacing
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: 1,
                                scale: dropActive ? [1, 1.1, 1] : 1, // Entire visualizer scales on drops
                                rotate: beatIntensity > 0.9 ? [-1, 1, -1, 1, 0] : 0, // Entire visualizer slightly rotates on heavy beats
                            }}
                            transition={{ delay: 2, duration: 0.5 }}
                        >
                            {Array.from({ length: 30 }).map((_, i) => ( // More bars
                                <motion.div
                                    key={i}
                                    className="w-2 h-16 rounded-t-full"
                                    style={{
                                        backgroundColor: `hsl(${(i * 12) % 360}, 100%, 60%)`,
                                        boxShadow: (dropActive || beatIntensity > 0.7) ? 
                                            `0 0 12px hsl(${(i * 12) % 360}, 100%, 60%)` : 'none'
                                    }}
                                    animate={{
                                        height: (audioPlaying || danceMode) 
                                            ? [
                                                16, 
                                                Math.random() * 100 + 16, // Taller peaks
                                                Math.random() * 40 + 16, 
                                                Math.random() * 80 + 16, 
                                                16
                                              ] 
                                            : 16,
                                        scaleY: dropActive ? [1, 2.5, 1] : 1, // More dramatic on drops
                                        skewX: beatIntensity > 0.8 ? [-5, 5, 0] : 0, // Bars tilt on heavy beats
                                    }}
                                    transition={{
                                        duration: 0.3, // Faster animation
                                        repeat: (audioPlaying || danceMode) ? Infinity : 0,
                                        repeatType: "loop",
                                        delay: i * 0.015 // Faster wave effect
                                    }}
                                />
                            ))}
                        </motion.div>
                        
                        {/* Background elements that react to the beat - more particles */}
                        {(audioPlaying || danceMode) && Array.from({ length: dropActive ? 60 : 30 }).map((_, i) => (
                            <motion.div
                                key={`bg-${i}`}
                                className="fixed rounded-full bg-opacity-40" // More visible
                                style={{ 
                                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                                    width: Math.random() * 4 + 2, // Varied sizes
                                    height: Math.random() * 4 + 2,
                                }}
                                initial={{ 
                                    opacity: 0,
                                    x: Math.random() * viewport.width, 
                                    y: Math.random() * viewport.height 
                                }}
                                animate={{ 
                                    opacity: [0, 0.8 * beatIntensity, 0], // More visible
                                    scale: [0, 3 + (beatIntensity * 4), 0], // Larger scale
                                    x: Math.random() * viewport.width, 
                                    y: Math.random() * viewport.height,
                                    boxShadow: `0 0 ${dropActive ? 20 : 8}px hsl(${Math.random() * 360}, 100%, 70%)`
                                }}
                                transition={{
                                    duration: dropActive ? 0.8 : 1.5, // Faster animations
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    delay: i * (dropActive ? 0.03 : 0.08)
                                }}
                            />
                        ))}
                        
                        {/* Fog/Smoke effect - more dynamic */}
                        {(audioPlaying || danceMode) && (
                            <motion.div
                                className="fixed bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"
                                animate={{
                                    opacity: [0.1, 0.4, 0.1], // More visible
                                    height: dropActive ? ["30vh", "60vh", "30vh"] : ["20vh", "40vh", "20vh"] // More dramatic
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                        )}
                        
                        {/* New floating elements that bounce with the beat */}
                        {(audioPlaying || danceMode) && Array.from({ length: 5 }).map((_, i) => (
                            <motion.div
                                key={`floating-${i}`}
                                className="fixed text-4xl font-bold text-primary opacity-20 pointer-events-none"
                                style={{
                                    textShadow: "0 0 10px rgba(255,255,255,0.8)"
                                }}
                                initial={{
                                    x: Math.random() * viewport.width,
                                    y: Math.random() * viewport.height,
                                    rotate: Math.random() * 30 - 15
                                }}
                                animate={{
                                    y: [
                                        Math.random() * viewport.height,
                                        Math.random() * viewport.height - 100,
                                        Math.random() * viewport.height
                                    ],
                                    x: [
                                        Math.random() * viewport.width,
                                        Math.random() * viewport.width - 100,
                                        Math.random() * viewport.width
                                    ],
                                    rotate: [0, 10, -10, 0],
                                    scale: beatIntensity > 0.7 ? [1, 1.2, 1] : 1
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                404
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                
                {/* Floor grid - rave floor effect - more dynamic */}
                {(audioPlaying || danceMode) && (
                    <div className="fixed bottom-0 inset-x-0 h-[30vh] perspective-[800px] overflow-hidden">
                        <motion.div 
                            className="w-full h-[200%] bg-gradient-to-b from-transparent to-black/40 grid grid-cols-12 grid-rows-24" // More grid lines
                            style={{
                                transformOrigin: "center bottom",
                                transform: "rotateX(60deg)",
                                backgroundSize: "80px 80px", // Smaller grid
                                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), 
                                                 linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`
                            }}
                            animate={{
                                backgroundPosition: ["0px 0px", "0px 80px"], // Faster movement
                                rotateX: dropActive ? [60, 65, 60] : 60, // Floor tilts during drops
                                scale: beatIntensity > 0.8 ? [1, 1.05, 1] : 1, // Floor pulses on heavy beats
                            }}
                            transition={{
                                duration: 2.5, // Faster animation
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {(dropActive || beatIntensity > 0.6) && Array.from({ length: 15 }).map((_, i) => (
                                <motion.div
                                    key={`floor-light-${i}`}
                                    className="absolute rounded-full"
                                    style={{
                                        width: Math.random() * 120 + 60, // Larger lights
                                        height: Math.random() * 120 + 60,
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                                        filter: "blur(50px)", // More blur
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ 
                                        opacity: [0, 0.4, 0], // More visible
                                        scale: [0, 1.5, 0] // Larger scale
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.15
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