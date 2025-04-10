/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import obj from "@/assests/obj1.png"
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { section } from "framer-motion/client"
import { useEffect } from "react"
import Image from 'next/image'
import { FiArrowRight } from "react-icons/fi"


const COLORS_TOP = ["#13FFAA","#1E67C6","#CE84CF","#DD335C"]

export const Hero = () => {

    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    return (
        <motion.section
            style={{
                backgroundImage
            }}
            className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
            >
                <div className="z-10 flex flex-col items-center">
                    
                    <h1 className="text-white/40 text-5xl md:text-7xl font-black">Hi, I&apos;m</h1>
                    <h1 className="max-w-3x1 bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight 
                    text-transparent text-5xl md:text-7xl">
                        Armaan Jaganath
                    </h1>
                    
                    <div className="flex flex-col items-center space-y-6"> {/* spacing between sections */}
                    <Image
                        src="/images/profilepic.png"
                        alt="profile pic"
                        width={250}
                        height={250}
                    />

                    <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-3 mb-4">
                        <Image
                        src="/images/Apple_Intelligence.png"
                        alt="object"
                        width={30}
                        height={30}
                        className="rounded-2xl"
                        />
                        <p className="font-medium">Computer Science Graduate</p>
                    </div>
                    </div>
                    <p className="my-6 max-w-xl text-center">BSc. Computer Computer Science and Information Technology UKZN</p>


                                        <motion.button 
                    style={{ border, boxShadow }} 
                    whileHover={{ scale: 1.015 }} 
                    whileTap={{ scale: 0.985 }} 
                    className="flex w-fit items-center gap-2 rounded-full px-4 py-2 mt-6"
                    >
                    Download CV <FiArrowRight />
                    </motion.button>
  

        </div>


        </motion.section>
    )
}