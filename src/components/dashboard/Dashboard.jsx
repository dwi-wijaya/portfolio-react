import React from "react";
import useSWR from "swr";
import { getGithubUser } from "../../services/github";
import Overview from "./contributions/Overview";
import Calendar from "./contributions/Calendar";
import PageHeading from "../elements/PageHeading";
import PageSubHeading from "../elements/PageSubHeading";
import { PAGESPEED_URL } from "../../constants/pagespeed";
import PageSpeed from "./pagespeed";

const Dashboard = () => {
  const { data: userData, error } = useSWR("personal", getGithubUser);

  if (error) return console.log(error);
  if (!userData) return "";

  const contributionCalendar =
    userData?.data?.contributionsCollection?.contributionCalendar;

  return (
    <section
      className="contact container section"
      id="contact"
      data-aos="fade-up"
    >
      <PageHeading
        title="Dashboard"
        description="This is my personal dashboard portfolio."
      />
      <PageSubHeading
        title="Pagespeed Insight"
        description="My pagespeed index by google APIs"
        icon="bx bx-tachometer"
        link={PAGESPEED_URL}
      />
      <PageSpeed/>
      
      <hr className="border-section" />
      <PageSubHeading
        title="Contributions"
        description="My contributions from last year on github."
        icon="bx bxl-github"
        link={PAGESPEED_URL}
      />
      {contributionCalendar && <Overview data={contributionCalendar} />}
      {contributionCalendar && <Calendar data={contributionCalendar} />}
    </section>
  );
};

export default Dashboard;
