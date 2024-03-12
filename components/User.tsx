import { View, Text, Image } from 'react-native'
import React from 'react'
import { UserProps } from '../types'



const User = ({ src, username }: UserProps) => {
    return (
        <View className="flex flex-row item-center space-x-3 mt-5">
            <Image source={{ uri: src }} className="w-10 h-10 rounded-full" />
            <Text className="text-lg text-gray-200 font-semibold">{username}</Text>
        </View>
    )
}

export default User