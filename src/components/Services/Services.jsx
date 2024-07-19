import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'

import Icon1 from  '../../assets/icons/obj-1.png'
import Icon2 from  '../../assets/icons/obj-2.png'
import Icon3 from  '../../assets/icons/obj-3.png'

const fadeUp = (delay) => {
    return {
        hidden: {
            y: 100,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
            }
        },
    }
}

const ServicesData = [
    {
        id: 1,
        title: 'Security',
        icon: Icon1,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recusandae, iusto minima ad ut id eos iusto minima ad ut it eos ad ut it eos.',
        delay: 0.5,
    },
    {
        id: 2,
        title: 'Guarantee',
        icon:  Icon2,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recusandae, iusto minima ad ut id eos iusto minima ad ut it eos ad ut it eos.',
        delay: 0.8,
    },
    {
        id: 3,
        title: 'Affordability',
        icon: Icon3,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Recusandae, iusto minima ad ut id eos iusto minima ad ut it eos ad ut it eos.',
        delay: 1.1,
    }
]

const Services = () => {
  return (
    <>
    
    <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">

        <motion.h1 
            variants={fadeUp(0.2)}
            initial='hidden'
            whileInView='show' 
            className='text-3xl font-bold text-center pb-10'>Services</motion.h1>

            <div className="grid grid-ols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {
                ServicesData.map((item) => (
                <UpdateFollower
                    mouseOptions={
                        {
                            backgroundColor: 'white',
                            zIndex: '9999',
                            followSpeed: 0.5,
                            scale: 5,
                            rotate: 720,
                            mixBlendMode: 'darken',
                            backgroundElement: (
                                <motion.div>
                                    <img src={item.icon} alt="" />
                                </motion.div>
                            ),
                        }
                    }
                >
                    <motion.div 
                        variants={fadeUp(item.delay)}
                        initial='hidden'
                        whileInView='show'  className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-lg bg-white ">
                        
                            <img src={item.icon} alt="icon" className='w-[100px] mb-4' />
                        

                        <div className="text-center space-y-2 ">
                            <h1 className='text-2xl font-bold' >{item.title}</h1>
                            <p className="text-center text-sm text-black/75">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                </UpdateFollower>
                ))
            }
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Services
