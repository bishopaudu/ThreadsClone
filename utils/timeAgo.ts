export function timeAgo(date:string):string {
    const now  = new Date();
    const diffInMilli = now.getTime() - new Date(date).getTime()

    const diffInSecs = Math.floor(diffInMilli /1000)
    const diffInMin = Math.floor(diffInSecs /60)
    const diffInHours = Math.floor(diffInMin /60)
    const diffInDays = Math.floor(diffInHours /24)

    if(diffInSecs < 60){
        return diffInSecs + "s"
    } else if (diffInMin < 60){
        return diffInMin + 'min'
    } else if (diffInHours < 24) {
        return diffInHours + 'h'
    } else if (diffInDays === 1) {
        return 'Yesterday'
    } else {
        return diffInDays + 'days'
    }



}