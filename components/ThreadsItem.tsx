import * as React from 'react'
import { Thread } from '../types/threads';
import { View,Text } from './Themed';
import { StyleSheet, useColorScheme } from 'react-native';
import {Ionicons,Feather,AntDesign,FontAwesome} from '@expo/vector-icons'
import {MaterialIcons} from '@expo/vector-icons'
import { timeAgo } from '../utils/timeAgo';
import { Image } from 'expo-image';
import { blurhash } from '../utils/imagePlacdholder';


export default function ThreadsItem(thread:Thread):JSX.Element {

    return <View style={styles.container}>
        <PostLeftSide {...thread}/>
        <View style={{gap:6,flexShrink:1}}>
            <PostHeading 
            name={thread.author.name}
            createdAt={thread.createdAt}
            verified={thread.author.verified}
            />
            <Text>{thread.content}</Text>
            {thread.image && (
                <Image
                source={thread.image}
                style={{width:'100%',minHeight:300,borderRadius:10}}
                placeholder={blurhash}
                contentFit='cover'
                transition={200}
                />
            )}
            <ButtomIcons/>
            <PostFooter 
            replies={thread.repliesCount}
            likes={thread.likesCount}
            />
        </View>
    </View>
}

function PostHeading({name,createdAt,verified}:{
    name:string,
    createdAt:string,
    verified:boolean
}) {
    return (
        <View style={{flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        flexGrow:1
        }}>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                <Text style={{fontWeight:'500'}}>{name}</Text>
                {verified && (
                    <MaterialIcons name='verified' size={14} color='#60a5fa'/>
                )}
            </View>
            <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                    <Text style={{color:'gray'}}>{timeAgo(createdAt)}</Text>
                    <Feather name='more-horizontal' size={14} color='gray'/>
            </View>
        </View>
    )

}

function PostFooter({replies,likes}:{replies:number,likes:number}) {
    return (
        <Text style={{color:'gray'}}>{replies} replies. {likes}</Text> 
    )
}

function ButtomIcons() {
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

function PostLeftSide(thread:Thread) {
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
            }}>
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
                    source={thread.replies[inex-1]?.author.photo}
                    style={{width:index*9,height:index*9,borderRadius:15}}
                    placeholder={blurhash}
                    contentFit='cover'
                    transition={200}

                    />
                ))}
            </View>    
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:6,
        paddingBottom:30
    },
    Image:{
        width:40,
        height:40,
        borderRadius:20
    }
})


