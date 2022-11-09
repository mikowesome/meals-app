import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/MealsContext'

function Favorites() {
    const {favorites, selectMeal, removeFromFavorites} = useGlobalContext()
  return (
    <FavoritesSection>
        <FavoritesContent>
            <h5>Favorites</h5>
            <FavoritesContainer>
                {
                    favorites.map(meal => {
                        return(
                            <FavoriteItem key={meal.idMeal}>
                                <FavoriteImg src={meal.strMealThumb} onClick={() => selectMeal(meal.idMeal, true)} />
                                <RemoveButton onClick={() => removeFromFavorites(meal.idMeal)}>remove</RemoveButton>
                            </FavoriteItem>
                        )
                    })
                }
            </FavoritesContainer>
        </FavoritesContent>
    </FavoritesSection>
  )
}

export default Favorites

const FavoritesSection = styled.section`
    background-color: #222;
    color: #fff;
    padding: 1rem 0;
`

const FavoritesContent = styled.div`
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
`

const FavoritesContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`

const FavoriteItem = styled.div`
    text-align: center;
`

const FavoriteImg = styled.img`
    display: block;
    object-fit: cover;
    width: 60px;
    border-radius: 50%;
    border: 5px solid #fff;
    cursor: pointer;
`

const RemoveButton = styled.button`
    margin-top: 0.25rem;
    background: transparent;
    color: #fff;
    border: transparent;
    cursor: pointer;
    font-size: 0.5rem;
    transition: 0.3s ease-in-out all;
    &:hover {
        color: #842029;
    }
`