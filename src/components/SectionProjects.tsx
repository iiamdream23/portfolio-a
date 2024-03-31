import React from 'react';
import ProjectByte2 from './ProjectByte2';
import ProjectCar from './ProjectCar';


const SectionProjects = () => {
  return (
    <section className='w-full hidden md:flex flex-col gap-8 bg-slate-100'>
      <ProjectByte2 />
      <ProjectCar />      
    </section>
  )
}

export default SectionProjects