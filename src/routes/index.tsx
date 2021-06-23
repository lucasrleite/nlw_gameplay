import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import {AuthR} from './auth.routes'

export function Routes(){
    return(
    <NavigationContainer>
        <AuthR />
    </NavigationContainer>
    )
}