import React, { useState } from 'react'
import {sculptureList} from './data';

export default function Art() {
    const[index,setIndex]=useState(0);
    const prev=()=>{
        if (index<1) {
            alert('Out of range');
        } else {
            setIndex(index-1);
        }
    }
    const next=()=>{
        if (index>sculptureList.length-2) {
            alert('Out of range');
        } else {
            setIndex(index+1);
        }
        setIndex(index+1);
    }
    const first=()=>{
        setIndex(index=0);
    }
    const last=()=>{
        setIndex(index=11);
    }
  return (
    <div>
        <h1>{sculptureList[index].name}</h1>
        <img src={sculptureList[index].url} alt={sculptureList[index].alt} />
        <h3>{sculptureList[index].artist}</h3>
        <p>{sculptureList[index].description}</p>
        <button onClick={prev}>Previous</button>
        <button onClick={first}>First</button>
        <button onClick={last}>Last</button>
        <button onClick={next}>Next</button>
    </div>
  )
}
