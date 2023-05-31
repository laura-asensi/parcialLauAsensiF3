import React, { useState } from 'react'
import Card from './Card';
import style from '../style.module.css'


export default function Formulario() {

    const [nombre , setNombre] = useState('');
    const [color , setColor] = useState('');
    const [mensaje, setMensaje] = useState(false)

    const onChangeinput = (event)=>{
        setNombre(event.target.value)
    }

    const onChangeColor = (event)=>{
        setLibro(event.target.value)
    }

    const onSubmitForm = (event)=>{

        event.preventDefault();
        const nombreValido = nombre.trim();
        const colorValido = color.trim()

        if(nombreValido.length > 3 && colorValido.length > 6){
            setMensaje(true)
        }
        else{
            setMensaje(false)
            alert('Por favor chequea que la informacion sea correcta')
        }
    }
  return (
    <>
    <h1>Mi formulario</h1>
    <form className={style.form} onSubmit={onSubmitForm}>
        <input type="text" placeholder='ingrese su nombre' onChange={onChangeinput} value={nombre}/>
        <input type="text" placeholder='ingrese su color favorito'onChange={onChangeColor} value={color}/>
        <button>Enviar</button>
    </form>

    {mensaje ? <Card userName={nombre} colour={color} /> : null}
    </>

  )
}
