import "./UserResumes.scss";
import ResumesCard from "../ResumesCard/ResumesCard";
import { useContext, useEffect } from "react";
import { getUsersResumes } from "../../../utils/resumes/getUsersResumes";
import { AppContext } from "../../../App";

const UserResumes = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    getUsersResumes()
      .then((result) => {
        if (result.data && result.success && result.statusCode === 600) {
          dispatch({
            type: "SET_USER_RESUMES",
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
    <>
      <div className="user-resumes">
        <ResumesCard resumes={state.userResumes} title={"My Resumes"} isActions={true} />
      </div>
    </>
  );
};

export default UserResumes;
