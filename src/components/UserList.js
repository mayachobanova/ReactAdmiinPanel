import React from "react";

import { List, TextField, Datagrid, EmailField, EditButton, DeleteButton, FilterLiveSearch } from "react-admin";

const postFilters = [
    <FilterLiveSearch source="name" alwaysOn />
];

const UserList = (props) => {
  return (
    <List filters={postFilters} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <EditButton source="edit"/>
        <DeleteButton source="delete" />
      </Datagrid>
    </List>
  );
};

export default UserList;
