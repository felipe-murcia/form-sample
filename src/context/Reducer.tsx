import { IUser } from '../interfaces'
import { AppState } from './Context'

type AppAction =
    | { type: 'setScreenDark', payload: boolean }
    | { type: 'setUserData', payload: IUser }
    | { type: 'setToken', payload: string | null }

const AppReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case 'setScreenDark':
            return {
                ...state,
                screenDark: action.payload
            }
        case 'setUserData':
            return {
                ...state,
                userData: action.payload
            }
        case 'setToken':
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}

export default AppReducer 