import React from 'react'
import StrategySection from './StrategySection/StrategySection'
import CardSection from "./CardSection/CardSection"
import Contribution from './Contribution/Contribution'
import Quote from './Quote/Quote'
import Mission from './Mission/Mission'

function LandingPage() {
    return (
        <>
            <StrategySection />
            <CardSection />
            <Contribution /> 
            <Quote />
            <Mission />
        </>
    )
}

export default LandingPage
