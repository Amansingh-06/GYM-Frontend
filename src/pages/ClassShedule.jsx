import React from "react";

const Schedule = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const schedule = [
    { time: "12:00am", classes: ["Karate", "Body Building", "", "Meditation", "Yoga", "", "Running"] },
    { time: "1:30am", classes: ["Body Building", "", "Meditation", "Yoga", "", "Running", "Karate"] },
    { time: "2:00am", classes: ["", "", "", "", "", "Cycling", ""] },
    { time: "2:30am", classes: ["", "", "", "", "", "", "Martial Arts"] },
    { time: "3:00am", classes: ["", "", "", "", "Cycling", "", ""] },
    { time: "12:00am", classes: ["Running", "Karate", "Body Building", "", "Meditation", "Yoga", ""] },
    { time: "2:30am", classes: ["", "", "Martial Arts", "", "", "", ""] },
  ];

  return (
    <div className="w-full h-auto bg-black bg-opacity-50 text-white flex flex-col justify-start py-20 lg:px-32 px-3 m-auto relative top-56 md:top-28 sm:top-28 lg:-top-5">
      <div className="absolute top-0 left-0 -z-20 h-full w-full">
        <img
          src="https://media.istockphoto.com/id/875207140/photo/sport-background-with-fitness-equipment-in-gym-gym.jpg?s=2048x2048&w=is&k=20&c=pVA0BOubu87-3DjEyyQEzpM0up1II-7_1nXTTmhlFGI="
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-semibold mb-8">CLASS SCHEDULE</h1>

      <div className="overflow-x-auto w-full max-w-full">
        <div className="grid grid-cols-8 min-w-[800px] border border-gray-500">
          {/* Header Row */}
          <div className=""></div>
          {days.map((day, index) => (
            <div
              key={index}
              className="bg-orange-500 text-center font-semi-bold py-8 border border-gray-500 flex justify-center items-center"
            >
              {day}
            </div>
          ))}

          {/* Schedule Rows */}
          {schedule.map((row, rowIndex) => (
            <React.Fragment key={`row-${rowIndex}`}>
              {/* Time Column */}
              <div className="font-medium py-2 border border-gray-500 flex justify-center items-center">
                {row.time}
              </div>

              {/* Class Columns */}
              {row.classes.map((classItem, classIndex) => (
                <div
                  key={`class-${rowIndex}-${classIndex}`}
                  className={`py-4 border border-gray-500 flex flex-col justify-center items-center ${classItem ? "bg-white text-black" : ""}`}
                >
                  {classItem && (
                    <>
                      <h3 className="font-semibold">{classItem}</h3>
                      <p>{row.time}</p>
                    </>
                  )}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
