import * as React from 'react'
import { Thread } from '../types/threads';
import { View,Text } from './Themed';
import { StyleSheet} from 'react-native';
import { Image } from 'expo-image';
import { blurhash } from '../utils/imagePlacdholder';
import ButtomIcons from './ButtomIcons';
import PostFooter from './PostFooter';
import PostHeading from './PostHeading';
import PostLeftSide from './PostLeftSide';


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







const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:6,
        paddingBottom:30
    },
})


