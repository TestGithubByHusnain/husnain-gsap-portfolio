import AnimatedHeaderSection from "../components/AnimatedHeaderSection"


const Services = () => {
  const text = `I build secure, high-performance full-stack apps
    with smooth UX to drive growth 
    not headaches.`;
  return (
   <section id="services" className="min-h-screen bg-black rounded-t-4xl">
<AnimatedHeaderSection 
subTitle={"Behind the scene, Beyond the screen"}
title={"Service"}
text={text}
textColor={"text-white"}
withScrollTrigger={true}
/>
   </section>
  )
}

export default Services
