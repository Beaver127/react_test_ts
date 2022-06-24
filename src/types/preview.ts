
export interface PreviewState {
    previews: Preview[];
    loading: boolean;
    error: null | string;
}


export interface Preview {
    avatar_url: string;
    login: string;
    count_repos?: number | null
}

export enum PreviewActionTypes {
    FETCH_PREVIEWS= 'FETCH_PREVIEWS',
    FETCH_PREVIEWS_SUCCESS= 'FETCH_PREVIEWS_SUCCESS',
    FETCH_PREVIEWS_ERROR= 'FETCH_PREVIEWS_ERROR',
}

interface FetchPreviewAction {
    type: PreviewActionTypes.FETCH_PREVIEWS
}
interface FetchPreviewSuccessAction {
    type: PreviewActionTypes.FETCH_PREVIEWS_SUCCESS;
    payload: Preview[];
}
interface FetchPreviewErrorAction {
    type: PreviewActionTypes.FETCH_PREVIEWS_ERROR;
    payload: string;
}

export type PreviewAction =
    FetchPreviewAction
    | FetchPreviewSuccessAction
    | FetchPreviewErrorAction



//img author
//login
//count repos