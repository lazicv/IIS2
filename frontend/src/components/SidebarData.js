import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
    {
        title: "Machines",
        role: ['user', 'guest'],
        icon: <IoIcons.IoIosBuild />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
     
        subNav: [
          {
            title: "All",
            path: "/machines",
            icon: <IoIcons.IoMdBook />,
            role: ['guest', 'user']
          },
          {
            title: "Add new machine",
            path: "/machine/create",
            icon: <IoIcons.IoMdCreate />,
            role: ['guest', 'user']
          },
          {
            title: "Monitoring",
            path: "/",
            icon: <IoIcons.IoMdLaptop />,
            role: ['guest', 'user']
          },
          {
            title: "Search",
            path: "/",
            icon: <FaIcons.FaSearch />,
            role: ['guest', 'user']
          },
        ],
      },
      {
        title: "Service book",
        role: ['user', 'guest'],
        icon: <FaIcons.FaBook />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
     
        subNav: [
          {
            title: "Create",
            path: "/",
            icon: <IoIcons.IoMdAddCircle />,
            role: ['user', 'guest']
          },
          {
            title: "Read",
            path: "/",
            icon: <IoIcons.IoMdBook />,
            role: ['guest', 'user']
          },
          {
            title: "Update",
            path: "/",
            icon: <IoIcons.IoMdCreate />,
            role: ['guest', 'user']
          },
          {
            title: "Delete",
            path: "/",
            icon: <FaIcons.FaBackspace />,
            role: ['guest', 'user']
          },
        ],
      },
      {
        title: "Analytics",
        role: ['user', 'guest'],
        icon: <IoIcons.IoMdAnalytics />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
     
        subNav: [
          {
            title: "Regular maintance",
            path: "/",
            icon: <IoIcons.IoMdHammer />,
            role: ['guest', 'user']
          },
          {
            title: "Emergency maintance",
            path: "/",
            icon: <FaIcons.FaScrewdriver />,
            role: ['guest', 'user']
          },
        ],
      },
      {
        title: "Equipment",
        role: ['user', 'guest'],
        icon: <AiIcons.AiFillDropboxSquare />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
     
        subNav: [
          {
            title: "All equipment",
            path: "/equipment",
            icon: <IoIcons.IoMdBook />,
            role: ['guest', 'user']
          },
          {
            title: "Add",
            path: "/equipment/create",
            icon: <IoIcons.IoMdCreate />,
            role: ['guest', 'user']
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
    role: ["guest", "user"],
    icon: <IoIcons.IoIosExit/>
}
];