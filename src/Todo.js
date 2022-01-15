import { Button, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { db } from "./firebase_config";

export default function TodoListItem({ todo, inprogress, id }) {
  function toggleInprogress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }
  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In progress" : "Completed"}
        />
      </ListItem>
      <Button onClick={toggleInprogress}>
        {inprogress ? "Done" : "UnDone"}
      </Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );
}
