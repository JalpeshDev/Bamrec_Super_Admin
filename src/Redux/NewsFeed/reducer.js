import actions from "./action";


const initState={
    newsFeedData:JSON.parse(localStorage.getItem("newsFeedData")) || [],

}

export default(state=initState,action)=>{
    switch(action.type){
        case actions.ADD_NEWSFEED_DATA:
            console.log(action.payload)
            localStorage.setItem("newsFeedData", JSON.stringify(action.payload));
            return{
                ...state,   
                newsFeedData:action.payload
            }
            default:
                return state;

    }

}