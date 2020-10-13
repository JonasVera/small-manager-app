import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/login';
import {AuthContext} from './src/components/Context/context';
import AppStack from './src/routes/AppStack';
import Home from './src/pages/Main/Home';
import { AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabs from './src/routes/HomeTabs';
import {AppLoading} from 'expo';
import {Archivo_400Regular,Archivo_700Bold,useFonts} from '@expo-google-fonts/archivo';
import {Poppins_600SemiBold,Poppins_400Regular} from '@expo-google-fonts/poppins';
import { isLoading } from 'expo-font';
 
export default function App() {
  const initialLoginState = {
    isLoading: false,
    userName: null,
    userToken: null,
  };
  
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
       
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    
    signIn: async(auth,data,token) => {
      
        if(auth){
          
         try {
             
             await AsyncStorage.setItem('userToken',token);
             await AsyncStorage.setItem('id',JSON.stringify(data.id));
             await AsyncStorage.setItem('user',data.username);
             await AsyncStorage.setItem('email',data.email);
             await AsyncStorage.setItem('sexo',data.gender);
             await AsyncStorage.setItem('bio',data.bio);
             await AsyncStorage.setItem('avatar',data.avatar);
             await AsyncStorage.setItem('preview',data.avatar);
             await AsyncStorage.setItem('data',JSON.stringify(data));
             console.log(data);
             dispatch({ type: 'LOGIN',id:data.username,token: token });
             loginState.setUserToken(token);
            
            
          } catch(e) {
            console.log(e);
        }
       
     } 
    },
   
    
    signOut: async() => {
       console.log("Saindo !!"); 
      try {
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('user');
        await AsyncStorage.removeItem('id');
        await AsyncStorage.removeItem('email');
        await AsyncStorage.removeItem('avatar');
        await AsyncStorage.removeItem('dataCad');
        await AsyncStorage.removeItem('preview');
        await AsyncStorage.removeItem('sexo');
        await AsyncStorage.removeItem('data');
        await AsyncStorage.removeItem('data_contacts');
        
        
      } catch(e) {
         
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
     
      
    },

    
  }), []);
     
 
  async function loadToken  (){
    try {
      userToken = await AsyncStorage.getItem('userToken');
      //  console.log(userToken);
    } catch(e) {
      
    }
   dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  }
  loadToken();

  let[fontsLoaded] = useFonts({
    Archivo_400Regular,Archivo_700Bold,Poppins_600SemiBold,Poppins_400Regular
  });

  if(!fontsLoaded){
    return  <AppLoading/>
  }
    else{

      if(!isLoading){
        return  <ActivityIndicator style={{flex:1,height:100}}/>
      }else{
        return (
          <>
            <AuthContext.Provider value={authContext}>
           
            <NavigationContainer>
              {loginState.userToken !== null ? ( <HomeTabs/>) :<AppStack/> }
           </NavigationContainer>
             
            </AuthContext.Provider>
            <StatusBar style='light' backgroundColor='#8257E5'/>
             
          </>
        );
      }
   }
      
   
  
}

 
