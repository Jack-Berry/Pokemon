import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const simpsonSlice = createSlice({
  name: "simpson",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setApiData: (state, { payload }) => {
      state.data = payload;
    },
    setLoaded: (state) => {
      if (!state.loaded) {
        state.loaded = !state.loaded;
      }
      console.log(state.loaded);
    },
    searchData: (state, { payload }) => {
      let search;
      // if (payload === "A-Z") {
      //   search = state.data.sort((a, b) => {
      //     if (a.character > b.character) {
      //       return 1;
      //     }
      //     if (a.character < b.character) {
      //       return -1;
      //     }
      //     return 0;
      //   });

      // }
      if (payload != "") {
        search = state.data.filter((item) => {
          return item.character
            .toLowerCase()
            .includes(payload.toLocaleLowerCase());
        });
      }

      state.data = search;
    },
  },
});

export const { setApiData, searchData, setLoaded } = simpsonSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectData = (state) => state.simpson.data;
export const hasLoaded = (state) => state.simpson.loaded;

export default simpsonSlice.reducer;
