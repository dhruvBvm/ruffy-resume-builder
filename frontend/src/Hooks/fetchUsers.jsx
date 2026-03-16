export const fetchResumes = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/resumes");
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const postResume = async (resume) => {
  try {
    const response = await fetch("http://localhost:3000/api/resumes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resume),
    });
    const data = await response.json();
    return data || [];
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const deleteResume = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/resumes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data || [];
  } catch (error) {
    return error;
  }
};

export const editResume = async (resume, id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/resumes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resume),
    });
    const data = await response.json();
    return data || [];
  } catch (error) {
    return error;
  }
};
