import React from "react";

const MealContext = React.createContext();

const todaysMeals = ["Beans", "Rice", "Water"];

const MealsProvider = ({children}) => {
    const [meals, setMeals] = React.useState(todaysMeals);

    return(
        <MealContext.Provider value={{meals}}>
            {children}
        </MealContext.Provider>
    );
}

export const useMealContext = () => React.useContext(MealContext);

export default MealsProvider;