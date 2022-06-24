import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../store/action-creators/'
import {useCallback, useRef} from "react";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}


//хук колбека
//при печатании текста когда пользователь остановился вызывается функция
//либо когда пользователь остановил двигать мышкой



export default function useDebounce(callback, delay) {

    //объект для создания таймера
    const timer = useRef<ReturnType<typeof setInterval>>(null)

    //переданные параметры в колбек деструктуризируем и передаем в исполнение
    const debouncedCallback = useCallback((...args) => {
        //если мы повторяем оджно и то же действие при этом старый таймер не отработал
        //то удаляем старый таймер и создаем новый ниже
        if(timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            //вызов колбека с задержкой
            callback(...args)
        }, delay)

    }, [callback, timer])


    return debouncedCallback
}


