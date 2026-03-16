import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Components/Layouts/MainLayout/MainLayout";
import Home from "./Components/Pages/Home/Home";
import ErrorPage from "./Components/Organism/ErrorPage/ErrorPage";
import Register from "./Components/Pages/Register/Register";
import Login from "./Components/Pages/Login/Login";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import TermsAndConditions from "./Components/Pages/TermsAndConditions/TermsAndConditions";
import Logout from "./Components/Pages/Logout/Logout";
import TemplateOne from "./Templates/TemplateOne/TemplateOne";
import Templates from "./Components/Pages/Templates/Templates";
import UserResumes from "./Components/Organism/UserResumes/UserResumes";
import UserTemplates from "./Components/Organism/UserTemplates/UserTemplates";
import DashboardInfo from "./Components/Organism/DashboardInfo/DashboardInfo";
import ViewResume from "./Components/Pages/ViewResume/ViewResume";
import AllResumes from "./Components/Organism/AllResumes/AllResumes";
import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./State/reducers";
import { initialState } from "./State/initialState";
import { getAuthStatus } from "./utils/login/getAuthStatus";
import AdminUsers from "./Components/Organism/AdminUsers/AdminUsers";

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (!state.isAuthenticated) {
      getAuthStatus()
        .then((result) => {
          if (result.statusCode === 600 && result) {
            dispatch({
              type: "SET_AUTH_STATUS",
              payload: {
                status: true,
                info: result.data,
              },
            });
            return;
          }
          dispatch({
            type: "SET_AUTH_STATUS",
            payload: {
              status: false,
            },
          });
        })
        .catch((error) => {
          console.log(error);
          dispatch({
            type: "SET_AUTH_STATUS",
            payload: {
              status: false,
            },
          });
        });
    }
  }, []);

  useEffect(() => {
    const onFocus = () => {
      if (!state.isAuthenticated) {
        getAuthStatus()
          .then((result) => {
            if (result.statusCode === 600 && result) {
              dispatch({
                type: "SET_AUTH_STATUS",
                payload: {
                  status: true,
                  info: result.data,
                },
              });
              return;
            }
            dispatch({
              type: "SET_AUTH_STATUS",
              payload: {
                status: false,
              },
            });
          })
          .catch((error) => {
            console.log(error);
            dispatch({
              type: "SET_AUTH_STATUS",
              payload: {
                status: false,
              },
            });
          });
      }
    };

    window.addEventListener("focus", onFocus);
    return () => {
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return (
    <>
      <AppContext
        value={{
          state,
          dispatch,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="logout" element={<Logout />} />
              <Route path="templates" element={<Templates />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
            </Route>
            {state.isAuthenticated && (
              <>
                {/* <Route path="view-resume" element={<ViewResume />} />
                <Route path="template-one/*" element={<TemplateOne />} />
                <Route path="dashboard" element={<Dashboard />}>
                  <Route index element={<DashboardInfo />} />
                  <Route path="user-resumes" element={<UserResumes />} />
                  <Route path="user-templates" element={<UserTemplates />} />
                  <Route path="resumes" element={<AllResumes />} />
                </Route>
                <Route path="pdf" element={<PDF />} /> */}
              </>
            )}
            <Route path="view-resume" element={<ViewResume />} />
            <Route path="template-one/*" element={<TemplateOne />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<DashboardInfo />} />
              <Route path="user-resumes" element={<UserResumes />} />
              <Route path="user-templates" element={<UserTemplates />} />
              <Route path="resumes" element={<AllResumes />} />
              <Route path="users-list" element={<AdminUsers />} />
            </Route>
            {/* <Route path="pdf" element={<PDF />} /> */}
          </Routes>
        </BrowserRouter>
      </AppContext>
    </>
  );
}

export default App;
