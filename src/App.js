import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import UserList from "./components/UserList";
import Todos from "./components/Todos";
import PostList from "./components/PostsList";
import CreatePost from "./components/CreatePost";
import EditPosts from "./components/EditPosts";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

import GroupsIcon from "@mui/icons-material/Groups";
import AppsIcon from "@mui/icons-material/Apps";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import EditTodo from "./components/EditTodo";

const App = (props) => (
  <Admin
    dataProvider={jsonServerProvider("http://jsonplaceholder.typicode.com")}
  >
    <Resource
      name="users"
      list={UserList}
      create={CreateUser}
      edit={EditUser}
      icon={GroupsIcon}
    />
    <Resource
      name="posts"
      list={PostList}
      create={CreatePost}
      edit={EditPosts}
      icon={AppsIcon}
    />
    <Resource name="todos" list={Todos} edit={EditTodo} icon={SwapHorizIcon} />
  </Admin>
);

export default App;
