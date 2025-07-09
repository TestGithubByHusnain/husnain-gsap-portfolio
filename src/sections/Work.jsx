import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import { projects } from "../constants"
import { Icon } from "@iconify/react/dist/iconify.js";

const Work = () => {
      const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;
  return (
 <section id="work" className="flex flex-col min-h-screen ">
<AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light">
      {projects.map((project, index) => {
        <div key={project.id} id="project" className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-8 ">
            {/* title */}
            <div>
                <h2 className="lg:text-[32px] text-[26px] leading-none">
                    {project.name}
                </h2>
                   <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>
        </div>
      })}
      </div>
 </section>
  )
}

export default Work
