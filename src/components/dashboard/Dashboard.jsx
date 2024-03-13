import React from "react";
import useSWR from "swr";
import { getGithubUser } from "../../services/github";
import Overview from "./contributions/Overview";
import Calendar from "./contributions/Calendar";
import PageHeading from "../elements/PageHeading";

const Dashboard = () => {
  const { data: userData, error } = useSWR("personal", getGithubUser);

  if (error) return console.log(error);
  if (!userData) return '';

  const contributionCalendar = userData?.data?.contributionsCollection?.contributionCalendar;

  return (
    <section data-section className="contact container section" id="contact" data-aos='fade-up'>
      <PageHeading
        title='Dashboard'
        description='This is my personal dashboard portfolio.'
      />
      <h3 className="section__title-secondary"><i className="bx bxl-github"></i>Contributions</h3>
      <p className="section__subtitle">My contributions from last year on github.</p>
      {contributionCalendar && <Overview data={contributionCalendar} />}
      {contributionCalendar && <Calendar data={contributionCalendar} />}
    </section>
  );
};

export default Dashboard;
