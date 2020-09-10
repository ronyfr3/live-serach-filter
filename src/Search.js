import React,{useState} from 'react'
import Images from './Images'

function Search() {
    const [img , setImg] =useState('')
    const inputChange = (e)=>{
     const data = e.target.value
     setImg(data)
    }
    return (
        <>
            <input className='search' value={img} placeholder='Search here' onChange={inputChange}/>
            {img === '' ? null : <Images name={img}/>}
        </>
    )
}

export default Search
