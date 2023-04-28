import { StyleSheet, Text, View } from 'react-native'
import {createContext,useState} from 'react'

export const OeuvreContext = createContext()

export function OeuvreContextProvider(props){
    
    
    
    return <OeuvreContext.Provider value={{}}>
        {props.children}
       
    </OeuvreContext.Provider>
}