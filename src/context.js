import React,{useState, createContext, useContext, useEffect,useCallback} from "react";


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = createContext();

const AppProvider = ({children}) => {
     const [loading, setLoading] = useState(true);
     const [searchTerm, setSearchTerm] = useState("a");
     const [cocktails, setCocktails] = useState([]);
    
     const fetchDrinks = useCallback( async() => {
        console.log("hello-3")
         setLoading(true);
         console.log("sd")
        try{
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            const { drinks } = data;

            if(drinks){
                const newCocktails = drinks.map((item)=>{
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = item;

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })
                setCocktails(newCocktails)
            
            }else{
                setCocktails([])
            }
            setLoading(false);
        }
        catch(err){
            console.log(err)
        }
        
     },[searchTerm]);

     useEffect(()=>{
        console.log("hello-1")
        fetchDrinks();
        console.log("hello-2")
     }, [searchTerm,fetchDrinks])

    return(
        <AppContext.Provider value={{
            loading,
            searchTerm,
            cocktails,
            setSearchTerm,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppProvider};