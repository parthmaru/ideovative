import React, { useState, useEffect } from "react";
import { SideContainer } from "../styles/SidebarStyle";
import { firestore, timestamp } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import { setRoomId } from "../features/roomSlice";

const Sidebar = () => {
  const [rooms, loading, error] = useCollection(
    firestore.collection("rooms").orderBy("timestamp", "desc")
  );
  const [currentRoomId, setCurrentRoomId] = useState("");
  const dispatch = useDispatch();

  const addRoom = () => {
    const roomName = prompt("Enter Room Name : ");

    firestore.collection("rooms").add({
      roomName: roomName,
      timestamp: timestamp,
    });
  };

  const selectRoom = (id) => {
    setCurrentRoomId(id);
  };

  useEffect(() => {
    dispatch(
      setRoomId({
        roomId: currentRoomId,
      })
    );
  }, [currentRoomId, loading]);

  return (
    <SideContainer>
      <h2>Rooms</h2>

      {!loading &&
        !error &&
        rooms.docs.map((doc) => {
          return (
            <p
              key={doc.id}
              onClick={() => selectRoom(doc.id)}
              style={{ cursor: "pointer" }}
            >
              #{doc.data().roomName}
            </p>
          );
        })}

      {/* Add Room */}
      <button onClick={addRoom}>+ ADD ROOM</button>
    </SideContainer>
  );
};

export default Sidebar;
