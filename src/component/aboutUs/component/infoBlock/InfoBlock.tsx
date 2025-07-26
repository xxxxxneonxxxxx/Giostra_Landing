import React,{useState,useRef,useEffect} from 'react'
import {aboutInfo} from '../../../../config/constType'
import flowerWhite from './img/flowerWhite.svg'
import flowerGray from './img/flowerGray.svg'
import {motion,AnimatePresence,useAnimation} from 'framer-motion'
import './infoBlock.css'
export default function InfoBlock() {
    const [activId,setActivId] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActivId(prev => (prev + 1) % 4);
        }, 3000); // или 1000

        return () => clearInterval(interval);
    }, []);
    const flowerGrayAni=useRef([
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation()
    ]).current;
    const flowerWhiteAni=useRef([
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation()
    ]).current;
    useEffect(() => {
        const anims = [
            { x: "60%",y:'0%' },
            { x: "-30%",y:'-10%' },
            { x: "60%",y:'0%' },
            { x: '0%',y:'0%' },
        ];
        flowerGrayAni[activId].start({
            x: [anims[activId===0?3:activId-1].x,anims[activId].x],
            y: [anims[activId===0?3:activId-1].y,anims[activId].y],

            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        });
    }, [activId]);
    useEffect(() => {
        const anims = [
            { x: '-60%' },
            { x: '-10%' },
            { x: "-60%" },
            { x: '0%'},
        ];
        flowerWhiteAni[activId].start({
            x: [anims[activId===0?3:activId-1].x,anims[activId].x],
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        });
    }, [activId]);
    return (
        <div className="about-us__info">
            <div className="about-us__info-item">
                <div className="about-us__info-item__backgrounds">
                    <motion.img
                        src={flowerGray}
                        className="flower flower--gray"
                        animate={flowerGrayAni[activId]}
                    />
                    <motion.img
                        src={flowerWhite}
                        className="flower flower--white"
                        animate={flowerWhiteAni[activId]}
                    />
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activId}
                        className="about-us__item-info"
                    >
                        <motion.label
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: [-250,-248,20,-10,0] }}
                            exit={{ opacity: 0, x: -250 }}
                            transition={{ duration: 0.6, ease:'easeInOut' }}
                        >{aboutInfo[activId].name}</motion.label>
                        <motion.img
                            src={aboutInfo[activId].bg}
                            initial={{ opacity: 0, y: -200 }}
                            animate={{ opacity: 1, y: [-200,-180,20,-10,0],x: 0  }}
                            exit={{ opacity: 0, y: 200, x: 0 }}
                            transition={{ duration: 0.6, ease:'easeInOut' }}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}