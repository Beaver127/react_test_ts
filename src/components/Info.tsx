import axios from "axios";
import { Octokit } from "@octokit/core";

import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import  {useActions} from "../hooks/useActions";
import {fetchPreviews} from "../store/action-creators/preview";
import classes from './Profile.module.scss';
import Loader from "./Loader";
import {useLocation} from "react-router-dom";
import {fetchInfo} from "../store/action-creators/info";
import c from  './Info.module.scss'

const Info : React.FC = () : JSX.Element => {
    const locate = useLocation()


    const {info, error, loading} = useTypedSelector(state => state.info)
    const {fetchInfo} = useActions()
    const [searchValue, setSearchValue] = useState('Beaver127')
    const [count, setCount] = useState(0)
    useEffect(() => {
        fetchInfo(locate.pathname.split('/')[2])
        console.log(info)
    }, [ ])

    const onChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div>
            {loading && <Loader />}

            {error && <h1>{error}</h1>}
            <h1 className={classes.title}>Github Searcher</h1>

            <div className={c.info}>
                <div className={c.left}>
                    <img src={info.avatar_url} alt=""/>
                </div>
                <div className={c.right}>
                    <p>UserName: {info.login}</p>
                    <p>Email: {info.email === null ? "Empty" : info.email}</p>
                    <p>Location: {info.location === null ? "Empty" : info.location}</p>
                    <p>Join Date: {info.created_at}</p>
                    <p>Followers: {info.followers}</p>
                    <p>Following: {info.following}</p>
                    <p>Bio: {info.bio === null ? "Empty" : info.bio}</p>
                    <p>Public Repos: {info.public_repos}</p>
                </div>
            </div>

            <input className={classes.search} type="text" value={searchValue} onChange={onChange} placeholder="Search for Users"/>
            {info.repos !== null ? info.repos.map(p =>
                <div className={classes.row} key={p.html_url}>
                    <a href={p.html_url} className={classes.rowLeft}>{p.name}</a>
                    <div className={classes.rowRight}>
                        <p> {p.forks} Forks</p>
                        <p>   {p.stargazers_count} Stars</p>
                    </div>
                </div>
            ) : ""}

        </div>
    );
};

export default Info;

//avatar_url
//login
//followers
//following
//bio
//email
//location
//created_at
//public_repos