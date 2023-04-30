import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
    {
        title: "Machines",
        role: ['user', 'guest', 'admin'],
        icon: <IoIcons.IoIosBuild />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
     
        subNav: [
          {
            title: "All",
            path: "/flight/search",
            icon: <IoIcons.IoMdBook />,
            role: ['guest', 'user', 'admin']
          },
          {
            title: "Create a plan",
            path: "/flight/search",
            icon: <IoIcons.IoMdCreate />,
            role: ['guest', 'user', 'admin']
          },
          {
            title: "Monitoring",
            path: "/flight/search",
            icon: <IoIcons.IoMdLaptop />,
            role: ['guest', 'user', 'admin']
          },
          {
            title: "Search",
            path: "/flight/search",
            icon: <FaIcons.FaSearch />,
            role: ['guest', 'user', 'admin']
          },
          {
            title: "Equipment",
            path: "/flight/search",
            icon: <IoIcons.IoMdSettings />,
            role: ['guest', 'user', 'admin']
          },
        ],
      },
      {
        title: "Service book",
        role: ['user', 'guest', 'admin'],
        icon: <FaIcons.FaBook />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
     
        subNav: [
          {
            title: "Create",
            path: "/flight/create",
            icon: <IoIcons.IoMdAddCircle />,
            role: ['admin', 'guest']
          },
          {
            title: "Read",
            path: "/flight/search",
            icon: <IoIcons.IoMdBook />,
            role: ['guest', 'user', 'admin']
          },
          {
            title: "Update",
            path: "/flight/search",
            icon: <IoIcons.IoMdCreate />,
            role: ['guest', 'user', 'admin']
          },
          {
            title: "Delete",
            path: "/flight/search",
            icon: <FaIcons.FaBackspace />,
            role: ['guest', 'user', 'admin']
          },
        ],
      },
    {
    title: "Sign In",
    path: "/signin",
    role: ['guest'],
    icon: <FaIcons.FaSignInAlt />,//<IoIcons.IoIosLogIn />,
  },
  {
    title: "Sign Up",
    path: "/signup",
    role: ['guest'],
    // icon: < />,//<IoIcons.IoIosLogIn />,
  },
  {
    title: "Sign Out",
    path: "/signout",
    cName: "nav-text",
    role: ["admin","guest", "user"],
    icon: <IoIcons.IoIosExit/>
}
];