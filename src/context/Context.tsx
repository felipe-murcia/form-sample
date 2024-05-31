import { createContext } from "react";
import { IUser } from "../interfaces/User";

export interface AppState {
    screenDark: boolean;
    userData: IUser;
    token: string | null;
}

export type AppContextProps = {
    state: AppState;
    setScreenDark: (screenDark: boolean) => void;
    setUserData: (userData: IUser ) => void ;
    setToken: (token: string | null) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)