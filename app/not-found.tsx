"use client";

import NavBar from "@/components/NavBar";
import { JetBrains_Mono } from "next/font/google";
import TypewriterComponent from "typewriter-effect";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function NotFound() {
    return (
        <main className={`bg-neutral flex flex-col min-h-screen ${jetBrainsMono.className}`}>
            <NavBar />
            <div className="h-28" />
            <div className="flex justify-center items-center flex-grow h-full">
                <TypewriterComponent
                options={{
                    wrapperClassName: "text-3xl",
                    cursorClassName: "text-3xl",
                    cursor: "|",
                    delay: 50,
                    autoStart: true,
                }}
                onInit={(typewriter) => {
                    typewriter.typeString("404 Not Found...").callFunction((element) => {
                        // Remove this from view once finished typing
                        element.elements.cursor.style.display = "none";
                    }).start();
                }} />
            </div>
        </main>
    )
}