import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'
import Campaigns from '../Pages/Campaigns'
import Campaign from '../Pages/Campaign'

const pages = {
    Campaigns: {
        screen: Campaigns,
        navigationOptions: {
            headerShown: null,
        }
    },
    Campaign: {
        screen: Campaign,
        navigationOptions: {
            title: '',
            headerTintColor: '#FFFFFF',
            headerStyle: {
                backgroundColor: 'transparent',
                elevation: 0,
            },
        }
    }
}

const HomeStack = createStackNavigator(pages)

export default createAppContainer(HomeStack)