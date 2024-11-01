import React from 'react';
import { NavigationContainer,useNavigation, useRoute, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Provider as PaperProvider } from 'react-native-paper';
import StartupScreen from './screens/StartupScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import SignUp from './screens/SignUp';
import Verify from './screens/Verify';
import LetsMeet from './screens/LetsMeet';
import Setpasssword from './screens/SetpasswordScreen.js';
import VerificationComplete from './screens/VerificationComplete.js';
import Home from './screens/Dashboard/Home.js'
import Search from './screens/Dashboard/Search.js'
import Library from './screens/Dashboard/Library.js'
import DashboardHeader from "./screens/components/DashboardHeader.js";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Dashboard () {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 80,
        paddingVertical: 0,
        backgroundColor: "#e6f3f8",
      },
      tabBarIcon: ({ focused }) => {
        let srcName;
        let label;

        if (route.name === "Home") {
          srcName = require("./assets/home.png");
          label = "Home";
        } else if (route.name === "Search") {
          srcName = require("./assets/search.png");
          label = "Search";
        } else if (route.name === "Library") {
          srcName = require("./assets/library.png");
          label = "Library";
        }

        return (
          <View style={[style.view, { opacity: focused ? 1 : 0.6 }]}>
            <Image source={srcName} style={style.Icon} />
            <Text style={style.text}>{label}</Text>
          </View>
        );
      },
    })}
  >

    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        //header: () => <DashboardHeader />,
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
       // header: () => <DashboardHeader />,
      }}
    />
    <Tab.Screen
      name="Library"
      component={Library}
      options={{
       // header: () => <DashboardHeader />,
      }}
    />
  </Tab.Navigator>
  )
}

const AuthScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName='Startup'>
    <Stack.Screen
      name="Startup"
      component={StartupScreen}
      options={{ headerShown: false }} 
    />
    {/* For the RegistrationScreen, you might want to show the header, but if not, you can apply the same options here */}
    <Stack.Screen name="Login" component={LoginScreen}
             options={{ headerShown: false,}}
            
     />
      <Stack.Screen 
      name="SignUp" 
      component={SignUp}
      options={{ headerShown: false,   }}
     />
      <Stack.Screen 
      name="Verify"
      component={Verify}
      options={{ headerShown: false,  }}
      />
       <Stack.Screen 
          name='Setpassword'
          component={Setpasssword} 
          options={{headerShown:false, 
           
          }}
        /> 
      <Stack.Screen 
      name="VerificationComplete"
      component={VerificationComplete}
      options={{headerShown:false,  }}
      />
    <Stack.Screen
     name="LetsMeet"
     component={LetsMeet}
     options={{headerShown:false,  }}
     /> 
    
  </Stack.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Search':
      return 'Search';
    case 'Library':
      return 'Library';
  }
}

export default function App() {

  
  return (
    <PaperProvider>

      <NavigationContainer >
        <Stack.Navigator initialRouteName='auth'>

        <Stack.Screen
          name='auth'
          component={AuthScreenStack}
          options={{headerShown:false}}
          />
          
          <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={({ route }) => ({
            headerShown: true,
            headerTitle: getHeaderTitle(route),
          })}
          />
        </Stack.Navigator>
      </NavigationContainer>
   
    </PaperProvider>
  );
}

const style = StyleSheet.create({
  container: {
   flex: 1,
   display: "flex",
   backgroundColor: "transparent",
  },

  view: {
    alignItems: "center",
    gap: 5,
  },

  Icon: {
    width: 24,
    height: 24,
  },

  text: {
    fontSize: 14,
    fontWeight: "700",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#222222",
    minHeight: 40,
  },
  headerLeft: {
    flexDirection: "row",
  },
  leftButton: {
    marginLeft: 10,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: 40,
  },
  buttonTxt: {
    color: "#ddd",
    fontWeight: "bold",
  },
  headerTxt: {
    color: "#ddd",
  },
});
