const Venueinfo=(state="",action)=>{
    switch(action.type){
        case 'Venueinfo':
            state=action.payload
            return state;
        default:
            return state;
    }
}
export default Venueinfo;