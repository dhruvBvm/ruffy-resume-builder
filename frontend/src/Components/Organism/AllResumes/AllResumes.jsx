import React, { useContext, useEffect, useState } from "react";
import "./AllResumes.scss";
import { getAllResumes } from "../../../utils/resumes/getAllResumeData";

import ResumesCard from "../ResumesCard/ResumesCard";
import { AppContext } from "../../../App";

const AllResumes = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    getAllResumes()
      .then((result) => {
        if (result.data && result.success && result.statusCode === 600) {
          dispatch({
            type: "SET_ALL_RESUMES",
            payload: {
              resumes: result.data,
            },
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="user-resumes">
      <ResumesCard
        resumes={state.allResumes}
        title={"Resumes"}
        isActions={true}
      />
    </div>
  );
};

export default AllResumes;
