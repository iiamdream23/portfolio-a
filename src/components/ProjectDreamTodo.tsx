import React from 'react'

const ProjectDreamTodo = () => {
  return (
    <section className="pt-12 bg-slate-100 w-full grid grid-cols-2 gap-8">
      <div className="flex justify-end ">
      <div className="left-div bg-blue-400 flex items-center justify-center rounded-2xl w-[400px] h-[300px]">
        Text Todo Project
      </div>
      </div>
      <div className="flex justifyend ">
      <div className="right-div rounded-2xl flex items-center justify-center bg-red-400 w-[400px] h-[300px]">
        Thumbnail Todo Project
      </div>
      </div>
    </section>
  )
}

export default ProjectDreamTodo