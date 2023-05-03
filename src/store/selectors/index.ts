import { RootState } from 'src/store';

export const selectAppReducer = (state: RootState) => {
  return state.appReducer;
};
