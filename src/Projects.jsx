import React from 'react'
import { fetchProjects } from './fetchProjects'

const Projects = () => {
  const { loading, projects } = fetchProjects()
  if (loading) {
    return (
      <section className="projects">
        <h2>loading........</h2>
      </section>
    )
  }
  return (
    <section className="projects">
      <div className="title">
        <h2>My projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="project-center">
        {projects.map((project) => {
          const { id, img, url, title } = project
          return (
            <a
              href={url}
              key={id}
              target="_blanc"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt="project" className="img" />
              <h4>{title[0]}</h4>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
