import React, { useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/MealsContext'

function Search() {
    const { setSearchTerm, fetchRandomMeal } = useGlobalContext()
    const [text, setText] = useState('')

    function handleChange(event) {
        setText(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(text) {
            setSearchTerm(text)
        } else {
            setSearchTerm('')
        }
    }
    function handleRandomMeal() {
        setSearchTerm('')
        setText('')
        fetchRandomMeal()
    }

  return (
    <SearchContainer>
        <Form onSubmit={handleSubmit}>
            <FormInput 
                type='text' 
                placeholder='Type Favorite Meal'
                onChange={handleChange}
                value={text}
            />
            <SearchButton>Search</SearchButton>
            <SearchRandomButton  onClick={handleRandomMeal}>Surprise Me!</SearchRandomButton>
        </Form>
    </SearchContainer>
  )
}

export default Search

const SearchContainer = styled.header`
    height: 5rem;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    width: 90vw;
    max-width: 1120px;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
`

const FormInput = styled.input`
    max-width: 200px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    background-color: #F1F5F9;
    border: 1px solid #E2E8F0;
`

const SearchButton = styled.button`
    cursor: pointer;
    color: #FFF;
    background: #03449d;
    border: transparent;
    border-radius: 0.25rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transition: 0.3s ease-in-out all;
    text-transform: capitalize;
    display: inline-block;
    &:hover{
        background: #02367d;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
`

const SearchRandomButton = styled.button`
    cursor: pointer;
    color: #03449d;
    background: #b4d3fe;
    border: transparent;
    border-radius: 0.25rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transition: 0.3s ease-in-out all;
    text-transform: capitalize;
    display: inline-block;
    &:hover{
        color: #FFF;
        background: #222;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
`



