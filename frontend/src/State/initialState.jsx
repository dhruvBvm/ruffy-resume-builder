import { config as baseData } from "./config";

export const initialState = {
  ...structuredClone(baseData.state),
};
