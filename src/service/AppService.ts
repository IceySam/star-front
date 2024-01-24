import { computed, reactive } from "vue";

const appState = reactive({
    isLoading: false,
    layout: null,
    showSideMenu: true,
})

export const useAppService = () => {
    const isLoading = computed(() => appState.isLoading);
    const currentLayout = computed(() => appState.layout);

    const setLoading = (value: boolean) => {
        appState.isLoading = value;
    }

    const setLayout = (value: any) => {
        appState.layout = value;
    }

    const toggleSideMenu = () => {
        appState.showSideMenu = !appState.showSideMenu;
        const side = document.querySelector('.side-bar')
        const main = document.querySelector('.main-bar')
        if (appState.showSideMenu) {
            side?.classList.remove('un-show');
            main?.classList.remove('expand');
        } else {
            side?.classList.add('un-show');
            main?.classList.add('expand');
        }
    }

    return { appState, isLoading, currentLayout, toggleSideMenu, setLoading, setLayout }
}