import OverviewItem from "./OverviewItem";
import './overview.css';

const Overview = ({ data }) => {
  console.log(data);
  const totalContributions = data?.totalContributions || 0;
  const weeks = data?.weeks || [];

  const totalThisWeekContribution =
    weeks[weeks.length - 1]?.contributionDays
      ?.map((item) => item.contributionCount)
      ?.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      ) || 0;
  const totalContributionList = weeks
    .map((week) =>
      week.contributionDays.map(
        (contributionDay) => contributionDay.contributionCount
      )
    )
    .flat();

  const bestContribution = Math.max(...totalContributionList) || 0;
  const averageContribution = totalContributions / totalContributionList.length;

  return (
    <div className="overviews">
      <OverviewItem label="Total" value={totalContributions} />
      <OverviewItem label="This Week" value={totalThisWeekContribution} />
      <OverviewItem label="Best Day" value={bestContribution} />
      <OverviewItem label="Average" value={averageContribution} unit="/ day" />
    </div>
  );
};

export default Overview;
