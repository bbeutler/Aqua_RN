import { FontAwesome5, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export default [
  {
    id: 1,
    icon: <FontAwesome5 name="user-circle" size={24} color="black" />,
    tag: "Profile",
  },
  {
    id: 2,
    icon: <MaterialCommunityIcons name="bell-outline" size={24} color="black" />,
    tag: "Notifications",
  },
  {
    id: 3,
    icon: <MaterialCommunityIcons name="cog-outline" size={24} color="black" />,
    tag: "Settings",
  },
  {
    id: 4,
    icon: <Feather name="users" size={24} color="black" />,
    tag: "Invite Friends",
  },
  {
    id: 5,
    icon: <Feather name="help-circle" size={24} color="black" />,
    tag: "Help",
  },
];
