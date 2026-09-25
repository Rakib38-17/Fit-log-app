'use client'

import { Type } from "@/app/type/type";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type AppContext = {
    addPlan: Type[];
    setAddPlan: Dispatch<SetStateAction<Type[]>>;
    savePlan: Type[];
    setSavePlan: Dispatch<SetStateAction<Type[]>>;
};

export const appContex = createContext<AppContext | null>(null);




const AppProvider = ({children}:{children: ReactNode}) => {

    const [addPlan, setAddPlan] = useState<Type[]>([])
    const [savePlan, setSavePlan] = useState<Type[]>([])

    const shared = {
        addPlan,
        setAddPlan,
        savePlan,
        setSavePlan
    }

    return (
        <appContex.Provider value = {shared}>{children}</appContex.Provider>
    );
};

export default AppProvider;