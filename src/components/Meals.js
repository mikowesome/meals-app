import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/MealsContext'
import { BsHandThumbsUp } from 'react-icons/bs'

function Meals() {
    const {meals, loading, selectMeal, addToFavorites} = useGlobalContext()

    if(loading) {
        return <MealsSection>
            <h4>Loading...</h4>
        </MealsSection>
    }
    if (meals.length < 1) {
        return <MealsSection>
            <h4>No meals matched your search term. Please Try Again.</h4>
        </MealsSection>
    }
  return (
    <MealsSection>
        {
            meals.map(meal => {
                return (
                    <SingleMeal key={meal.idMeal}>
                        <SingleMealImg src={meal.strMealThumb} onClick={() => selectMeal(meal.idMeal)} />
                        <SingleMealFooter>
                            <SingleMealH5>{meal.strMeal}</SingleMealH5>
                            <SingleMealButton onClick={() => addToFavorites(meal.idMeal)}><BsHandThumbsUp /></SingleMealButton>
                        </SingleMealFooter>
                    </SingleMeal>
                )
            })
        }
    </MealsSection>
  )
}

export default Meals

const MealsSection = styled.section`
    padding: 3rem;
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    @media (min-width: 776px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const SingleMeal = styled.article`
    background-color: #fff;
    color: #0f172a;
    border-radius: 0.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: 0.3s ease-in-out all;
    &:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
`

const SingleMealImg = styled.img`
    height: 15rem;
    width: 100%;
    display: block;
    object-fit: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    cursor: pointer;
`

const SingleMealH5 = styled.h5`
    padding: 0;
    margin: 0;
`

const SingleMealFooter = styled.footer`
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const SingleMealButton = styled.button`
    background: transparent;
    border: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.3s ease-in-out all;
    &:hover {
        color: #842029;
        transform: translateY(-2px);
    }
`