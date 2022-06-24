import {PreviewAction, PreviewActionTypes, PreviewState} from "../../types/preview";

const initialState: PreviewState = {
    previews: [],
    error: null,
    loading: false
}

export const previewReducer = (state = initialState, action: PreviewAction): PreviewState => {
    switch (action.type) {
        case PreviewActionTypes.FETCH_PREVIEWS:
            return {...state, loading: true}
        case PreviewActionTypes.FETCH_PREVIEWS_SUCCESS:
            return {...state, loading: false, previews: action.payload, error: null}
        case PreviewActionTypes.FETCH_PREVIEWS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}