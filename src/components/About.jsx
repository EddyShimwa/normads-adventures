import React from "react";
import useScrollReveal from "../utils/useScrollReveal";

const About = () => {
    useScrollReveal(".about");
    return (
        <div class="about flex justify-center items-center h-[60vh] bg-white text-black p-8 rounded-lg w-full text-center">
       <div className="w-1/2">
       <h2 class="text-xl font-bold mb-4">About Us</h2>
  <p class="text-base leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ipsum id turpis commodo convallis. Donec quis nunc non nisi efficitur viverra. Nullam eu nisi vitae lacus bibendum bibendum nec non lorem. Sed sollicitudin justo sit amet mauris fermentum vehicula.
    llentesque habitant morbi tristique sen et netus et malesuada fames ac turpis egestas . Nullam eu nisi vitae lacus bibendum bibendum nec non lorem. Sed sollicitudin justo sit amet mauris fermentum vehicula.
  </p>
       </div>
</div>
    )
}

export default About;