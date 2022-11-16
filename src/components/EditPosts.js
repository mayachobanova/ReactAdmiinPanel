import React from 'react';

import { Edit, SimpleForm, TextInput } from 'react-admin';

const EditPosts = (props) => {
    return (
        <Edit title='Edit Post' {...props}>
            <SimpleForm>
            <TextInput disabled source='id' />
                <TextInput source='title' />
                <TextInput multiline source='body' />
            </SimpleForm>
        </Edit>
    );
};

export default EditPosts;
