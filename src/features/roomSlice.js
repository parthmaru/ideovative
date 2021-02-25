import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
  name: "room",
  initialState: {
    roomId: null,
  },
  reducers: {
    setRoomId: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { setRoomId } = roomSlice.actions;
export const selectRoomId = (state) => state.room.roomId;
export default roomSlice.reducer;
