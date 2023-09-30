import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import { AddTodo } from '../../redux/actionsCreators/ActionCreator'
// import Button from '../UI/Button'
// import Input from '../UI/Input'
import { toast } from 'react-toastify'
import Notification from "../UI/Notification"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { Link } from "react-router-dom"
import ButtonCom from '../UI/Button'
import InputCom from '../UI/Input'



const Todos = (props) => {

  
  const [value , setValue] = useState("")
  const [open , setOpen] = useState(false)
  const dispatch = useDispatch()

  const valueChangeHandler = (e) => {
    setValue(e.target.value)
  }
  
  // const notify = () => toast.success("Добавлено ");

  const clickHandler = () => {
    setOpen(true)
    if(value !== ""){
      dispatch(AddTodo(value, Math.random().toString()))
    setValue("")
    // notify()
    }
  }

  const closehandler = () => {

    setOpen(false)
    props.close()
  }

  const statusInput = value === "" ? "error" : ""
  const statusButton = value === "" ? "error" : "success"


  return (
    <>
    <Container className="App">
      <ContainerCloseBtn>
        <Link style={{textDecoration: "none"}} to="viewList" ><ButtonCom variant="outlined" >view lists</ButtonCom></Link>
        <AiOutlineCloseCircle onClick={closehandler} />
      </ContainerCloseBtn>
      <ContainerForm>
      <InputCom error={statusInput} label="whrite..." onChange={valueChangeHandler} value={value} />
      <ButtonCom color={statusButton} variant="contained" onClick={clickHandler} >ADD</ButtonCom>
      {/* <Notification severity="success" onClose={closehandler} open={open} /> */}
      </ContainerForm>
    </Container>
      {/* <Notification/> */}

    </>
  );
}

export default Todos

const Container = styled.div`
  width: 600px;
  height: 120px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  margin: auto;
  margin-top: 50px;
  position: relative;
    top: 0;
    left: 0;
    right: 0; 
    z-index: 1;
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

const ContainerForm = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContainerCloseBtn = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
`

// const ViewTodos = styled.h2`
//   padding: 5px;
//   border-radius: 10px;
//   border: 2px none;
//   background-color: gray;
//   opacity: 0.7;
//   color: white;
//   font-size: 20px;
//   cursor: pointer;
//   &:hover{
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     transition-duration: 0.5s;
//   }
//   &:active{
//     background-color: blue;
//   }
// `
