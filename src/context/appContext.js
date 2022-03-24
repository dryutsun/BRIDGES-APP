import {useReducer, useContext} from 'react'

const AppContext = React.createContext()

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
    user: user ? JSON.parse(user) : null,
    token: token,
    userLocation: userLocation || "",
  };

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    





}