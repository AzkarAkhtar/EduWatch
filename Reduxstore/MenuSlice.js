import { createSlice } from "@reduxjs/toolkit"

const MenuSlice = createSlice ({

    name : "MenuToggle",
    initialState: {
        isMenuopen : true,
    },
    reducers: {
        Togglemenu: (state, action) => {
            state.isMenuopen = !state.isMenuopen;
        },
    }

});

export const {Togglemenu} = MenuSlice.actions;
export default MenuSlice.reducer;