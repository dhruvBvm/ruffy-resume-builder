import { useCallback, useContext } from 'react'
import './SkillsDetailForm.scss'
import Button from '../../../../../Components/Molecules/Button/Button'
import FormRow from '../../../../../Components/Molecules/FormRow/FormRow'
import FormInput from '../../../../../Components/Molecules/FormInput/FormInput'
import FormTextArea from '../../../../../Components/Molecules/FormTextArea/FormTextArea'
import FormDropDownMenu from '../../../../../Components/Molecules/FormDropDownMenu/FormDropDownMenu'

import { IoRemoveCircleSharp } from 'react-icons/io5'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'

import { TemplateOneContext } from '../../../TemplateOne'
import { checkArrayErrorStack } from '../../../../../utils/helpers/checkArrayErrorStack'

const SkillsDetailForm = ({ skills }) => {
  const { state, dispatch } = useContext(TemplateOneContext)

  const handleRemove = useCallback(
    (id = skills.id) => {
      dispatch({
        type: 'REMOVE_FORM',
        payload: {
          objectName: 'skillsDetails',
          id: id,
        },
      })
    },
    [dispatch, skills.id],
  )

  const handleChange = useCallback(
    (e, id = skills.id) => {
      dispatch({
        type: 'UPDATE_ARRAY_OF_OBJECTS_DETAILS',
        payload: {
          name: e.target.name,
          value: e.target.value,
          objectName: 'skillsDetails',
          id: id,
        },
      })
    },
    [dispatch, skills.id],
  )

  return (
    <form className="skill-details-form " autoComplete="off">
      <div className="skill-details">
        <h1 className="skill-header">Skills Details</h1>
        {state.skillsDetails.length > 1 && (
          <Button type="button" onClick={handleRemove}>
            <IoRemoveCircleSharp />
            Remove Skills
          </Button>
        )}
      </div>
      <FormRow>
        <FormInput
          text={'Skills Category Name'} // e.g. "Frontend Development"
          htmlFor={'skillFieldName'}
          type={'text'}
          value={skills.skillFieldName}
          name="skillFieldName"
          onChange={handleChange}
          warn={
            state.isPageSubmitted
              ? checkArrayErrorStack(state.errorStack, 'skillFieldName', skills.id)
              : false
          }
        />
      </FormRow>

      <FormRow>
        <h1 className="skills-stack-header">
          Highlight your Greatest Strengths
        </h1>
        <table border={1} className="skills-tech-stack">
          <thead>
            <tr>
              <th>Index</th>
              <th>Skill Name</th>
              <th>Skill Level</th>
              <th>Experience (Years)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {skills.skillsStack.map((skill, index) => {
              return (
                <tr key={skill.id}>
                  <td>{index + 1}</td>
                  <td>{skill.skillName}</td>
                  <td>{skill.skillLevel}</td>
                  <td>{skill.skillsExperience}</td>
                  <td className="actions">
                    <Button
                      type="button"
                      onClick={() => {
                        dispatch({
                          type: 'EDIT_SKILL_STACK',
                          payload: { id: skills.id, editId: skill.id },
                        })
                      }}
                    >
                      <CiEdit />
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        dispatch({
                          type: 'REMOVE_SKILL_STACK',
                          payload: { id: skills.id, deleteId: skill.id },
                        })
                      }}
                    >
                      <MdDeleteOutline />
                    </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        
        <div className="skills-stack-input">
          <FormRow>
            <FormInput
              text={'Skill Name'}
              htmlFor={'skillName'}
              type={'text'}
              value={skills.skillName}
              name="skillName"
              onChange={handleChange}
              warn={
                state.isPageSubmitted
                  ? checkArrayErrorStack(state.errorStack, 'skillName', skills.id)
                  : false
              }
            />

            <FormInput
              text={'Experience | In years'}
              htmlFor={'skillsExperience'}
              type={'number'}
              value={skills.skillsExperience}
              name="skillsExperience"
              onChange={handleChange}
              warn={
                state.isPageSubmitted
                  ? checkArrayErrorStack(state.errorStack, 'skillsExperience', skills.id)
                  : false
              }
            />
          </FormRow>
          <FormDropDownMenu
            name={'skillLevel'}
            options={[
              'Beginner',
              'Intermediate',
              'Advanced',
              'Expert',
              'Master',
            ]}
            value={skills.skillLevel}
            onChange={handleChange}
            warn={
              state.isPageSubmitted
                ? checkArrayErrorStack(state.errorStack, 'skillLevel', skills.id)
                : false
            }
          />
        </div>
        <Button
          type="button"
          onClick={() => {
            dispatch({
              type: 'ADD_SKILL_STACK',
              payload: { id: skills.id },
            })
          }}
        >
          <FaRegSquarePlus />
          Add Skill to List
        </Button>
      </FormRow>

      <FormRow>
        <FormTextArea
          text="Skills Summary"
          hint="Briefly describe your expertise"
          htmlFor="skillSummary"
          name="skillSummary"
          value={skills.skillSummary}
          onChange={handleChange}
          warn={
            state.isPageSubmitted
              ? checkArrayErrorStack(state.errorStack, 'skillSummary', skills.id)
              : false
          }
        />
      </FormRow>
    </form>
  )
}

export default SkillsDetailForm
