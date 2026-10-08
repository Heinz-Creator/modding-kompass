import {useEffect,useState} from 'react';
export function useStored(key,fallback){
 const [value,setValue]=useState(()=>{try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}});
 useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(value));}catch{/* Reading still works when browser storage is unavailable. */}},[key,value]);
 return [value,setValue];
}
export function useRoute(){
 const get=()=>location.hash.slice(2)||'start';
 const [route,setRoute]=useState(get);
 useEffect(()=>{const update=()=>setRoute(get());window.addEventListener('hashchange',update);return()=>window.removeEventListener('hashchange',update);},[]);
 return route;
}
