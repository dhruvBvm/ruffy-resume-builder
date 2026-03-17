import { handleLogin } from "./handleLogin";

// export const varifyLogin = async (data, loginData, navigate) => {
//   const response = await handleLogin(data);
//   if (response.errors) {
//     return response.errors;
//   } else if (response.data) {
//     loginData.setUserLogin({
//       isLogin: true,
//       userData: response.data,
//     });
//     navigate("/dashboard");
//     return response.data;
//   }
// };

// export const varifyLogin = async (data, loginData, navigate) => {
//   const response = await handleLogin(data);
//   if (response.data) {
//     return response.data;
//   } else if (response.errors) {
//     return response.errors;
//   }
// };
