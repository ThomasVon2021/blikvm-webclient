export default {
    state:{
        display_virtual_keyboard:false
    },
    mutations:{
        show_virtual_keyboard(state){
            state.display_virtual_keyboard = true;
        },
        hide_virtual_keyboard(state){
            state.display_virtual_keyboard = false;
        },
        toggle_virtual_keyboard(state){
            state.display_virtual_keyboard = !state.display_virtual_keyboard;
        }
    }
}