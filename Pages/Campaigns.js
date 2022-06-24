import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import IonIcons from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';

const Campaigns = ({ navigation}) => {
    const DATA = [
        {
            id: 1,
            source: "https://www.coca-cola.co.ke/content/dam/one/ke/en/section/UTC-IMAGE-DESKTOP-1600-900.png",
            name: "Coca cola"
        },
        {
            id: 2,
            source: "https://www.coca-cola.co.ke/content/dam/one/ke/en/section/UTC-IMAGE-DESKTOP-1600-900.png",
            name: "Pepsi"
        },
        {
            id: 3,
            source: "https://www.coca-cola.co.ke/content/dam/one/ke/en/section/UTC-IMAGE-DESKTOP-1600-900.png",
            name: "Pepsi"
        }
    ]
    const renderItem = ({ item }) => (
        <View>
            <Image
                source={{ uri: item.source }}
                resizeMode="cover"
                style={[tw`w-72 h-40 mr-4 rounded-md`]}
            />
            <Text style={[tw`text-lg font-black tracking-wider`]}>{item.name}</Text>
        </View>
    );

    const renderItemTwo = ({ item }) => (
        <TouchableOpacity onPress={()=>{ navigation.navigate("Campaign", item)}}>
            <Image
                source={{ uri: item.source }}
                resizeMode="cover"
                style={[tw`w-full h-52 mr-4 rounded-md`]}
            />
            <Text style={[tw`text-lg font-black tracking-wider mb-6`]}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={[tw`p-10 pb-0 px-4 h-full`]}>
            <ScrollView> 
                <View style={[tw`flex flex-row items-center ml-4`]}>
                    <IonIcons name={"location-outline"} color={"black"} size={30} />
                    <Text style={[tw`text-lg ml-3`]}>Muthaiga Edge, Nairobi, Kenya</Text>
                </View>
                <View style={[tw`mt-6`]}>
                    <FlatList
                        data={DATA}
                        ListHeaderComponent={<Text style={[tw`hidden`]}>Hidden</Text>}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
                <View style={[tw`mt-6`]}>
                    
                    <FlatList
                        data={DATA}
                        ListHeaderComponent={<Text style={[tw`text-xl font-black mb-3`]}>For you</Text>}
                        ListFooterComponent={<></>}
                        renderItem={renderItemTwo}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Campaigns