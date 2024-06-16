import { useState, useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchMeals() {
                const response = await fetch('http://localhost:3000/meals');
                if(!response.ok){
                }

                const mealsData = await response.json();
                setMeals(mealsData);
            
        }
        fetchMeals();
    }, []);

    return (
        <ul id="meals">
            {meals.map(meal => (
                <MealItem meal={meal} key={meal.id}/>
            ))} 
        </ul>
    )
};