import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import SideNav from "@/components/SideNav";
import projectDataArr from '../../lib/project-data.json';
import experienceDataArr from '../../lib/experience-data.json';


export default function Home() {
  return (
    <div className="flex container mx-auto px-10 lg:gap-12 flex-col lg:flex-row justify-center">
      <SideNav />
      <main className="basis-6/12 lg:pt-10 pb-10">
        <section className="pb-10 lg:scroll-mt-10" id="about-me-section">
          <h2 className="text-xl font-semibold mb-4 lg:static sticky top-0 text-slate-300 bg-slate-900 py-2">About Me</h2>
          <p className="text-lg text-slate-400">Level-headed, easy going, and inquisitive, I’m a Full-Stack Web Developer, Boot Camp Instructor and small business owner, who leans toward back-end work, is successful in collaborative team environments and enjoys producing creative long-term solutions. I have proven experience developing web applications using all technologies in SERN and MERN stacks.</p>
        </section>
        <section className="pb-10 lg:scroll-mt-10" id="projects-section">
          <h2 className="text-xl font-semibold mb-4 lg:static sticky top-0 text-slate-300 bg-slate-900 py-2">Projects</h2>
          <div className="flex flex-col gap-12">
            {projectDataArr.map((projectData) => <ProjectCard projectData={projectData} />)}
          </div>
        </section>
        <section className="pb-10 lg:scroll-mt-10" id="experience-section">
          <h2 className="text-xl font-semibold mb-4 lg:static sticky top-0 text-slate-300 bg-slate-900 py-2">Experience</h2>
          <div className="flex flex-col gap-12">
            {experienceDataArr.map((experienceData) => <ExperienceCard experienceData={experienceData} />)}
          </div>
        </section>
      </main>
    </div>
  )
}
