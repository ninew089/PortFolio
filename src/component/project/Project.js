import React from "react";

import { Box } from "@material-ui/core";

import guess from "../../assets/img/project/guess.png";
import reactnative from "../../assets/img/project/reactnative.png";
import hostel from "../../assets/img/project/hostel.png";
import pop from "../../assets/img/project/popbus.png";
import camp from "../../assets/img/project/camp.png";
import travel from "../../assets/img/project/travel.png";
import ywc from "../../assets/img/project/ywc.png";
import golang from "../../assets/img/project/golang.png";
import shop from "../../assets/img/project/shop.png";
import Card from "./component/Card";
export default function Project(props) {
  const data = [
    {
      title: "Web Developer",
      date: "Feb 2021",
      name: "react fundamental workshop",
      img: shop,
      desc:
        "Material ui,Redux,Reducer,React hook form,Json server,Dark mode,Shop",
      link: "https://github.com/ninew089/react-fundamental",
      more: "see on Github...",
    },
    {
      title: "Golang Course",
      date: "Feb 2021",
      name: "Golang Course",
      img: golang,
      desc:
        "About cretate Route,Query String,Migration,Upload Image ,Using Golang,Postgres,Postico",
      link: "https://github.com/ninew089/Go_course",
      more: "see on Github...",
    },
    {
      title: "Mobile App",
      date: "December 2020",
      name: "Guess a number between 1 and 100 App",
      img: guess,
      desc:
        "Guess a number : Select 1 unique numbers from 1 to 100, Using ReactNative",
      link: "https://github.com/ninew089/GUESS_A_NUMBER_APP",
      more: "see on Github...",
    },
    {
      title: "Mobile App",
      date: "December 2020",
      name: "Course Goal",
      img: reactnative,
      desc: "Course Goal is develop websites using ReactNative .",
      link: "https://github.com/ninew089/ReactNativeApp_CourseGoal/",
      more: "see on Github...",
    },
    {
      title: "Web Developer",
      date: "November 2020",
      name: "HalfHalf Website",
      img: ywc,
      desc:
        "HalfHalf Website is Design and develop websites using React.js and Antdesign,including responsive website , filter,  and prototype-based programming.",
      link: "https://ywc18verceltest.ninew089.vercel.app/",
      more: "demo site",
    },
    {
      title: "Web Developer",
      date: "November 2020",
      name: "Travel website",
      img: travel,
      desc:
        "Developed web app by using React.js, Material UI,Json server and prototype-based programming.",
      link: "https://github.com/ninew089/frontend-assigment",
      more: "see more on Github...",
    },
    {
      title: "Web Developer",
      date: "November 2020",
      name: "Hostel mangement",
      img: hostel,
      desc:
        " Design and develop websites using React.js ,Redux and Mock Api sever from Postman.",
      link: "https://frontend-test-nine.vercel.app/",
      more: "see more on Github...",
    },
    {
      title: "UserInterface",
      date: "October 2020",
      name: "Camp Info website",
      img: camp,
      desc: "Design using Figma",
      link:
        "https://www.figma.com/file/lJCGfHGbinMzvJflhnw4jb/ytw18?node-id=0%3A1",
      more: "demo",
    },
    {
      title: "UserInterface",
      date: "January 2020",
      name: "POP BUS Application",
      img: pop,
      desc:
        "Collaborated with a team of 7 people to performed ideation, brainstorming, and wireframing. Created numerous mobile app prototypes of varying fidelity to test assumptions and concepts.Using Figma",
      link:
        "https://www.figma.com/file/9slKJZfXssPSfhdo5HAbD6/POP-BUS-APP?node-id=0%3A1",
      more: "demo",
    },
  ];

  return (
    <>
      <Box fontSize={24} my={2} fontWeight={600}>
        Project
      </Box>
      <div style={{ width: "100%" }}>
        <div style={{ margin: 10 }}>
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              date={item.date}
              name={item.name}
              img={item.img}
              desc={item.desc}
              link={item.link}
              more={item.more}
            />
          ))}
        </div>
      </div>
    </>
  );
}
