import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartNavigation from './cart'
import OrdersNavigation from './orders'
import ShopNavigator from './shops';
import IonicIcons from '@expo/vector-icons/Ionicons'

const BottomTab= createBottomTabNavigator();

const Tabs = () =>{
    return(
        <BottomTab.Navigator
            initialRouteName='ShopTab'
            screenOptions={{
                headerShown:false,
                tabBarLabelStyle:{
                    fontSize:12
                },
                tabBarActiveTintColor:'black',
                tabBarInactiveTintColor:'gray'
            }}>
            <BottomTab.Screen 
                name="ShopTab" 
                component={ShopNavigator}
                options={{
                    title:'Shop',
                    tabBarIcon:({focused}) =>(
                        <IonicIcons 
                        name={focused ? "home" : 'home-outline'} 
                        size={24} 
                        color="black" 
                        />
                    )
                }}
                />
            <BottomTab.Screen 
                name="OrdersTab" 
                component={OrdersNavigation}
                options={{
                    title:'Orders',
                    tabBarIcon:({focused}) =>(
                        <IonicIcons 
                        name={focused ? "file-tray" : 'file-tray-outline'} 
                        size={24} 
                        color="black" 
                        />
                    )
                }}
                />
            <BottomTab.Screen 
                name="CartTab" 
                component={CartNavigation}
                options={{
                    title:'Cart',
                    tabBarIcon:({focused}) =>(
                        <IonicIcons 
                        name={focused ? "cart" : 'cart-outline'} 
                        size={24} 
                        color="black" 
                        />
                    )
                }}
                />
        </BottomTab.Navigator>
    )
}
export default Tabs;