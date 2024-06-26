// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Evilicons from '@expo/vector-icons/EvilIcons';
// import FontAwsome from '@expo/vector-icons/FontAwesome';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  

//   const navigation = useNavigation(); // Initialize navigation hook
   
//   const LandingPage = () => {
//     navigation.navigate('Landingpage');
//   };


//   const HomeScreen = () => {
//     // Basic authentication logic (replace with your actual authentication process)
//     if (username === '1' && password === '1') {
//       console.log('Login successful'); // For demonstration purposes
//       navigation.navigate('Home');
//     } else {
//       console.log('Invalid credentials'); // For demonstration purposes
//       // Handle invalid credentials (e.g., display an error message)
//     }
//   };
  
 

//   return (
//     <View style={styles.container}>
//       <View style={{ position: 'absolute', top: 10, left: 10, marginTop:50}}>
//           <Ionicons name='arrow-back-outline' size={30}  onPress={LandingPage}/>
//       </View>
//       <Text style={styles.head}>HC TECHI</Text>

      
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         placeholderTextColor={'#fff'}
//         onChangeText={text => setUsername(text)}
//         value={username}
//       />
//       <TextInput
//         style={styles.input}
//         styles={{textDecorationLine:'underline'}}
//         placeholder="Password" 
//         placeholderTextColor={'#fff'}
//         onChangeText={text => setPassword(text)}
//         value={password}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button}   onPress={HomeScreen}>
//         <Text style={styles.buttonText}>LOGIN</Text>
//       </TouchableOpacity>
//       <Text style={styles.pass}>Forgot password !!!</Text>

//       <View style={{ flexDirection: 'column',justifyContent:'center',width:165}} >
//       <FontAwsome.Button name='apple' backgroundColor='#47624f' color='#fff' borderRadius={25} >
//       <Text style={{color:'white'}} >Sign in with Apple</Text>
//         </FontAwsome.Button>
//         </View>
//         <View style={{marginTop:20,  }} onPress={HomeScreen}>
//         <FontAwsome.Button name='google' backgroundColor='#47624f' color='white' borderRadius={25} >
//       <Text  style={{color:'white',}}>Sign in with Google</Text>
//         </FontAwsome.Button>
//         </View>
      
      
      
        
      
//    </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#52AD9C',
  
//   },
//   input: {
//     width: 300,
//     height: 40,
//     borderColor: 'gray',
    
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#47624f',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 25,
//     marginBottom:20
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   pass:{
//     color:'white',
//     fontWeight: 'normal',
//     fontSize: 15,
//     marginBottom:20,
//     textDecorationLine:'underline'
//   },
//   head:{
//     color:'white',
//     fontWeight: 'bold',
//     fontSize: 28,
//     marginBottom:20
//   }
  

 
  
// });

//android : 101582001873-3cdlfcp15b2nc8j7ggn57qgahvo5f4b7.apps.googleusercontent.com

// export default Login;

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import Evilicons from '@expo/vector-icons/EvilIcons';
import FontAwsome from '@expo/vector-icons/FontAwesome';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation(); // Initialize navigation hook

  const handleSendOTP = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/send-otp', { phoneNumber });
      Alert.alert('OTP Sent', response.data.message);
    } catch (error) {
      Alert.alert('Error', 'Failed to send OTP');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/verify-otp', { otp });
      Alert.alert('OTP Verified', response.data.message);
      if (response.data.success) {
        // Navigate to HomeScreen upon successful verification
        HomeScreen();
      }
    } catch (error) {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  const LandingPage = () => {
    navigation.navigate('Landingpage');
  };

  const HomeScreen = () => {
    // Basic authentication logic (replace with your actual authentication process)
    if (username === '1' && password === '1') {
      console.log('Login successful'); // For demonstration purposes
      navigation.navigate('Home');
    } else {
      console.log('Invalid credentials'); // For demonstration purposes
      // Handle invalid credentials (e.g., display an error message)
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', top: 10, left: 10, marginTop: 50 }}>
        <Ionicons name='arrow-back-outline' size={30} onPress={LandingPage} />
      </View>
      <Text style={styles.head}>HC TECHI</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={'#fff'}
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#fff'}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Send OTP" onPress={handleSendOTP} />
      <TextInput
        style={styles.input}
        placeholder="OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
      />
      <Button title="Verify OTP" onPress={handleVerifyOTP} style={{marginBottom:20}} />

      <TouchableOpacity style={styles.button} onPress={HomeScreen}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.pass}>Forgot password !!!</Text>

      <View style={{ flexDirection: 'column', justifyContent: 'center', width: 165 }} >
        <FontAwsome.Button name='apple' backgroundColor='#47624f' color='#fff' borderRadius={25} >
          <Text style={{ color: 'white' }} >Sign in with Apple</Text>
        </FontAwsome.Button>
      </View>
      <View style={{ marginTop: 20, }} onPress={HomeScreen}>
        <FontAwsome.Button name='google' backgroundColor='#47624f' color='white' borderRadius={25} >
          <Text style={{ color: 'white', }}>Sign in with Google</Text>
        </FontAwsome.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52AD9C',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#47624f',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  pass: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 15,
    marginBottom: 20,
    textDecorationLine: 'underline'
  },
  head: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20
  }
});

export default Login;
