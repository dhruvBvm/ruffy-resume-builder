export const handleObjectChange = (state, payload) => {
  const { objectName, name, value } = payload
  return {
    ...state,
    [objectName]: {
      ...state[objectName],
      [name]: value,
    },
  }
}

export const handleArrayChange = (state, payload) => {
  const { objectName, name, value, id } = payload

  return {
    ...state,
    [objectName]: state[objectName].map((object) => {
      if (object.id === id) {
        return {
          ...object,
          [name]: value,
        }
      } else {
        return object
      }
    }),
  }
}
