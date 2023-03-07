import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import data from '../database/data';

// redux actions
import * as Action from '../redux/question_reducer';

// fetch question hook to fetch api data and set value to store
export const useFetchQuestion = () =>{
    const dispatch = useDispatch();
    const [getData, setGetData]= useState({isLoding : false, apiData : [], serverError: null})

    useEffect(() => {
        setGetData(prev => ({...prev, isLoding : true}));
        
        // async function fetch backend data
        (async ()=> {
            try {
                let question = await data;

                if(question.length > 0){
                    setGetData(prev => ({...prev, isLoding : false}));
                    setGetData(prev => ({...prev, apiData : question}));
                    
                    // dispatch an action
                    dispatch(Action.startExamAction(question))
                }else{
                    throw new Error('No Question Available');
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoding : false}));
                setGetData(prev => ({...prev, serverError : false}));
            }
        })();
    },[dispatch]);

    return[getData, setGetData];
}
