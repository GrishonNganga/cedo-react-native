import 'react-native-gesture-handler';    
    
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { userStore } from './stores'
import { refreshToken } from './api/endpoints'

import { Register } from './Pages/Register'
import Dashboard  from './navigation/BottomNavigation'
import { ScreenLoader } from './Components/Ui'

export default function App() {
  const user = userStore(state => state.user);
  const storeUser = userStore(state => state.storeUser);

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!user) {
      setLoading(true)
      refreshToken().then(response => {
        setLoading(false)
        console.log(response)
        if (response && response.status === 200 && response.data.user) {
          storeUser(response.data.user)
        }
      })
    }
  }, [user])
  return (
    <View style={[tw`w-full h-full`]}>
      {
        !loading && user &&
        <Register />
      }
      {
        !loading && !user &&
        <Dashboard />
        ||
        (!loading &&
          <ScreenLoader />
        )
      }
      {


      }
    </View>
  )
}
