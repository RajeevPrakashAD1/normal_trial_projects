import React, { useState,useContext,useEffect, createContext,useCallback } from 'react';
import axios from "axios";

const apiEndpoint = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";




const AppContext = createContext();


function AppProvider({children}){
    const [cocktails,setDrinks] = useState([]);
    const [loading,setLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState("a");

    const   fetchdata  = useCallback (
        async ()=>{
            setLoading(true)
            try {
                const response = await axios.get(`${apiEndpoint}${searchTerm}`)
                console.log("api response",response);
                
               const {drinks} = response.data;
               if(drinks){
               const newCocktails = drinks.map((item) => {
                const {
                  idDrink,
                  strDrink,
                  strDrinkThumb,
                  strAlcoholic,
                  strGlass,
                } = item
      
                return {
                  id: idDrink,
                  name: strDrink,
                  image: strDrinkThumb,
                  info: strAlcoholic,
                  glass: strGlass,
                }
              })

              setDrinks(newCocktails);
            }else{
                setDrinks([]);
            }
                setLoading(false);

            }catch(error){
                console.log(error);
                setLoading(false);
            }
        },[searchTerm]
    )

    useEffect( () =>
        {console.log("useeffect called");
        fetchdata();
        },[searchTerm,fetchdata]
    )
    

    return (
        <div>
            <AppContext.Provider value={{cocktails,loading,searchTerm,setSearchTerm}}> {children} </AppContext.Provider>
            
        </div>
    )
}


export const useGlobalContext = () =>{
    return useContext(AppContext);
}
export { AppProvider , AppContext};
