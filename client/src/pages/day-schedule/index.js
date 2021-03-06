// /* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/index";
import { Link, useParams } from "react-router-dom";
import api from "../../utils/api";
import CircleButton from "../../components/CircleButton";

function DaySchedule() {
  const [activities, setActivities] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    api
      .getSystemActivitiesByType(type)
      .then((data) => {
        setActivities(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <section className="w-full max-w-sm quicksand-body">
        <div className="relative flex items-center justify-center h-16">
          <div className="bg-white text-center w-screen mx-16 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            TODAY IS THE DAY!
          </div>
        </div>
        {activities.map((activity) => {
          return (
            <Link
              to={"/activity-info/" + activity._id}
              key={activity._id}
              data-test="day-schedule-activity"
            >
              <div className="relative flex items-center justify-center h-16">
                <CircleButton activityType={activity.type} />
                <p className="relative flex  justify-center w-1/2 m-1 font-semibold w-25 py-.5 px-4 border border-gray-400 rounded shadow">
                  {activity.name}
                </p>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}

export default DaySchedule;
