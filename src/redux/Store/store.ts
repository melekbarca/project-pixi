import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AuthReducer from '../Reducers/AuthReducer';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import logger from 'redux-logger'

const persistConfig = {
    key: 'root',
    storage: storage,
    blackList: ['auth', 'setting'],
};

const reducers = combineReducers({
    auth:AuthReducer
});

const _persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: _persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER
            ],
        },
    }).concat(logger),
});
const persistor = persistStore(store)
export {
    store, persistor
}
