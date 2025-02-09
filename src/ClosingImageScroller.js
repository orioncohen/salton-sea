import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import { createUseStyles } from 'react-jss';
import impoverished from './assets/new_pictures/impoverished.jpeg'
import zoomOut from './assets/new_pictures/zoomOut.jpeg'
import plant from './assets/plant.jpeg'
import './css/styles.css'
import ImagesDiv from "./ImagesDiv";

import 'typeface-lato'

const useStyles = createUseStyles({
    stepsContainer: {
        overflow: 'auto',
        paddingBottom: '0vh',
        marginBottom: '0vh',
    },
    step: {
        position: 'relative',
        marginBottom: '80vh',
        // paddingBottom: '40vh',
        marginTop: '0vh',
        display: 'flex',
        justifyContent: 'center',
    },
    stepText: {
        backgroundColor: 'rgba(255, 255, 255, 0.99)',
        maxWidth: '510px',
        textAlign: 'center',
        color: '#111',
        padding: '1.3rem',
        fontSize: '1.3rem',
        fontFamily: 'lato',
        fontWeight: 400,
        lineHeight: '1.9rem',

        // Fixes a problem in Safari where background color is transparent
        transform: 'translate3d(0, 0, 0)',
    },
    fullscreen: {
        position: 'sticky',
        padding: '0',
        margin: '0',
        height: '100vh',
        minWidth: '100vw',
        minHeight: '100vh',
        transition: '1s',
        zIndex: '-100',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: 'darkgray',
    }
});


const ClosingImageScroller = () => {
    // const imagesToBePreloaded = [saltonSeaMotel]
    // imagesToBePreloaded.forEach(image => { new Image().src = image })
    const images = [
        impoverished,
        impoverished,
        plant,
        plant,
        zoomOut,
    ]
    images.forEach(image => { new Image().src = image })
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const classes = useStyles()
    const copyText = [
        'Lithium extraction could transform the high-poverty communities surrounding the Sea, which have ' +
        'some of the highest unemployment rates in the state.',
        'A successful lithium industry could also produce the long-missing resources needed to clean up the ' +
        'Salton Sea and return it to its former glory.',
        'Some experts say the California “white gold rush” is already on. Companies like General Motors and ' +
        'Berkshire Hathaway have already announced investments in closed-loop, geothermal lithium extraction operations.',
        'Meanwhile, state lawmakers have proposed hundreds of millions in tax incentives for lithium entrepreneurship ' +
        'and research, with ambitious plans for California to meet one-third of demand within a few years.',
        'But can these investments be made cleanly and equitably? Time will tell which priorities state, business, ' +
        'and community leaders will choose.'
    ]
    // This callback fires when a Step hits the offset threshold. It receives the
    // data prop of the step, which in this demo stores the index of the step.
    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
    };
    // const onStepEnter = (e) => {
    //     const { data } = e;
    //     setCurrentStepIndex(data);
    // };

    return (
        <div
            // style={{ margin: '50vh 0', border: '2px dashed skyblue' }}
            style={{ marginTop: 0 }}
        >
            <div style={{
                position: 'sticky',
                top: 0,
                // border: '1px solid',
                width: '100vw',
                height: '100vh',
            }}>

                <ImagesDiv index={currentStepIndex} images={images} style={classes.fullscreen}/>
            </div>
            <div className={classes.stepsContainer}>
                <Scrollama
                    onStepEnter={onStepEnter}
                    offset={0.6}
                    threshold={1}
                    // debug
                >
                    {copyText.map((copy, stepIndex) => (
                        <Step data={stepIndex} key={stepIndex}>
                            <div
                                className={classes.step}
                                style={{
                                    opacity: 0.9,
                                    marginBottom: stepIndex === 4 ? '40vh' : '80vh'
                                }}
                            >
                                <p className={classes.stepText}>
                                    {copy}
                                </p>
                            </div>
                        </Step>
                    ))}
                </Scrollama>
            </div>
        </div>
    );
};

export default ClosingImageScroller;
