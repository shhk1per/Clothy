import { Avatar } from "@mui/material";
import React from "react";

const UserAvatar = ({ username, height, width }) => {
  return (
    <Avatar
      sx={{
        height: height,
        width: width,
        backgroundColor: "lightgray",
      }}
      src={"https://api.multiavatar.com/Binx%20" + username + ".png"}
    />
  );
};

export default UserAvatar;
// https://robohash.org/