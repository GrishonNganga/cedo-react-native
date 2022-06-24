import { useState } from 'react';
import { View, Text, Image, ToastAndroid, useWindowDimensions } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Button, Vid } from '../Components/Ui'

const Campaign = ({ navigation }) => {

    const [played, setPlayed] = useState(false)

    const finishedPlaying = () => {
        setPlayed(true)
    }

    return (
        <View style={[tw`-mt-20`]}>
            <Vid
                uri={"https://firebasestorage.googleapis.com/v0/b/cedo-7f9c5.appspot.com/o/files%2Fvideos%2FBloow%20intro.mp4_1655994931913?alt=media&token=fc85e15d-76aa-44eb-8a02-c277280957ec"}
                posterSource={navigation.source}
                finishedPlaying={finishedPlaying}
            />
            {/* <Image
                source={{ uri: navigation.getParam("source") }}
                resizeMode="cover"
                style={[tw`w-full h-72 mr-4`]}
            /> */}
            <Text style={[tw`font-black text-2xl p-5 pb-0`]}>{navigation.getParam("name")}</Text>
            <Text style={[tw`text-gray-500 p-3 px-0 mx-6 border-b border-gray-400`]}>
                The Coca-Cola Company is an American multinational beverage corporation, best known as the producer of Coca-Cola.
                The sugary drink was invented in 1886 by pharmacist John Stith
            </Text>
            {
                !played && 
                <View style={[tw`w-full flex flex-row justify-center mt-8`]}>
                <Button text={"Watch ad to complete"} disabled={true} />
            </View>
            ||
            <View style={[tw`w-full flex flex-row justify-center mt-8`]}>
                <Button text={"Watch ad to complete"}/>
            </View> 
            }
        </View>
    )
}

export default Campaign