const CurrentPage=(state="",action)=>{
    switch(action.type){
        case 'UpdateMatch':
            state=action.payload
            return state;
        default:
            return state;
    }
}
export default CurrentPage;