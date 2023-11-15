import { View} from "./Themed"
import {Image} from 'expo-image'
import { useColorScheme,StyleSheet} from "react-native"
import { blurhash } from "../utils/imagePlacdholder"
import { Thread } from "../types/threads"

export default function PostLeftSide(thread:Thread) {
    const currentTheme = useColorScheme()
    const borderColor = currentTheme === 'light' ? '#00000020' : '#ffffff20'
    return (
        <View style={{justifyContent:'space-between'}}>
            <Image
            source={thread.author.photo}
            style={styles.Image}
            placeholder={blurhash}
            contentFit='cover'
            transition={200}
            />
            <View 
            style={{borderWidth:1,
            alignSelf:'center',
            borderColor:borderColor,
            flexGrow:1
            }}/>
            <View
            style={{
                width:20,
                alignItems:'center',
                alignSelf:'center',
                gap:3
            }}>
                {[1,2,3].map((index) => (
                    <Image
                    key={index}
                    //@ts-ignore
                    source={thread.replies[index-1]?.author.photo}
                    style={{width:index*9,height:index*9,borderRadius:15}}
                    placeholder={blurhash}
                    contentFit='cover'
                    transition={200}

                    />
                ))}   
            </View>

        </View>
    )
}

const styles =StyleSheet.create({
    Image:{
        width:40,
        height:40,
        borderRadius:20
    }
})