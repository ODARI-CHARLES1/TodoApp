
import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
export const useUser=()=>useContext(UserContext)