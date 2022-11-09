import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/MealsContext'

function Modal() {
    const {selectedMeal, closeModal} = useGlobalContext()
  return (
    <ModalOverlay>
        <ModalContainer>
            <ModalImg src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
            <ModalContent>
                <h4>{selectedMeal.strMeal}</h4>
                <ModalContentParagraph>Cooking Instructions</ModalContentParagraph>
                <ModalContentParagraph>{selectedMeal.strInstructions}</ModalContentParagraph>
                <ModalContentLink href={selectedMeal.strSource} target='_blank'>Original Source</ModalContentLink>
                <CloseButton onClick={closeModal}>Close</CloseButton>
            </ModalContent>
        </ModalContainer>
    </ModalOverlay>
  )
}

export default Modal

const ModalOverlay = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    display: grid;
    place-items: center;
    transition: 0.3s ease-in-out all;
    z-index: 100;
`

const ModalContainer = styled.div`
    width: 80vw;
    max-width: 800px;
    height: 80vh;
    background-color: #fff;
    overflow: scroll;
    border-radius: 0.25rem;
`

const ModalImg = styled.img`
    height: 15rem;
    width: 100%;
    display: block;
    object-fit: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    cursor: pointer;
`

const ModalContent = styled.div`
    padding:1rem 1.5rem;
`
const ModalContentParagraph = styled.p`
    color: #475569;
`

const ModalContentLink = styled.a`
    color: #03449d;
    display: block;
    margin-bottom: 1rem;
    text-decoration: underline;
    transition: 0.3s ease-in-out all;
    &:hover {
        color: #222;
    }
`

const CloseButton = styled.button`
    cursor: pointer;
    color: #FFF;
    background: #842029;
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