
export default {

  namespace: 'index',

  state: {
    currentIndex:0
  },
  
  reducers:{
    change({currentIndex},{payload:index}){
      return {
        currentIndex:index
      }
    }
  }

};
