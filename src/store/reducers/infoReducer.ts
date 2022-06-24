import {InfoAction, InfoActionTypes, InfoState} from "../../types/info";

const initialState: InfoState = {
    info: {avatar_url: "", bio: '', created_at: '', email: '', followers: '', following: '', location: '', login: '', public_repos: '', repos: null},
    error: null,
    loading: false
}

export const infoReducer = (state = initialState, action: InfoAction): InfoState => {
    switch (action.type) {
        case InfoActionTypes.FETCH_INFO:
            return {...state, loading: true}
        case InfoActionTypes.FETCH_INFO_SUCCESS:
            return {...state, loading: false, info: action.payload, error: null}
        case InfoActionTypes.FETCH_INFO_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}