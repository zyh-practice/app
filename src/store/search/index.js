import { reqGetSearchInfo } from "@/api"
const state={
    searchList:{}
}
const mutations={
     GETSEARCHLIST(state,data){
         state.searchList=data
     }
}
const actions={
    async reqGetSearchInfo(commit,params={}){
       let result= await reqGetSearchInfo(params)
        if(result.code==200){
            commit.commit('GETSEARCHLIST',result.data)
        }
    }
}
// 计算属性，简化数据
const getters={
    goodsList(state){
        // state是当前仓库而不是大仓库
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}