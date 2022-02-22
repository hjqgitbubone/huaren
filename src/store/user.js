
const state= {
    valLogin:{}
}
const mutations= {
    changeFn(state,params){
        state.valLogin = params
    }
}
const actions= {
    setUser(context,params){
        context.commit('changeFn',params)
    }
}
export default {
    namespaced:true,
    state,mutations,actions

}