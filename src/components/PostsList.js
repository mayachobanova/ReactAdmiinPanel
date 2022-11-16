import React from "react";

import { List, TextField, Datagrid, EditButton, DeleteButton } from "react-admin";

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        <EditButton source="edit" />
        <DeleteButton source="delete" />
      </Datagrid>
    </List>
  );
};

export default PostList;