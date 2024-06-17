import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Meals() {

    const { error, isLoading, data: meals } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (isLoading) {
        return <p className="center">Loading...</p>
    }

    if (error) {
        return <Error title="An error occurred!" message={error}/>
    }


    
    return (
        <ul id="meals">
            {meals.map(meal => (
                <MealItem meal={meal} key={meal.id}/>
            ))} 
        </ul>
    )
};