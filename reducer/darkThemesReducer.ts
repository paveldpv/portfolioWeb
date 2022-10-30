const openBasket = {
   dark : false
}

export const darkThemesReducer = (state=openBasket,action)=>{
   switch (action.type) {
      case `DARK_MODE_ON`:         
         return{...state,dark:true}
         break;   
      case `DARK_MODE_OFF`:         
         return{...state,dark:false}
         break; 
      default:
         return state
         break;
   }
}