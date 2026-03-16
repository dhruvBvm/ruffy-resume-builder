import React, { useCallback, useContext } from 'react'
import './EducationalDetails.scss'
import EducationalDetailsForm from '../../Form/EducationalDetailsForm/EducationalDetailsForm'
import Button from '../../../../../Components/Molecules/Button/Button'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { TemplateOneContext } from '../../../TemplateOne'
import { config } from '../../../State/config'

const EducationalDetails = () => {
  const { state, dispatch } = useContext(TemplateOneContext)

  const handleAdd = useCallback(() => {
    dispatch({
      type: 'ADD_FORM',
      payload: {
        objectName: 'educationalDetails',
      },
    })
  }, [])

  return (
    <div className="educational-details">
      <h3>Fill your Educationals Details</h3>
      <p>
        Detailing your education provides a competitive edge by proving your
        technical foundation and commitment to growth. These details help you
        bypass ATS filters and show recruiters you possess the specific academic
        rigor and discipline required for the role.
      </p>
      <a href="" className="educational-details__policy">
        How we will use your information
      </a>
      {state.educationalDetails.map((education) => {
        return (
          <EducationalDetailsForm key={education.id} education={education} />
        )
      })}
      {state.educationalDetails.length ===
      config.limitation['educationalDetails'] ? (
        <p className="educations-limit">
          You can not add more than {config.limitation['educationalDetails']}{' '}
          Educations
        </p>
      ) : (
        <Button onClick={handleAdd}>
          <FaRegSquarePlus />
          Add More Educations
        </Button>
      )}
    </div>
  )
}

export default EducationalDetails
