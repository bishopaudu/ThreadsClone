import { View,Text } from './Themed';
import { useColorScheme } from 'react-native';
import {Ionicons,Feather,AntDesign,FontAwesome} from '@expo/vector-icons'


export default function ButtomIcons() {
    const iconSize = 20
    const currentTheme = useColorScheme()
    const iconsColor = currentTheme === 'dark' ? 'white' :'black'

    return (
        <View style={{flexDirection:"row",alignItems:'center',gap:10}}>
            <FontAwesome name='heart-o' size={iconSize} color={iconsColor}/>
            <Ionicons name='chatbubble-outline' size={iconSize} color={iconsColor} />
            <AntDesign name='retweet' size={iconSize} color={iconsColor}/>
            <Feather name='send' size={iconSize} color={iconsColor}/>
        </View>
    )
}