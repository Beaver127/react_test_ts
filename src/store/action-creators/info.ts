import {Dispatch} from "redux";
import axios from "axios";
import {Info, InfoAction, InfoActionTypes} from "../../types/info";
import {Preview} from "../../types/preview";

export const fetchInfo = (searchValue) => {
    return async (dispatch: Dispatch<InfoAction>) => {

        try {
            dispatch({type: InfoActionTypes.FETCH_INFO})
            const response = await axios.get<any>(`https://api.github.com/users/${searchValue}`)
            console.log(response.data)
            await axios.get<any>(`https://api.github.com/users/${searchValue}/repos`).then((res) => {
                response.data = {...response.data, repos: res.data}
                    console.log(response.data)
                setTimeout(() => {
                    dispatch({type: InfoActionTypes.FETCH_INFO_SUCCESS, payload: response.data})
                }, 500)
            })

            setTimeout(() => {
                dispatch({type: InfoActionTypes.FETCH_INFO_SUCCESS, payload: response.data})
            }, 500)

        } catch (e) {
            dispatch({
                type: InfoActionTypes.FETCH_INFO_ERROR,
                payload: 'Произошла ошибка при загрузке списка'
            })
        } finally {

        }
    }
}
