import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {previewReducer} from "./priviewReducer";
import {infoReducer} from "./infoReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    preview: previewReducer,
    info: infoReducer
})

export type RootState = ReturnType<typeof rootReducer>
