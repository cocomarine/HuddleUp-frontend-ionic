import axios from "axios";

const AddEvent = (fields, setAlert) => {
  axios
    .post("http://localhost:4000/events", fields)
    .then((res) => {
      console.log(res.config.data);
      setAlert({
        message: "Event was created successfully",
        isSuccess: true,
      });
    })
    .catch(() => {
      setAlert({
        message: "Server error. Please try again later.",
        isSuccess: false,
      });
    });
};

export default AddEvent;
