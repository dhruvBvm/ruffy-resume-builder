import { deleteResume, fetchResumes } from "../Hooks/fetchUsers";

export const handleDelete = async (id, setResumes) => {
  // const newResumes = resumes.filter((item) => item.id !== id);
  // localStorage.setItem("resumes", JSON.stringify(newResumes));
  // setResumes(newResumes);
  const data = await deleteResume(id);
  const response = await fetchResumes();
  setResumes(response);
};

export const handleEdit = (data, navigate) => {
  navigate("/wizard", {
    state: {
      formData: { ...data },
      edit: {
        isEdit: true,
        editId: data._id,
      },
    },
  });
};
