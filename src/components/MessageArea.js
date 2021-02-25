import React, { useState } from "react";
import {
  MessageBox,
  MessageContainer,
  UserMessage,
} from "../styles/MessageAreaStyle";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/roomSlice";
import { auth, firestore, timestamp } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import FlipMove from "react-flip-move";

const MessageArea = () => {
  const [user, userLoading] = useAuthState(auth);

  const roomId = useSelector(selectRoomId);
  const [messageText, setMessageText] = useState("");
  const [messages, loading, error] = useCollection(
    roomId &&
      firestore
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "desc")
  );
  const [roomInfo, roomLoading, roomError] = useCollection(
    roomId && firestore.collection("rooms").doc(roomId)
  );

  const sendMessage = (e) => {
    e.preventDefault();
    roomId &&
      user &&
      firestore.collection("rooms").doc(roomId).collection("messages").add({
        messageText: messageText,
        userName: user.displayName,
        photoUrl: user.photoURL,
        timestamp: timestamp,
      });

    setMessageText("");
  };

  return (
    <MessageContainer>
      <h3 style={{ textAlign: "center" }}>
        {!roomLoading && !roomError && roomInfo?.data().roomName}
      </h3>
      <div style={{ marginLeft: "1rem" }}>
        <FlipMove>
          {!loading &&
            !error &&
            messages?.docs.map((doc) => {
              return (
                <div key={doc.id}>
                  <UserMessage>
                    <Avatar
                      src={doc.data().photoUrl}
                      style={{ marginRight: ".7rem" }}
                    />
                    <div>
                      <h3 style={{ marginBottom: "1rem" }}>
                        {doc.data().userName}
                      </h3>
                      <p>{doc.data().messageText}</p>
                    </div>
                  </UserMessage>
                </div>
              );
            })}
        </FlipMove>
      </div>
      <MessageBox>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Send your Message "
          />
          <button type="submit" hidden>
            Submit
          </button>
        </form>
      </MessageBox>
    </MessageContainer>
  );
};

export default MessageArea;
