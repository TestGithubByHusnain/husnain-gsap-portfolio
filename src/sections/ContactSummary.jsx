import { useRef } from "react"
import Marquee from "../components/Marquee";


const ContactSummary = () => {
    const containerRef=useRef(null);
      const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];

  return (
 <section ref={containerRef} className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16">
<Marquee items={items}/>
  <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          “ Let’s build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-gold">together</span> “
        </p>
      </div>
      {/* Marquee */}
 </section>
  )
}

export default ContactSummary
