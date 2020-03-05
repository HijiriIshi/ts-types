import Vue from 'vue'
import VueSession from 'vue-session'

declare module 'vue/types/vue' {
    interface Vue {
        $session: VueSession;
    }
}