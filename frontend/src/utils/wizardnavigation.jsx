// HandleNext
export const handleNext = async () => {
  if (isLastStep) {
    if (edit?.isEdit) {
      const response = await editResume(resumeData, edit.editId);
      console.log(response);
    } else {
      console.log(resumeData);
      const response = await postResume(resumeData);
      console.log(response);
    }

    navigate("/resumes");
    return;
  }
  navigate(paths[paths.indexOf(location.pathname) + 1], {
    state: { edit: edit },
  });
};

// handle Prev....
export const handlePrev = () => {
  if (isFirstStep) {
    navigate("/", { state: { edit: edit } });
    return;
  }
  navigate(paths[paths.indexOf(location.pathname) - 1], {
    state: { edit: edit },
  });
};
