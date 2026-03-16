export const handleNavigation = (
  type,
  pageNumber,
  setPageNumber,
  paths,
  navigate,
  errorStack,
  templateData,
  setTemplateData,
) => {
  if (type === "next" && pageNumber !== paths.length) {
    if (pageNumber === 2) {
      if (errorStack.length > 0) {
        setTemplateData((prev) => {
          return {
            ...prev,
            ["events"]: {
              ...prev["events"],
              isFormSubmitted: true,
            },
          };
        });
      } else {
        setPageNumber(pageNumber + 1);
        navigate(paths[pageNumber]);
      }
    } else {
      setPageNumber(pageNumber + 1);
      navigate(paths[pageNumber]);
    }
  } else if (type === "prev" && pageNumber > 1) {
    setPageNumber(pageNumber - 1);
    navigate(paths[pageNumber - 2]);
  }
};
