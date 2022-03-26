import { createStore } from 'vuex'

const store = createStore({
    state: {
        sidebar: {
            collapsed: false,
            sidebarWidth: 180
        }
    },
    getters: {
        sidebarWidth (state) {
            return state.sidebar.sidebarWidth
        },
        isCollapsed (state) {
            return state.sidebar.collapsed
        }
    },
    mutations: {
        toggleSidebar (state) {
            if (!state.sidebar.collapsed) {
                state.sidebar.sidebarWidth = 40
            } else {
                state.sidebar.sidebarWidth = 180
            }
            state.sidebar.collapsed = !state.sidebar.collapsed
        }
    },
    actions: {}
})

export default store