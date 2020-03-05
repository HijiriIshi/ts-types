interface VueSession {
    getAll: () => object;
    set: (key: string, value: string) => void;
    get: (key: string) => string;
    start: () => void;
    renew: (sessionId: string) => void;
    exists: () => boolean;
    has: (key: string) => boolean;
    remove: (key: string) => boolean;
    clear: () => void;
    destroy: () => void;
    id: () => string;
}

declare module 'vue-session' {
    function install(): void;
    var STORAGE: any;

    interface VueSession {
        key: string;
        flash_key: string;
        setAll: (all: any) => void;
        install: (Vue: any, options: any) => void;
    }
}