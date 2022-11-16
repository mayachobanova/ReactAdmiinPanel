import React from "react";

import { List, TextField, Datagrid, BooleanField, EditButton, DeleteButton } from "react-admin";



const Todos = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <BooleanField source="completed" />
        <EditButton source="edit" />
        <DeleteButton source="delete" />
      </Datagrid>
    </List>
  );
};

export default Todos;
