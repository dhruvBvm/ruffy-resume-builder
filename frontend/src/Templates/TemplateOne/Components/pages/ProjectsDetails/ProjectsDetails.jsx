import { useCallback, useContext } from 'react'
import './ProjectsDetails.scss'

import ProjectDetailsForm from '../../Form/ProjectDetailsForm/ProjectDetailsForm'
import Button from '../../../../../Components/Molecules/Button/Button'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { TemplateOneContext } from '../../../TemplateOne'
import { config } from '../../../State/config'

const ProjectsDetails = () => {
  const { state, dispatch } = useContext(TemplateOneContext)

  const handleAdd = useCallback(() => {
    dispatch({
      type: 'ADD_FORM',
      payload: {
        objectName: 'projectsDetails',
      },
    })
  }, [])

  return (
    <div className="projects-details">
      <h3>Showcase Your Projects</h3>
      <p>
        Highlight your best work, including personal side projects, academic
        assignments, or professional case studies.
      </p>
      <a href="" className="projects-details__policy">
        Tips for writing high-impact project descriptions
      </a>
      {state.projectsDetails.map((project) => {
        return <ProjectDetailsForm key={project.id} project={project} />
      })}
      {state.projectsDetails.length === config.limitation['projectsDetails'] ? (
        <p className="projects-limit">
          You can not add more than {config.limitation['projectsDetails']}{' '}
          Projects.
        </p>
      ) : (
        <Button onClick={handleAdd}>
          <FaRegSquarePlus />
          Add More Project
        </Button>
      )}
    </div>
  )
}

export default ProjectsDetails
