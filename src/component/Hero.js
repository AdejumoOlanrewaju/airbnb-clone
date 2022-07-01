import React from "react"
import Group from "../images/Group 77 (1).png"
 
export default function Hero () {
    return (
        <section className = "hero">
            <img src = {Group} alt = "Group" className = "group-logo"/>
            <h1 className = "hero-header">Online Experiences</h1>
            <p className = "hero-text">
                Join unique interactive activities led by
                one-of-a-kind hosts-all without
                leaving  home.  
            </p>
        </section>
    )
}