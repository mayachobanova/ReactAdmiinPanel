import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const EditTodo = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput source="completed" />
      </SimpleForm>
    </Edit>
  );
};

export default EditTodo;
