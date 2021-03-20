import React from "react";
import { Box, Divider } from "@material-ui/core";

export default function Card(props) {
  return (
    <>
      <Box fontSize={18} my={2} fontWeight={600}>
        {props.title}
      </Box>

      <img
        src={props.img}
        alt=""
        height="100%"
        width="80%"
        style={{ objectFit: "cover" }}
      />
      <Box fontSize={16} my={2} fontWeight={600} color={"#aaa"}>
        {props.date}
      </Box>
      <Box fontSize={16} my={2} fontWeight={600}>
        {props.name}
      </Box>
      <div>&nbsp; &nbsp; &nbsp;{props.desc}</div>
      <div>{props.tool}</div>

      <Box fontSize={16} my={2} fontWeight={600} color={"#2d6bf9"}>
        <a
          href={props.link}
          target="blank"
          style={{ color: "#2d6bf9", textDecoration: "none" }}
        >
          {props.more}
        </a>
      </Box>
      <Divider />
    </>
  );
}
