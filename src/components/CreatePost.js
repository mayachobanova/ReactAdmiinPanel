import React from "react";

import { Create, SimpleForm, TextInput } from "react-admin";

const CreatePost = (props) => {
    return (
        <Create title="Create Post" {...props}>
            <SimpleForm>
                <TextInput source="title"/>
                <TextInput multiline source="body" />
            </SimpleForm>
        </Create>
    );
};

export default CreatePost;