import React, { useEffect, useState } from "react";
import "./trackOrder.css";
import { TiTick } from "react-icons/ti";
const TracKOrder = ({ close, status }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const steps = [
        { step: "Ordered", date: "7 Feb" },
        { step: "Shipped", date: "12 Feb" },
        { step: "Out For Delivery", date: "13 Feb" },
        { step: "Delivered", date: "18 Feb" },
    ]


    useEffect(() => {
        switch (status) {
            case 'ordered':
                setCurrentStep(2);
                break;
            case 'shipped':
                setCurrentStep(3);
                break;
            case 'pickedup':
                setCurrentStep(4);
                break;
            case 'delivered':
                setCurrentStep(5);
                break;
            default:
                setCurrentStep(3);
        }
    }, [])




    return (
        <>
            <div className="main_container" onClick={(e) => e.stopPropagation()}>
                <div className="container">
                    {steps?.map((data, i) => (
                        <div
                            key={i}
                            className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                                } `}
                        >
                            <p style={{ color: "black", margin: ".5rem" }}>{data.step}</p>
                            <div className="step">
                                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                            </div>
                            <p key={i} style={{ color: "black", margin: ".5rem" }}>
                                {data.date}
                            </p>
                        </div>
                    ))}
                </div>
                {/* {!complete && (
                    <button
                        className="btn"
                        onClick={() => {
                            currentStep === steps.length
                                ? setComplete(true)
                                : setCurrentStep((prev) => prev + 1);
                        }}
                    >
                        {currentStep === steps.length ? "Finish" : "Next"}
                    </button>
                )} */}
            </div>
        </>
    );
};

export default TracKOrder;