import React, { useCallback, useContext } from 'react'
import './ProjectDetailsForm.scss'

import FormRow from '../../../../../Components/Molecules/FormRow/FormRow'
import FormInput from '../../../../../Components/Molecules/FormInput/FormInput'
import FormTextArea from '../../../../../Components/Molecules/FormTextArea/FormTextArea'
import Button from '../../../../../Components/Molecules/Button/Button'
import { IoRemoveCircleSharp } from 'react-icons/io5'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { TemplateOneContext } from '../../../TemplateOne'
import { AiOutlineCloseCircle } from 'react-icons/ai'
// Import your helper
import { checkArrayErrorStack } from '../../../../../utils/helpers/checkArrayErrorStack'

const ProjectDetailsForm = ({ project }) => {
  const { state, dispatch } = useContext(TemplateOneContext)

  const handleRemove = useCallback(
    () => {
      dispatch({
        type: 'REMOVE_FORM',
        payload: {
          objectName: 'projectsDetails',
          id : project.id,
        },
      })
    },
    [dispatch, project.id],
  )

  const handleChange = useCallback(
    (e, id = project.id) => {
      dispatch({
        type: 'UPDATE_ARRAY_OF_OBJECTS_DETAILS',
        payload: {
          name: e.target.name,
          value: e.target.value,
          objectName: 'projectsDetails',
          id: id,
        },
      })
    },
    [dispatch, project.id],
  )

  return (
    <>
      <form className="project-details-form " autoComplete="off">
        <div className="project-details">
          <h1 className="project-header">Project Details</h1>
          {state.projectsDetails.length > 1 && (
            <Button onClick={handleRemove}>
              <IoRemoveCircleSharp />
              Remove Project
            </Button>
          )}
        </div>
        <FormRow>
          <FormInput
            text={'Project Name'}
            htmlFor={'projectName'}
            type={'text'}
            value={project.projectName}
            name="projectName"
            onChange={handleChange}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(state.errorStack, 'projectName', project.id)
                : false
            }
          />
          <FormInput
            text={'Your Role'}
            htmlFor={'projectRole'}
            type={'text'}
            value={project.projectRole}
            name="projectRole"
            onChange={handleChange}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(state.errorStack, 'projectRole', project.id)
                : false
            }
          />
        </FormRow>
        <FormRow>
          <h1 className="tech-stack-header">
            🧑‍💻Tech Stack | Enter the tech Stack that you have Used
          </h1>
          <div className="project-tech-stack">
            {project.techStack.map((tech, index) => {
              return (
                <div key={index}>
                  <span>{tech}</span>
                  <Button
                    type="button"
                    onClick={() => {
                      dispatch({
                        type: 'REMOVE_TECH_STACK',
                        payload: {
                          id: project.id,
                          stackName: tech,
                        },
                      })
                    }}
                  >
                    <AiOutlineCloseCircle />
                  </Button>
                </div>
              )
            })}
          </div>
          <div className="tech-stack-input">
            <FormInput
              text={' Add List of Tech stack that you have used in Projects'}
              htmlFor={'addTechStack'}
              type={'text'}
              value={project.addTechStack}
              name="addTechStack"
              onChange={handleChange}
              warn={
                state.isPageSubmitted
                  ? checkArrayErrorStack(state.errorStack, 'addTechStack', project.id)
                  : false
              }
            />
          </div>
          <Button
            type="button"
            onClick={() => {
              dispatch({
                type: 'ADD_TECH_STACK',
                payload: {
                  id: project.id,
                },
              })
            }}
          >
            <FaRegSquarePlus />
            Add Stack
          </Button>
        </FormRow>
        <FormRow>
          <FormInput
            text={'Start Year'}
            htmlFor={'projectStartYear'}
            type={'number'}
            value={project.projectStartYear}
            name="projectStartYear"
            onChange={handleChange}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(state.errorStack, 'projectStartYear', project.id)
                : false
            }
          />
          <FormInput
            text={'End Year'}
            htmlFor={'projectEndYear'}
            type={'number'}
            value={project.projectEndYear}
            name="projectEndYear"
            onChange={handleChange}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(state.errorStack, 'projectEndYear', project.id)
                : false
            }
          />
          <FormInput
            text={'Project Duration | In Months'}
            htmlFor={'projectDuration'}
            type={'number'}
            value={project.projectDuration}
            name="projectDuration"
            onChange={handleChange}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(state.errorStack, 'projectDuration', project.id)
                : false
            }
          />
        </FormRow>

        <FormRow>
          <FormTextArea
            text="Project Summary"
            hint="Briefly describe your Project experience and key achievements"
            htmlFor="projectSummary"
            name="projectSummary"
            value={project.projectSummary}
            onChange={handleChange}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(state.errorStack, 'projectSummary', project.id)
                : false
            }
          />
        </FormRow>
      </form>
    </>
  )
}

export default ProjectDetailsForm
