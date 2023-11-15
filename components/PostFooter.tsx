import { View,Text } from './Themed';


export default function PostFooter({replies,likes}:{replies:number,likes:number}) {
    return (
        <Text style={{color:'gray'}}>{replies} replies. {likes}</Text> 
    )
}