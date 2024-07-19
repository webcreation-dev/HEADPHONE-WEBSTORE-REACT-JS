import React from 'react'
import Headphone1 from  '../../assets/headphones/headphone.png'
import Headphone2 from  '../../assets/headphones/headphone-2.png'
import Headphone3 from  '../../assets/headphones/headphone-3.png'

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

  return (
    <>
        <section className='bg-brandDark text-white font-varela'>
            
            <div className='container grid grid-cols-1 
            md:grid-cols-1 min-h-[700px]'>
                
                {/* ________ Headphone Info ________ */}
                <div className='flex flex-col justify-center py-14 md:py-0
                xl:max-w-[500px]' >

                    <div className='space-y-5 text-center md:text-left' >
                        <h1 className='text-3xl lg:text-6xl font-bold font-varela'>
                            {activeData.title}
                        </h1>
                        <p className='text-sm leading-loose text-white/80'>
                            {activeData.subtitle}
                        </p>
                        <button style={{ backgroundColor: activeData.bgColor }}
                        className='px-4 py-2 inline-block rounded-sm font-normal'
                        >
                            Buy and Listen
                        </button>

                        {/* ________ HeadPhone List Separator ________ */}
                        <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                        </div>

                        {/* ________ HeadPhone List Switcher ________ */}
                        <div className='grid grid-cols-3 gap-10'>
                            {HeadphoneData.map((item) => {
                                return (
                                    <div className='grid grid-cols-2 place-items-center cursor-pointer' >
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
                                )
                            })}
                        </div>

                    </div>  
                </div>

                {/* ________ Hero Image ________ */}

                {/* ________ WhatsApp Icon ________ */}
            </div>

        </section>
    </>
  )
}

export default Hero
