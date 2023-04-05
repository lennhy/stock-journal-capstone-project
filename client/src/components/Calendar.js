import { useEffect } from "react";

useEffect(() => {
  axios.get("http://localhost:8080/").then((response) => {
    // use .map to group the onbjects in the array by date in ascending order
  });
}, []);

const Calendar = () => {
  useEffect;
  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

export default Calendar;
