import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore function from Redux Toolkit
import cartReducer from './reducers'; // Importing the cartReducer from the reducers file
import { persistReducer, persistStore } from 'redux-persist'; // Importing persistReducer and persistStore from Redux Persist
import storage from 'redux-persist/lib/storage'; // Importing storage from Redux Persist
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants'; // Importing Redux Persist constants

// Configuration for Redux Persist
const persistConfig = { key: 'root', version: 1, storage }; // Configuration options for persisting Redux state

// Applying Redux Persist to the reducer
const persistedReducer = persistReducer(persistConfig, cartReducer); // Creating a persisted reducer

// Configuring the Redux store
const store = configureStore({
  reducer: persistedReducer, // Setting the persisted reducer
  middleware: getDefaultMiddleware => // Configuring middleware
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] // Ignoring certain actions for serialization
      }
    })
});

// Exporting the configured Redux store as the default export
export default store;

// Exporting the persistor, which is used to rehydrate the Redux store with persisted state
export const persistor = persistStore(store);
