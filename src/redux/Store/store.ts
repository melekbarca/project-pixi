import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AuthReducer from '../Reducers/AuthReducer/AuthReducer';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import logger from 'redux-logger'
import SettingReducer from '../Reducers/SettingReducer/SettingReducer';
import ScreenReducer from '../Reducers/ScreenReducer/ScreenReducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    blackList: ['auth', 'setting','screen'],
};

const reducers = combineReducers({
    auth:AuthReducer,
    setting:SettingReducer,
    screen:ScreenReducer
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
    }),
});
const persistor = persistStore(store)
export {
    store, persistor
}
