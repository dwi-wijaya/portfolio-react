import React, { useEffect, useState } from "react";
import { getGithubUser } from "../../services/github";
import Overview from "./contributions/Overview";
import Calendar from "./contributions/Calendar";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [ContributionCalendar, setContributionCalendar] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getGithubUser("personal");
        const contributionCalendar =
          result?.data?.contributionsCollection?.contributionCalendar;
        setContributionCalendar(contributionCalendar); // Assuming the data field contains user data
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <section data-section className="contact container section" id="contact" data-aos='fade-up'>
      <div className="section__title__wrapper">
        <h2 className="section__title">Dashboard</h2>
      </div>
      <p className="section__subtitle">
        Reach out and start a conversation about potential collaborations or
        inquiries.
      </p>
      {ContributionCalendar && <Overview data={ContributionCalendar} />}
      {ContributionCalendar && <Calendar data={ContributionCalendar} />}
    </section>
  );
};

export default Dashboard;
