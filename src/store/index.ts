import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { createLogger } from 'redux-logger';
import { config, Envs } from 'src/config';
import { authApi } from 'src/services/auth.api';
import { appReducer } from 'src/store/reducers/app.slice';

const rootReducer = combineReducers({
  appReducer,
  [authApi.reducerPath]: authApi.reducer,
});

const logger = createLogger({});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    config.getEnv() === Envs.production ? getDefaultMiddleware() : getDefaultMiddleware().concat(),

  devTools: config.getEnv() !== Envs.production,
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
