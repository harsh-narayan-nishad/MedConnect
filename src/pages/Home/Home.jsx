import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'  1:06:00

const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            {/* <FoodDisplay categor ={category}/> 1:06:00*/} 
        </div>
    )
}

export default Home