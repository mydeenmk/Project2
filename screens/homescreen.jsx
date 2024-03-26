import React, { useState } from 'react';
import { View, TextInput,  StyleSheet, Text, TouchableOpacity,Image,ScrollView,fontWeight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from "@react-native-material/core";
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }) => {
  const goToCart = () => {
    navigation.navigate('Cart');
  };
  


  return (
    <ScrollView>
    <View style={styles.container}>
      <View >
      <View style={styles.header}>
     
        <Text style={styles.headerText}>Shopping Cart</Text>
        
      </View>
      </View>
            <View style={styles.content}>
              <Image
                source={require('../assets/hc.png.jpg')}
                style={styles.cartImage}
              />
           
              <Image
                source={require('../assets/hc.png.jpg')}
                style={styles.cartImage}
              />
            </View>   
            <View style={styles.content}>
              <Image
                source={require('../assets/hc.png.jpg')}
                style={styles.cartImage}
              />
           
              <Image
                source={require('../assets/hc.png.jpg')}
                style={styles.cartImage}
              />
            </View>   
            <View style={styles.content}>
              <Image
                source={require('../assets/hc.png.jpg')}
                style={styles.cartImage}
              />
           
              <Image
                source={require('../assets/hc.png.jpg')}
                style={styles.cartImage}
              />
            </View>  
            <View style={styles.content}>
              <Image
                source={require('../assets/hc.png.jpg')}
                style={styles.cartImage}
              />
           
              <Image
                source={require('../assets/hc.png.jpg')}
                style={styles.cartImage}
              />
            </View>   
            <View style={styles.content}>
              <Image
                source={require('../assets/hc.png.jpg')}
                style={styles.cartImage}
              />
           
              <Image
                source={require('../assets/hc.png.jpg')}
                style={styles.cartImage}
              />
            </View>  
        
      
      
        <View >
        <TouchableOpacity onPress={goToCart} style={styles.button}>
          <Text style={styles.buttonText}>Go to Cart</Text>
        </TouchableOpacity>
        </View>
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#9db0ce',
  },
  header: {
    marginLeft: 20,
    marginBottom:5,
    alignItems:'flex-start',
   
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'monospace',
    color:'#E1E1DA'
  },
  content: {
    alignItems: 'flex-start',
    marginLeft:20,
    flexDirection:'row',
    display:'flex',
    
  },
  content2: {
  flexDirection:'row'
  },
 
  cartImage: {
    width: 150,
    height: 180,
    marginTop: 20,
    marginLeft:20

   
  },
  cartImage2: {
    width: 150,
    height: 180,
    marginTop: 20,
    marginLeft:20
   
   
  },
  cartImage3: {
    width: 150,
    height: 180,
    margin: 20,
    

   
  },
  cartImage4: {
    width: 150,
    height: 180,
    marginTop: 20,
    marginLeft:20
   
   
  },
  cartText: {
    fontSize: 18,
    marginBottom: 20,
  },
 
  button: {
    backgroundColor: '#535878',
    paddingVertical: 10,
    flexDirection:'row',
    justifyContent:'center',
    borderRadius: 50,
    width:150,
    marginLeft:125,
    marginTop:40,
    position:'relative'
   
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'
  },
});
  export default HomeScreen;

