import { MutationTree } from 'vuex';
import { UserState } from './types';

export const mutations: MutationTree<UserState> = {
    loading(state) {
        state.loading = false;
    },
    email(state , payload) {
        state.email = payload;
    },

};