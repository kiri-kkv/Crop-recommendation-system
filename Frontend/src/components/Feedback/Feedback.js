import classes from "./Feedback.module.css";
import Heading2 from "../UI/Headings/Heading-2";
import person1 from "../../assets/Person-1.jpg";
import person2 from "../../assets/Person-2.jpg";
import FeedbackList from "./FeedbackList";

const story = [
  {
    id: "1",
    name: "Tukaram Tikka",
    photo: person1,
    Heading: "Helped me a lot",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam porro praesentium expedita aspernatur voluptates earum quaerat ad magnam, at explicabo reiciendis modi itaque molestias quae rerum consequuntur veritatis corporis. Dolor!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae excepturi vel magni et totam architecto sint placeat amet alias quas.",
  },
  {
    id: "2",
    name: "Kishan lala",
    photo: person2,
    Heading: "A lot means a lot",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam porro praesentium expedita aspernatur voluptates earum quaerat ad magnam, at explicabo reiciendis modi itaque molestias quae rerum consequuntur veritatis corporis. Dolor!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae excepturi vel magni et totam architecto sint placeat amet alias quas.",
  },
];

const Feedback = (props) => {
  return (
    <section className={classes.feedback}>
      <div className={classes.secondaryHeading}>
        <Heading2
          style={classes.heading__secondary}
          text="The people who know us"
        />
      </div>
      <div className={classes.people__feedback}>
        {story.map((item) => (
          <FeedbackList
            key={item.id}
            name={item.name}
            photo={item.photo}
            heading={item.Heading}
            comment={item.comment}
          />
        ))}
      </div>
    </section>
  );
};

export default Feedback;
