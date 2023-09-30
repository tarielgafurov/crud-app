import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { DeleteTodo } from '../../redux/actionsCreators/ActionCreator'
import ButtonCom from '../UI/Button'

const List = () => {
  
  const items = useSelector((prev) => prev.items)
  const dispatch = useDispatch()
  
  
  const notify = () => toast.error("Delete ");
  
  
  const deleteList = (id) => {
    dispatch(DeleteTodo(id))
    notify()
  }



  return (
    <GlobalContainer>
      {items.map((el) => {
        return (
            <ListContainer key={el.id} >
                <Text>{el.text}</Text>
                <ButtonCom variant="outlined" color="error" onClick={() => deleteList(el.id)} >Delete</ButtonCom>
            </ListContainer>
        )
      })}
    </GlobalContainer>
  )
}

export default List;

const GlobalContainer = styled.div`
  max-width: 600px;
  max-height: 300px;
  overflow-y: scroll;
  margin: auto;
  margin-top: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
`

const ListContainer = styled.div`
  padding: 11px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 500px;
  height: 30px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-family: 'Times New Roman', Times, serif;
  border-radius: 10px;
  animation: slide-down-date 1000ms ease forwards;

    @keyframes slide-down-date {
  from {
    transform: translateY(-3rem);
    background-color: blue;
  }
  to {
    transform: translateY(0);
  }
}
`


const Text = styled.h1`
border-left: 7px solid chartreuse;
padding: 5px;
`


