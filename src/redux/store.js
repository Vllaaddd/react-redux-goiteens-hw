import { contactReducer } from "./contactSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, legacy_createStore as createStore } from "redux";
import { filterReducer } from "./filterSlice";

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)