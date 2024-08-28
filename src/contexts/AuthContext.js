import { createContext, useContext } from "react";

const AuthContext = createContext({});
export default useAuth = useContext(AuthContext)

function AuthProvider({ children }){
    return(
      <AuthContext.Provider value={{ logado:true }}>
          { children }
      </AuthContext.Provider>
      )
}

export default AuthContext;