import React, { useRef, useState, useEffect } from 'react';
import { Video } from 'expo-av'

import { TextInput } from 'react-native'
import { Pressable, Text, ActivityIndicator, View } from 'react-native'

import tw from 'tailwind-react-native-classnames';

export const Input = ({ type = "default", name, onChange, secureTextEntry = false, className, placeholder }) => {
    return (
        <TextInput
            style={[tw`w-full text-sm border border-yellow-400 leading-5 rounded-md p-3 ${className}`]}
            onChangeText={onChange}
            keyboardType={type}
            name={name}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
        />
    )
}

export const Button = ({ text, onClick, className, disabled }) => {
    return (
        <Pressable
            style={[tw`w-3/4 bg-yellow-300 rounded-md shadow-md ${disabled && "bg-yellow-200"}`]}
            onPress={()=>{!disabled && onClick()} }
        >
            <Text
                style={[tw`text-center py-5 text-white font-semibold text-lg ${className}`]}
            >
                {text}
            </Text>
        </Pressable>
    )
}

export const ButtonLoader = () => {
    return (
        <Pressable
            style={[tw`w-3/4 bg-yellow-300 rounded-md shadow-md py-3`]}
        >
            <ActivityIndicator
                size={"large"}
                color={"white"}
            />
        </Pressable>
    )
}

export const ScreenLoader = () => {
    return (
        <View style={[tw`w-full h-full flex items-center justify-center`]}>
            <ActivityIndicator color="#fbbf24" style={[tw`w-32 h-32`]} size={"large"}/>
        </View>
    )
}

export const Vid = ({ uri, posterSource, finishedPlaying }) => {
    videoRef = useRef(null);


    const [status, setStatus] = useState()

    useEffect(() => {
        if(status?.didJustFinish){
            finishedPlaying()
        }
    }, [status])
    return (
        <View style={[tw`w-full`]}>
            <Video
            ref={videoRef}
            resizeMode="contain"
            usePoster={true}
            posterSource={posterSource}
            style={[tw`w-full h-60`]}
            source={{uri: uri}}
            useNativeControls
            onPlaybackStatusUpdate={setStatus}

            />
        </View>
    )
}