import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const MealsContext = createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

export const MealsContextProvider = ({children}) => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])

    async function fetchMeals(url) {
        setLoading(true)
        try {
            const {data} = await axios(url)
            if (data.meals) {
                setMeals(data.meals)
            } else {
                setMeals([])
            }
        } catch (error) {
            console.log(error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchMeals(allMealsUrl)
    }, [])

    useEffect(() => {
        if (!searchTerm) return
        fetchMeals(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    function fetchRandomMeal() {
        fetchMeals(randomMealUrl)
    }

    function selectMeal(idMeal, favoriteMeal) {
        let meal;
        if (favoriteMeal) {
            meal = favorites.find(meal => meal.idMeal === idMeal)
        } else {
            meal = meals.find(meal => meal.idMeal === idMeal)
        }
        setSelectedMeal(meal)
        setShowModal(true)
    }

    function closeModal() {
        setShowModal(false)
    }

    function addToFavorites(idMeal) {
        const meal = meals.find(meal => meal.idMeal === idMeal)
        const alreadyFavorite = favorites.find(meal => meal.idMeal === idMeal)
        if (alreadyFavorite) return
        const updatedFavorites = [...favorites, meal]
        setFavorites(updatedFavorites)
    }

    function removeFromFavorites(idMeal) {
        const updatedFavorites = favorites.filter(meal => meal.idMeal !== idMeal)
        setFavorites(updatedFavorites)
    }

    return (
        <MealsContext.Provider value={{
            meals,
            loading,
            setSearchTerm,
            fetchRandomMeal,
            showModal,
            selectedMeal,
            selectMeal,
            closeModal,
            addToFavorites,
            removeFromFavorites,
            favorites
        }}>
            {children}
        </MealsContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(MealsContext)
}
