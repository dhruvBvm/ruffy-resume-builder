export const validateSkillsFormInfo = (formData) => {
  let errorStack = [];

  formData.forEach((element) => {
    const {
      id,
      skillFieldName,
      skillName,
      skillsExperience,
      skillLevel,
      skillsStack,
      skillSummary,
    } = element;

    // 1. Skill Category Name (e.g., "Frontend Development")
    if (skillFieldName.trim() === "") {
      errorStack.push({
        id: id,
        fieldName: "skillFieldName",
        error: { warn: true, message: "Skill Category name can't be empty." },
      });
    }
    if (skillFieldName.trim().length > 50) {
      errorStack.push({
        id: id,
        fieldName: "skillFieldName",
        error: { warn: true, message: "Category name cannot exceed 50 characters." },
      });
    }

    // 2. Validate the skills currently in the List (The Table)
    if (skillsStack.length === 0) {
      errorStack.push({
        id: id,
        fieldName: "skillName", // Highlighting the input to prompt adding one
        error: { warn: true, message: "Please add at least one skill to the list." },
      });
    }

    // 3. Skills Summary
    const summaryLen = skillSummary.trim().length;
    if (skillSummary.trim() === "") {
      errorStack.push({
        id: id,
        fieldName: "skillSummary",
        error: { warn: true, message: "Skills summary can't be empty." },
      });
    }
    if (summaryLen < 300) {
      errorStack.push({
        id: id,
        fieldName: "skillSummary",
        error: { warn: true, message: `Summary is too short (${summaryLen}/300).` },
      });
    }
    if (summaryLen > 900) {
      errorStack.push({
        id: id,
        fieldName: "skillSummary",
        error: { warn: true, message: "Summary cannot exceed 900 characters." },
      });
    }
  });

  return errorStack;
};
