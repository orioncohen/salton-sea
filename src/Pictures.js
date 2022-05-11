import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';



const Demo3 = () => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);

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
            style={{ marginTop: 400 }}
        >
            <div style={{ position: 'sticky', top: 0, border: '1px solid orchid' }}>
                I'm sticky. The current triggered step index is: {currentStepIndex}
            </div>
            <Scrollama
                onStepEnter={onStepEnter}
                offset={0.4}
                threshold={1}
                debug
            >
                {[1, 2, 3, 4].map((_, stepIndex) => (
                    <Step data={stepIndex} key={stepIndex}>
                        <div
                            style={{
                                margin: '50vh 0',
                                border: '1px solid gray',
                                opacity: currentStepIndex === stepIndex ? 1 : 0.2,
                            }}
                        >
                            I'm a Scrollama Step of index {stepIndex}
                        </div>
                    </Step>
                ))}
            </Scrollama>
        </div>
    );
};

export default Demo3;