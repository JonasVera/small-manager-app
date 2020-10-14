import React,{useState} from 'react';
import {View,Image,Text,Bu,TextInput,Animated,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
 
import styles from './styles'; 
import PageHeader from '../../../components/PageHeader/pageHeader';
 
 
import { ScrollView } from 'react-native-gesture-handler';
import CardInfo from '../../../components/CardInfor';
import { FontAwesome,MaterialCommunityIcons,Ionicons,Feather} from "@expo/vector-icons";
import { Divider } from 'react-native-elements';
import CardInfoEmpresa from '../../../components/CardInfoEmpresa';
import ConfigEmpresa from '../../../components/CardInfoEmpresa/ConfigEmpresa/index';
import CardProduto from '../../../components/CardProduto';
import VendaProduto from '../../../components/CardProduto/vendaProduto';
import ConfigProduto from '../../../components/CardProduto/ConfigProduto';
function Produtos(){
    
    const [viewCard,setViewCard] = useState('Produto');
    const navigation = useNavigation();
    function handleNavigateToMyProfile(){
        navigation.navigate('MyProfile');
    }

    function hadleRenderCard(view){
        setViewCard(view);
    }

    return (
        <>
      
        <PageHeader title={'Produto'}/>
       
        <View style={styles.container}>
           
            <View style={styles.headerButtons}>
                <TouchableOpacity  onPress={() =>hadleRenderCard('Produto')} style={styles.cardButton}>
                     <FontAwesome style={{justifyContent:'center'}} name={'product-hunt'} color={'#fff'}size={30}  />
                     <Text style={styles.textButtonCard}>Produto</Text>
                </TouchableOpacity>
                
                <TouchableOpacity  onPress={() =>hadleRenderCard('Venda')} style={styles.cardButton}>
                     <MaterialCommunityIcons style={{justifyContent:'center'}} name={'point-of-sale'} color={'#fff'}size={30}  />
                     <Text style={styles.textButtonCard}>Vendas</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() =>hadleRenderCard('Config')} style={styles.cardButton}>
                     <FontAwesome style={{justifyContent:'center'}} name={'cog'} color={'#fff'}size={30}  />
                     <Text style={styles.textButtonCard}>Config.</Text>
                </TouchableOpacity>
                 
          </View>
          <Divider/>
           <ScrollView>
            
            {viewCard === 'Produto' && (<CardProduto/>)}
            {viewCard === 'Venda' && (<VendaProduto/>)}
            {viewCard === 'Config' && (<ConfigProduto/>)}
            
           
            
          </ScrollView>
         
          
      </View>
               
      </>
    );
}

export default Produtos;