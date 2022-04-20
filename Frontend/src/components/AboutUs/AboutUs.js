import classes from "./AboutUs.module.css";
import Heading2 from "../UI/Headings/Heading-2";
import about_1 from "../../assets/about-1.jpg";
import about_2 from "../../assets/about-2.jpg";
import about_3 from "../../assets/about-3.jpg";

const AboutUs = (props) => {
  return (
    <section className={classes.container}>
      <div className={classes.secondaryHeading}>
        <Heading2 style={classes.heading__secondary} text="To know about us" />
      </div>
      <div className={classes.container__about}>
        <div className={classes["container__about--info"]}>
          <h3 className={classes["container__about--heading"]}>
            About our work
          </h3>
          <p className={classes["container__about--para"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla
            quo beatae commodi. Aperiam ullam voluptatum maxime aut sapiente in,
            minima, cumque porro pariatur voluptatem asperiores fugit veniam
            sequi ea. Quidem laborum numquam illo praesentium mollitia. Dolore
            laboriosam doloremque illum.
          </p>
          <h3 className={classes["container__about--heading"]}>
            What will you benefit
          </h3>
          <p className={classes["container__about--para"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla
            quo beatae commodi. Aperiam ullam voluptatum maxime aut sapiente in,
            minima, cumque porro pariatur voluptatem asperiores fugit veniam
            sequi ea. Quidem laborum numquam illo praesentium mollitia. Dolore
            laboriosam doloremque illum.
          </p>
        </div>

        <div className={classes["container__about--images"]}>
          <figure className={classes.compisition__photo}>
            <img
              src={about_1}
              alt="1"
              className={classes["compisition__photo-1"]}
            />
          </figure>
          <figure className={classes.compisition__photo}>
            <img
              src={about_2}
              alt="2"
              className={classes["compisition__photo-2"]}
            />
          </figure>
          <figure className={classes.compisition__photo}>
            <img
              src={about_3}
              alt="3"
              className={classes["compisition__photo-3"]}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
