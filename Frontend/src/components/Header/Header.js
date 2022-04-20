import Heading1 from "../UI/Headings/Heading-1";
import Heading2 from "../UI/Headings/Heading-2";
import classes from "./Header.module.css";

const HeaderPicture = (props) => {
  return (
    <section className={classes.picture}>
      <div className={classes.heading}>
        <div className={classes.mainHeading}>
          <Heading1 text="E-FARMA" />
        </div>
        <div className={classes.secondaryHeading}>
          <Heading2
            style={classes.heading__secondary}
            text="Where farmer and knowledge come togheter"
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderPicture;
