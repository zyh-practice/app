import {reCategoryList} from '@/api'
const state={
    categoryList:[]
}
const mutations={
    CATEGORYLIST(state,categoryList){
        
        state.categoryList=categoryList.slice(0,16)
    }
}
const actions={
    async categoryList(commit){
      let result= await reCategoryList()
         if(result.code==200){
             commit.commit("CATEGORYLIST",result.data)
         }
    }
}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}