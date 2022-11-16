import React from "react";

import { Create, EmailField, SimpleForm, TextInput } from "react-admin";

const CreateUser = (props) => {
    return (
        <Create title="Create User" {...props}>
            <SimpleForm>
                <TextInput source="name"/>
                <TextInput source="username" />
                <EmailField source="email" />
            </SimpleForm>
        </Create>
    );
};

export default CreateUser;