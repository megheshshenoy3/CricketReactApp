const Tournamentinfo=(state="",action)=>{
    switch(action.type){
        case 'TournamentInfo':
            state=action.payload
            return state;
        default:
            return state;
    }
}
export default Tournamentinfo;