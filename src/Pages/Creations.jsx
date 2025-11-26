import React from "react";
import ScrollVelocity from "../Components/ScrollVelocity";

function Creations() {
    const velocity = 150; //scroll speed

    return (
        <section className='h-screen bg-white overflow-y-hidden '>
            <ScrollVelocity
            texts={['MY CREATIONS ★']}
            velocity={velocity}
            className="custom-scroll-text text-black"
            />

            
        </section>
    );
}

export default Creations;