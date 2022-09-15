import service from "..";
export function getmusicitemlist(data){
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}

export function getitemlist(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
    })
}
export function getmusiclyric(data){
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}