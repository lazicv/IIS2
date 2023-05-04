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
            path: "/flight/search",
            icon: <IoIcons.IoMdBook />,
            role: ['guest', 'user']
          },
          {
            title: "Create a plan",
            path: "/flight/search",
            icon: <IoIcons.IoMdCreate />,
            role: ['guest', 'user']
          },
          {
            title: "Monitoring",
            path: "/flight/search",
            icon: <IoIcons.IoMdLaptop />,
            role: ['guest', 'user']
          },
          {
            title: "Search",
            path: "/flight/search",
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
            path: "/flight/create",
            icon: <IoIcons.IoMdAddCircle />,
            role: ['user', 'guest']
          },
          {
            title: "Read",
            path: "/flight/search",
            icon: <IoIcons.IoMdBook />,
            role: ['guest', 'user']
          },
          {
            title: "Update",
            path: "/flight/search",
            icon: <IoIcons.IoMdCreate />,
            role: ['guest', 'user']
          },
          {
            title: "Delete",
            path: "/flight/search",
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
            path: "/flight/search",
            icon: <IoIcons.IoMdHammer />,
            role: ['guest', 'user']
          },
          {
            title: "Emergency maintance",
            path: "/flight/search",
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
            path: "/flight/search",
            icon: <IoIcons.IoMdBook />,
            role: ['guest', 'user']
          },
          {
            title: "Add",
            path: "/flight/search",
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