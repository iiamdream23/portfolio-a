import MSectionAbout from "@/components/MSectionAbout";
import MSectionContact from "@/components/MSectionContact";
import MSectionMe from "@/components/MSectionMe";
import MSectionPortFolio from "@/components/MSectionPortFolio";
import MSectionProjects from "@/components/MSectionProjects";
import SectionAbout2 from "@/components/SectionAbout2";
import SectionContact2 from "@/components/SectionContact2";
import SectionMe2 from "@/components/SectionMe2";
import SectionPortFolio2 from "@/components/SectionPortFolio2";
import SectionProjects from "@/components/SectionProjects";

export default function Home() {
  return (
    <main className="w-screen">
      <SectionMe2 />
      <MSectionMe />
      <SectionAbout2 />
      <MSectionAbout />
      <SectionPortFolio2 />
      <MSectionPortFolio />
      <SectionProjects />
      <MSectionProjects />
      <SectionContact2 />
      <MSectionContact />      
    </main>
  );
}
