import React from 'react'

import { Box, Divider } from '@material-ui/core'

export default function About() {
  const WORKEXPERIENCE = [
    {
      date: 'Febuary 2021 - June 2021',
      position: 'Part-Time',
      job: 'Frontend Developer',
      company: 'Easyrice Digitak Technology',
      link: 'https://easyrice.ai/',
    },
    {
      date: 'July 2021 - April 2022',
      position: 'Full-Time',
      job: 'Frontend Developer',
      company: 'Easyrice Digitak Technology',
      link: 'https://dev.exambrisk.ai/home',
    },
    {
      date: 'August 2021 - April 2022',
      position: 'Part-Time',
      job: 'Frontend Developer',
      company: 'Forward Company',
      link: 'https://forward.market/home',
    },
    {
      date: 'April 2022 - Present',
      position: 'Full-Time',
      job: 'Frontend Developer',
      company: 'FWX Finance',
      link: 'https://fwx.finance/',
    },
  ]
  return (
    <>
      <Box fontSize={24} my={2} fontWeight={600}>
        Work Experience
      </Box>
      {WORKEXPERIENCE.map((item, index) => (
        <Box margin={2} key={index}>
          <div style={{ fontWeight: 600, color: '#767676' }}>
            {item.date}| {item.position}
          </div>
          <div style={{ fontSize: '16px' }}>
            <strong>{item.job} </strong> <span>at</span>&nbsp;
            <a href={item.link} style={{ color: '#2751da' }}>
              {item.company}
            </a>
          </div>
        </Box>
      ))}

      <Divider />
    </>
  )
}
