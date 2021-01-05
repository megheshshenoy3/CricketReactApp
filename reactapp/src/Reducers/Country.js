const CurrentPage=(state="",action)=>{
    switch(action.type){
        case 'UpdateCountry':
            state=action.payload
            return state;
        default:
            return state;
    }
}
export default CurrentPage;