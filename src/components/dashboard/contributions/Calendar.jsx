import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import './calendar.css';
const Calendar = ({ data }) => {
    const [selectContribution, setSelectContribution] = useState({
        count: null,
        date: null,
    });

    const weeks = data?.weeks ?? [];
    const months =
        data?.months?.map((month) => {
            const filterContributionDay = weeks
                .filter(
                    (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7)
                )
                .map((item) => item.contributionDays)
                .flat(1);
            const getContributionsByMonth = filterContributionDay.reduce(
                (previousValue, currentValue) =>
                    previousValue + currentValue.contributionCount,
                0
            );

            return {
                ...month,
                contributionsCount: getContributionsByMonth,
            };
        }) ?? [];

    const contributionColors = data?.colors ?? [];

    return (
        <>
            <div className="relative flex flex-col">
                <ul className="calendar-month text-color dark:text-neutral-400 md:justify-start">
                    {months.map((month) => (
                        <li
                            key={month.firstDay}
                            className={clsx(`${month.totalWeeks < 2 ? "invisible" : ""}`)}
                            style={{ minWidth: 14.3 * month.totalWeeks }}
                        >
                            {month.name}
                        </li>
                    ))}
                </ul>

                <div className="calendar-grid">
                    {weeks?.map((week) => (
                        <div key={week.firstDay}>
                            {week.contributionDays.map((contribution) => {
                                const backgroundColor =
                                    contribution.contributionCount > 0 && contribution.color;

                                const getRandomDelayAnimate =
                                    Math.random() * week.contributionDays.length * 0.15;

                                return (
                                    <motion.span
                                        key={contribution.date}
                                        initial="initial"
                                        animate="animate"
                                        variants={{
                                            initial: { opacity: 0, translateY: -20 },
                                            animate: {
                                                opacity: 1,
                                                translateY: 0,
                                                transition: { delay: getRandomDelayAnimate },
                                            },
                                        }}
                                        className="calendar-day bg-neutral-300 dark:bg-neutral-800"
                                        style={backgroundColor ? { backgroundColor } : undefined}
                                        onMouseEnter={() =>
                                            setSelectContribution({
                                                count: contribution.contributionCount,
                                                date: contribution.date,
                                            })
                                        }
                                        onMouseLeave={() =>
                                            setSelectContribution({ count: null, date: null })
                                        }
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <div className="calendar-grid">
                <div className="calendar-footer">
                    <span className="dark:text-neutral-400">Less</span>
                    <ul className="calendar-contribution">
                        <motion.li className="calendar-day bg-neutral-300 dark:bg-neutral-800" />
                        {contributionColors.map((item, index) => (
                            <motion.li
                                key={item}
                                initial="initial"
                                animate="animate"
                                variants={{
                                    initial: { opacity: 0 },
                                    animate: {
                                        opacity: 1,
                                        transition: { delay: index * 0.3 },
                                    },
                                }}
                                className="calendar-day"
                                style={{ backgroundColor: item }}
                            />
                        ))}
                    </ul>
                    <span>More</span>
                </div>
                <div
                    className={clsx(
                        `${selectContribution?.date ? 'opacity-100' : 'opacity-0'}`,
                        'rounded bg-neutral-200 px-2 text-sm dark:bg-neutral-700'
                    )}
                > 
                    {selectContribution?.count != null && `${selectContribution.count} contributions on ${selectContribution?.date}`}
                </div>

            </div>
        </>
    );
};

export default Calendar;
