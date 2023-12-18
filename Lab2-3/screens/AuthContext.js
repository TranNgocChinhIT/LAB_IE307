import React ,{createContext,useState} from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [email, setEmail] = useState('21521892@gm.edu.vn');
    const [password, setPassword] = useState('12345678');
    const [isAuthenticated,setisAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{email , setEmail,password,setPassword,isAuthenticated,setisAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext,AuthProvider};