export interface InfoState {
    info: Info;
    loading: boolean;
    error: null | string;
}

export interface Info {
    avatar_url : string;
    login : string;
    followers : string;
    following : string;
    bio : string;
    email : string;
    location : string;
    created_at : string;
    public_repos : string;
    repos : Repo[];
}
export interface Repo {
    name : string;
    forks : string;
    html_url : string;
    stargazers_count : string;
}
export enum InfoActionTypes {
    FETCH_INFO = 'FETCH_INFO',
    FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS',
    FETCH_INFO_ERROR = 'FETCH_INFO_FETCH_INFO_ERROR',
}
interface FetchInfoAction {
    type: InfoActionTypes.FETCH_INFO;
}
interface FetchInfoSuccessAction {
    type: InfoActionTypes.FETCH_INFO_SUCCESS;
    payload: Info
}
interface FetchInfoErrorAction {
    type: InfoActionTypes.FETCH_INFO_ERROR;
    payload: string;
}
export type InfoAction = FetchInfoAction | FetchInfoSuccessAction | FetchInfoErrorAction
