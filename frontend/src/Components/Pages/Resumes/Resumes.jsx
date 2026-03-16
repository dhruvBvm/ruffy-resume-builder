import React, { useEffect, useState } from "react";
import "./Resumes.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../Molecules/Button/Button";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { fetchResumes } from "../../../Hooks/fetchUsers";
import { handleDelete, handleEdit } from "../../../utils/resume";

const Resumes = () => {
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchResumes()
      .then((result) => {
        setResumes(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="resumes">
      <div className="table__container">
        <table className="table" border={`white`}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Batch</th>
              <th>Collage</th>
              <th>Cgpa</th>
              <th>Job Target</th>
              <th>Hobbies</th>
              <th>Personal Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resumes.length === 0 ||
              resumes.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.age}</td>
                    <td>{item.batch}</td>
                    <td>{item.collage}</td>
                    <td>{item.cgpa}</td>
                    <td>{item.jobTarget}</td>
                    <td>{item.hobbies.join(',')}</td>
                    <td>{item.personalWebsite}</td>
                    <td className="actions">
                      <Button
                        onClick={() => handleDelete(item._id, setResumes)}
                      >
                        <AiOutlineDelete className="icon" />
                      </Button>
                      <Button onClick={() => handleEdit(item, navigate)}>
                        <MdOutlineEdit className="icon" />
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resumes;
