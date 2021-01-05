const Sidebar=(state="",action)=>{
    switch(action.type){
        case 'UpdateSide':
            state=action.payload
            return state;
        default:
            return state;
    }
}
export default Sidebar;