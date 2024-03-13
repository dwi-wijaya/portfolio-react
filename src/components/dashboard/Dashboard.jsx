import React from "react";
import useSWR from "swr";
import { getGithubUser } from "../../services/github";
import Overview from "./contributions/Overview";
import Calendar from "./contributions/Calendar";

const Dashboard = () => {
  const { data: userData, error } = useSWR("personal", getGithubUser);

  if (error) return <div>Failed to load</div>;
  if (!userData) return <div>Loading...</div>;

  const contributionCalendar = userData?.data?.contributionsCollection?.contributionCalendar;

  return (
    <section data-section className="contact container section" id="contact" data-aos='fade-up'>
      <div className="section__title__wrapper">
        <h2 className="section__title">Dashboard</h2>
      </div>
      <p className="section__subtitle">
        Reach out and start a conversation about potential collaborations or
        inquiries.
      </p>
      {contributionCalendar && <Overview data={contributionCalendar} />}
      {contributionCalendar && <Calendar data={contributionCalendar} />}
    </section>
  );
};

export default Dashboard;
