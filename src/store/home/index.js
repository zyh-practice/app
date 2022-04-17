import {reCategoryList,reqGetBanneList,reqFloorList} from '@/api'
const state={
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const mutations={
    CATEGORYLIST(state,categoryList){
        
        state.categoryList=categoryList.slice(0,16)
    },
    GETBANNERLIST(store,list){
        store.bannerList=list
        
    },
    GETFLOORLIST(state,list){
        state.floorList=list
       
    }
}
const actions={
    // 三级目录
    async categoryList(commit){
      let result= await reCategoryList()
         if(result.code==200){
             commit.commit("CATEGORYLIST",result.data)
         }
    },
    // 轮播图
    async getBannerList(state){
        let result=await reqGetBanneList();
        if(result.code===200){
            state.commit('GETBANNERLIST',result.data)
        }
    },
    // floor
    async getFloorList(store){
            let result=await reqFloorList()
            if(result.code==200){
                store.commit('GETFLOORLIST',result.data)
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