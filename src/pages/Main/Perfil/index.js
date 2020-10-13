import React,{useState} from 'react';
import {View,Image,Text,Bu,TextInput,Animated,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
 import Modal from './Modal';
import styles from './styles'; 
import PageHeader from '../../../components/PageHeader/pageHeader';
import RoutersProfile from './RoutersProfile';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import CardInfo from '../../../components/CardInfor';
import { FontAwesome,MaterialCommunityIcons,Ionicons,Feather} from "@expo/vector-icons";
import { Divider } from 'react-native-elements';
import CardInfoEmpresa from '../../../components/CardInfoEmpresa';
import ConfigEmpresa from '../../../components/CardInfoEmpresa/ConfigEmpresa/index';

import CardProduto from '../../../components/CardProduto';
function Perfil(){
    const [modal, setModal] = useState(false);
    const [viewCard,setViewCard] = useState('Meu perfil');
    const navigation = useNavigation();
    function handleNavigateToMyProfile(){
        navigation.navigate('MyProfile');
    }

    function hadleRenderCard(view){
        setViewCard(view);
    }

    return (
        <>
      
        <PageHeader title={'Perfil'}/>
       
        <View style={styles.container}>
           
            <View style={styles.headerButtons}>
                <TouchableOpacity  onPress={() =>hadleRenderCard('Meu perfil')} style={styles.cardButton}>
                     <FontAwesome style={{justifyContent:'center'}} name={'user-circle'} color={'#fff'}size={30}  />
                     <Text style={styles.textButtonCard}>Meu perfil</Text>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={() =>hadleRenderCard('Empresa')} style={styles.cardButton}>
                     <Feather style={{justifyContent:'center'}} name={'briefcase'} color={'#fff'}size={30}  />
                     <Text style={styles.textButtonCard}>Empresa</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() =>hadleRenderCard('Config')} style={styles.cardButton}>
                     <FontAwesome style={{justifyContent:'center'}} name={'cog'} color={'#fff'}size={30}  />
                     <Text style={styles.textButtonCard}>Config.</Text>
                </TouchableOpacity>
                 
          </View>
          <Divider/>
           <ScrollView>
            
            {viewCard === 'Meu perfil' && (<CardInfo/>)}
            {viewCard === 'Empresa' && (<CardInfoEmpresa/>)}
            {viewCard === 'Config' && (<ConfigEmpresa/>)}
            
           
            
          </ScrollView>
         
          
      </View>
               
      </>
    );
}

export default Perfil;