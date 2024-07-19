import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { UpdateFollower } from 'react-mouse-follower'
import { delay, AnimatePresence, easeInOut, motion } from 'framer-motion'


import Headphone1 from  '../../assets/headphones/headphone.png'
import Headphone2 from  '../../assets/headphones/headphone-2.png'
import Headphone3 from  '../../assets/headphones/headphone-3.png'

const fadeUp = (delay) => {
    return {
        hidden: {
            y: 100,
            opacity: 0,
            scale: 0.5
        },
        show: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut
            }
        },
        exit : {
            y: 50,
            opacity: 0,
            scale: 0.5,
            transition: {
                duration: 0.5,
                ease: easeInOut
            }
        }
    }
}

const HeadphoneData = [
    {
        id: 1,
        image: Headphone1,
        title: 'Headphone Wireless',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recusandae, iusto minima ad ut id eos iusto minima ad ut it eos ad ut it eos.',
        price: '$100',
        modal: 'Modal Brown',
        bgColor: '#8b5958',
    },
    {
        id: 2,
        image: Headphone2,
        title: 'Headphone Wireless 2',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recusandae, iusto minima ad ut id eos iusto minima ad ut it eos ad ut it eos.',
        price: '$50',
        modal: 'Lime Green',
        bgColor: '#638153',
    },
    {
        id: 3,
        image: Headphone3,
        title: 'Headphone Wireless',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recusandae, iusto minima ad ut id eos iusto minima ad ut it eos ad ut it eos.',
        price: '$100',
        modal: 'Ocean Blue',
        bgColor: '#5d818c',
    }
]

const Hero = () => {

    const [activeData, setActiveData] = React.useState(HeadphoneData[0])

    const handleActiveData = (data) => {   
        setActiveData(data)
    }

  return (
    <>
        <section className='bg-brandDark text-white font-varela'>
            
            <div className='container grid grid-cols-1 
            md:grid-cols-2 min-h-[700px]'> 
                
                {/* ________ Headphone Info ________ */}
                <div className='flex flex-col justify-center py-14 md:py-0 
                xl:max-w-[500px]' >

                    <div className='space-y-5 text-center md:text-left' >
                        
                        <AnimatePresence mode="wait">

                            <UpdateFollower
                                    mouseOptions={
                                    {
                                        backgroundColor: 'white',
                                        zIndex: '9999',
                                        followSpeed: 0.5,
                                        rotate: -720,
                                        mixBlendMode: 'difference',
                                        scale: 10
                                    }
                                }
                            >
                                <motion.h1 
                                key={activeData.id}
                                variants={fadeUp(0.2)}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                className='text-3xl lg:text-6xl font-bold font-varela'>
                                    {activeData.title}
                                </motion.h1>

                            </UpdateFollower>
                            
                        </AnimatePresence>
                        
                        <AnimatePresence mode="wait">
                            <motion.p 
                            key={activeData.id}
                            variants={fadeUp(0.3)}
                            initial='hidden'
                            animate='show'
                            exit='exit'
                            className='text-sm leading-loose text-white/80'>
                                {activeData.subtitle}
                            </motion.p>
                        </AnimatePresence>

                         
                        <AnimatePresence mode="wait">
                            <UpdateFollower
                                    mouseOptions={
                                    {
                                        backgroundColor: activeData.bgColor,
                                        zIndex: '9999',
                                        followSpeed: 0.5,
                                        rotate: -720,
                                        mixBlendMode: 'difference',
                                        scale: 10,
                                        backgroundElement: (
                                            <div>
                                                <img src={activeData.image} alt="" />
                                            </div>
                                        ),
                                    }
                                }
                            >

                                <motion.button 
                                key={activeData.id}
                                variants={fadeUp(0.3)}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                                style={{ backgroundColor: activeData.bgColor }}
                                    className='px-4 py-2 inline-block rounded-sm font-normal'
                                >
                                Buy and Listen
                                </motion.button>
                            </UpdateFollower>
                        </AnimatePresence>

                        {/* ________ HeadPhone List Separator ________ */}
                         <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                        </div>

                        {/* ________ HeadPhone List Switcher ________ */}
                        <div className='grid grid-cols-3 gap-10'>
                            {HeadphoneData.map((item) => {
                                return (
                                    <UpdateFollower
                                        mouseOptions={
                                            {
                                                backgroundColor: item.bgColor,
                                                zIndex: '9999',
                                                followSpeed: 0.5,
                                                scale: 5,
                                                text: "View Details",
                                                textFontSize: '3px',
                                            }
                                        }
                                    >
                                        <div 
                                        key={item.id}
                                        onClick={() => handleActiveData(item)}
                                        className='grid grid-cols-2 place-items-center cursor-pointer' >
                                            <div>
                                                <img src={item.image} alt="" 
                                                className='w-[200px]'/>
                                            </div>
                                            <div className='space-y-2'>
                                                <p className='text-base font-blod'>
                                                    {item.price}
                                                </p>
                                                <p className='text-xs font-normal text-nowrap'>
                                                    {item.modal}
                                                </p>
                                            </div>
                                        </div>
                                    </UpdateFollower>
                                )
                            })}
                        </div>

                    </div>  
                </div>

                {/* ________ Hero Image ________ */}

                <div className='flex flex-col justify-end items-center' >
                    <AnimatePresence mode="wait">

                    <motion.img 
                        key={activeData.id}
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                        exit= {{ opacity: 0, y: 100, scale: 0.9, transition: { duration: 0.2 } } }
                        src={ activeData.image } alt=""
                        className='w-[300px] md:w-[400px] xl:w-[550px]' />

                    </AnimatePresence>
                </div>

                {/* ________ WhatsApp Icon ________ */}

                <FaWhatsapp className='text-3xl text-white fixed bottom-10 right-10
                hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference' />
            </div>

        </section>
    </>
  )
}

export default Hero
