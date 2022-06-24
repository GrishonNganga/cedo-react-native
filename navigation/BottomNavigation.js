import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
        import IonIcons from 'react-native-vector-icons/Ionicons'

import Home from '../Pages/Home' 
import Transactions from '../Pages/Transactions'
import Profile from '../Pages/Profile'
const Tab = createBottomTabNavigator()

const Dashboard = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;
                        if (rn === "Home") {
                            iconName = focused ? "home" : "home-outline"
                        } else if (rn === "Transactions") {
                            iconName = focused ? "receipt" : "receipt-outline"
                        } else if (rn === "Profile") {
                            iconName = focused ? "person" : "person-outline"
                        }
                        return <IonIcons name={iconName} size={size} color={color} />
                    },
                    tabBarActiveTintColor: "#fbbf24",
                    tabBarInactiveTintColor: "grey",
                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                    tabBarStyle: { padding: 10, height: 70 }
                })}
            >
                <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Tab.Screen name="Transactions" component={Transactions} options={{headerShown: false}}/>
                <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Dashboard