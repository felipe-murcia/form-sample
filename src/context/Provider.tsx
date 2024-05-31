import React, { useReducer } from 'react'
import AppReducer  from './Reducer'
import { AppContext, AppState } from './Context'
import { IUser } from '../interfaces'

interface IContextProviderProps {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: AppState = {
    screenDark: false,
    userData: {
        fullname: null,
        email: '',
        phone:null
    }, 
    token: 'token-base'
}

export const AppProvider = ({ children }: IContextProviderProps) => {

    const [ state, dispatch ] = useReducer(AppReducer, INITIAL_STATE)

    const setScreenDark = (screenDark: boolean) => {
        dispatch({ type: 'setScreenDark', payload: screenDark })
    }

    const setUserData = (userData: IUser ) => {
        dispatch({ type: 'setUserData', payload: userData })
    } 

    const setToken = (token: string | null) => {
        dispatch({ type: 'setToken', payload: token })
    }

    return (
        <AppContext.Provider value={{
            state,
            setScreenDark,
            setUserData,
            setToken
        }}
        >
            {children}
        </AppContext.Provider>
    )
}