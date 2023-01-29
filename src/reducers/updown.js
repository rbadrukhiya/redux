const initval = 0;
const updown = (state = initval,action)=>{
    switch (action.type) {
        case 'incr':
        return state=state+1;
        case 'decr':
            if(state==0)
            {
                return state
            }
        return state=state-1;
        default:
            return state;
    }
}
export default updown