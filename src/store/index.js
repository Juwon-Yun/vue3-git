import { createStore} from 'vuex'

import git from './modules/main/git.js'

const store = createStore({
    namespace : true,
    modules : {
        git : git,
    }
})

export default store