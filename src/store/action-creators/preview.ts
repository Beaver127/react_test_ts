import {Dispatch} from "redux";
import axios from "axios";
import {PreviewAction, PreviewActionTypes, Preview} from "../../types/preview";

export const fetchPreviews = (searchValue) => {
    return async (dispatch: Dispatch<PreviewAction>) => {
        let newA : Preview[] = []
        let count = 0;
        try {
            dispatch({type: PreviewActionTypes.FETCH_PREVIEWS})
            const response = await axios.get<{items: Preview[]}>(` https://api.github.com/search/users?q=${searchValue}&page=1&per_page=5`)
            console.log(response.data.items)
            if(response.data.items.length === 0) {
                dispatch({
                    type: PreviewActionTypes.FETCH_PREVIEWS_ERROR,
                    payload: 'таких пользователей не существует'
                })
            }
            response.data.items.map(async (i, index) => {
                let item = await axios.get(`https://api.github.com/users/${i.login}/repos`).then((a) => {
                    count++
                    return a
                })
                newA.push( { ...i, count_repos: item.data.length})
                // console.log( newA.length, count)
                if(count === newA.length) {
                    setTimeout(() => {
                        console.log(newA)
                        dispatch({type: PreviewActionTypes.FETCH_PREVIEWS_SUCCESS, payload: newA})
                    }, 500)
                }


            })

        } catch (e) {
            dispatch({
                type: PreviewActionTypes.FETCH_PREVIEWS_ERROR,
                payload: 'Произошла ошибка при загрузке списка'
            })
        } finally {

        }
    }
}
