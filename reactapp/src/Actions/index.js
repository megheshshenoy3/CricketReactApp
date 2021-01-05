export const Playerinfo=(data)=>{
    return{
        type:'UpdatePlayer',
        payload:data

    }
}
export const Matchinfo=(data)=>{
    return{
        type:'UpdateMatch',
        payload:data

    }
}
export const Countryinfo=(data)=>{
    return{
        type:'UpdateCountry',
        payload:data

    }
}
export const TournamentInfo=(data)=>{
    return{
        type:'TournamentInfo',
        payload:data

    }
}

export const Venueinfo=(data)=>{
    return{
        type:'Venueinfo',
        payload:data

    }
}
export const Sidebarinfo=(data)=>{
    return{
        type:'UpdateSide',
        payload:data
    }
}