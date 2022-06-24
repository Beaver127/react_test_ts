import axios from "axios";
import { Octokit } from "@octokit/core";

import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import useDebounce, {useActions} from "../hooks/useActions";
import {fetchPreviews} from "../store/action-creators/preview";
import classes from './Profile.module.scss';
import Loader from "./Loader";
import {useNavigate} from "react-router-dom";


const Profile : React.FC = () : JSX.Element => {
    const navigate = useNavigate()
    // return (
    //     <div onClick={async () => {
    //         //Personal access tokens.
    //         // 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
    //         // let resp = await axios.get("https://api.github.com/users/")
    //         // https://api.github.com/search/users?q=Beaver12
    //         // https://api.github.com/users/Beaver127/repos
    //         ///users/google/followers
    //         // console.log(resp.data)
    //         const octokit = new Octokit({
    //             auth: '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'
    //         })
    //
    //         // let res = await octokit.request('GET /users/google/followers', {})
    //         // let res = await axios.get('https://api.github.com/users/Beaver127/followers')
    //         // console.log(res)
    //     }}>
    //         profile
    //         {/*<img src="https://avatars.githubusercontent.com/u/1?v=4" alt=""/>*/}
    //     </div>
    // );
    const {previews, error, loading} = useTypedSelector(state => state.preview)
    const {fetchPreviews} = useActions()
    const [searchValue, setSearchValue] = useState('Beaver')
    const [count, setCount] = useState(0)
    let intervalId
    useEffect(() => {
        if(count === 0) {
            setCount(1)
            return
        }
        const timeOutId = setTimeout(() => {
            if (!loading && searchValue.length > 2) {
                fetchPreviews(searchValue)
                {console.log(error)}
            }
        }, 1000);
        return () => clearTimeout(timeOutId);
    }, [searchValue]);

    const onChange = (e) => {
        if(intervalId) {
            clearInterval(intervalId);
        }

        setSearchValue(e.target.value)
        if (!loading && searchValue.length > 2) {

            // intervalId = setInterval(() => {
            //
            //     console.log("hi")
            //     clearInterval(intervalId)
            //     go = true
            // }, 6000);

                // if(go) {
                //     go = false
                //     intervalId = setInterval(() => {
                //         console.log("hi")
                //         clearInterval(intervalId)
                //         go = true
                //     },3000)
                // }

        }
        //вызов колбека
        // debouncedSearch(e.target.value)
    }


    // if (loading) {
    //     return <h1>Идет загрузка...</h1>
    // }
    // if (error) {
    //     return <h1>{error}</h1>
    // }

    return (
        <div>
            {loading && <Loader />}

            {error && <h1>{error}</h1>}
            <h1 className={classes.title}>Github Searcher</h1>
            <input className={classes.search} type="text" value={searchValue} onChange={onChange} placeholder="Search for Users"/>
            {previews.map(p =>
                <div className={classes.row} key={p.avatar_url}>
                    <img src={p.avatar_url} alt="" onClick={() => {navigate(`/user/${p.login}`)}}/>
                    <p className={classes.login} onClick={() => {navigate(`/user/${p.login}`)}}>{p.login}</p>
                    <p className={classes.count}>count: {p.count_repos}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;

//img_author
//followers
//following
//aweft@mail.ua
//