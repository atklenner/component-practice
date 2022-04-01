import {
  Company,
  Container,
  Dates,
  Duty,
  Header,
  Info,
  InfoButton,
  JobInfo,
  JobTitle,
  Tab,
  TabContainer,
  Wrapper,
} from "./TabsStyle";
import { data } from "./data";
import { useState } from "react";

// https://course-api.com/react-tabs-project

export default function Tabs() {
  const [jobs, setJobs] = useState(data);
  const [currentJob, setCurrentJob] = useState(data[0]);

  function handleClick(company) {
    setCurrentJob(jobs.find((job) => job.company === company));
  }

  return (
    <Wrapper>
      <Header>Experience</Header>
      <Container>
        <TabContainer>
          {jobs.map((job) => {
            return (
              <Tab key={job.id} onClick={() => handleClick(job.company)}>
                {job.company}
              </Tab>
            );
          })}
        </TabContainer>
        <Info>
          <JobInfo>
            <JobTitle>{currentJob.title}</JobTitle>
            <Company>{currentJob.company}</Company>
            <Dates>{currentJob.dates}</Dates>
          </JobInfo>
          {currentJob.duties.map((duty) => {
            return (
              <Duty>
                <p>{duty}</p>
              </Duty>
            );
          })}
        </Info>
        <InfoButton>More Info</InfoButton>
      </Container>
    </Wrapper>
  );
}
