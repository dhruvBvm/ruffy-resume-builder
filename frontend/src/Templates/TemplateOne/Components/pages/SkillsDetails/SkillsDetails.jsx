import { useCallback, useContext } from 'react'
import './SkillsDetails.scss'
import SkillsDetailForm from '../../Form/SkillsDetailForm/SkillsDetailForm'
import Button from '../../../../../Components/Molecules/Button/Button'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { TemplateOneContext } from '../../../TemplateOne'
import { config } from '../../../State/config'

const SkillsDetails = () => {
  const { state, dispatch } = useContext(TemplateOneContext)

  const handleAdd = useCallback(() => {
    dispatch({
      type: 'ADD_FORM',
      payload: {
        objectName: 'skillsDetails',
      },
    })
  }, [])

  return (
    <div className="skills-details">
      <h3>Highlight Your Expertise</h3>
      <p>
        Showcasing your skill set is essential for matching your profile with
        job requirements. By listing relevant technical and soft skills, you
        optimise your resume for ATS algorithms and demonstrate to recruiters
        exactly how your capabilities align with the demands of the role.
      </p>
      <a href="" className="skills-details__policy">
        How we will use your information
      </a>
      {state.skillsDetails.map((skills) => {
        return <SkillsDetailForm key={skills.id} skills={skills} />
      })}
      {state.skillsDetails.length === config.limitation['skillsDetails'] ? (
        <p className="skills-limit">
          You can not add more than {config.limitation['skillsDetails']} Skills.
        </p>
      ) : (
        <Button onClick={handleAdd}>
          <FaRegSquarePlus />
          Add More Skills
        </Button>
      )}
    </div>
  )
}

export default SkillsDetails
