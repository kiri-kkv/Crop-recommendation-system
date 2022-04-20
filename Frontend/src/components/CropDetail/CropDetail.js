import classes from "./CropDetail.module.css";
import Heading2 from "../UI/Headings/Heading-2";
import useInput from "../Hooks/use-input";

const CropDetail = (props) => {
  const {
    value: enteredNitrogen,
    isValid: isNitrogenValid,
    hasError: NitrogenInputHasError,
    valueChangeHandler: NitrogenHandler,
    inputBlurHandler: NitrogenBlurHandler,
    reset: resetNitrogen,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPotassium,
    isValid: isPotassiumValid,
    hasError: PotassiumInputHasError,
    valueChangeHandler: PotassiumHandler,
    inputBlurHandler: PotassiumBlurHandler,
    reset: resetPotassium,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPhosphorus,
    isValid: isPhosphorusValid,
    hasError: PhosphorusInputHasError,
    valueChangeHandler: PhosphorusHandler,
    inputBlurHandler: PhosphorusBlurHandler,
    reset: resetPhosphorus,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPh,
    isValid: isPhValid,
    hasError: PhInputHasError,
    valueChangeHandler: PhHandler,
    inputBlurHandler: PhBlurHandler,
    reset: resetPh,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredRainfall,
    isValid: isRainfallValid,
    hasError: RainfallInputHasError,
    valueChangeHandler: RainfallHandler,
    inputBlurHandler: RainfallBlurHandler,
    reset: resetRainfall,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredCity,
    isValid: isCityValid,
    hasError: CityInputHasError,
    valueChangeHandler: CityHandler,
    inputBlurHandler: CityBlurHandler,
    reset: resetCity,
  } = useInput((value) => value.trim() !== "");

  let isFormValid = false;
  if (
    isNitrogenValid &&
    isPotassiumValid &&
    isPhosphorusValid &&
    isPhValid &&
    isRainfallValid &&
    isCityValid
  )
    isFormValid = true;

  const NitrogenInputClasses = NitrogenInputHasError
    ? classes["form__input--invalid"]
    : classes.form__input;

  const PotassiumInputClasses = PotassiumInputHasError
    ? classes["form__input--invalid"]
    : classes.form__input;

  const PhosphorusInputClasses = PhosphorusInputHasError
    ? classes["form__input--invalid"]
    : classes.form__input;

  const PhInputClasses = PhInputHasError
    ? classes["form__input--invalid"]
    : classes.form__input;

  const RainfallInputClasses = RainfallInputHasError
    ? classes["form__input--invalid"]
    : classes.form__input;

  const CityInputClasses = CityInputHasError
    ? classes["form__input--invalid"]
    : classes.form__input;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (
      !isNitrogenValid ||
      !isPotassiumValid ||
      !isPhosphorusValid ||
      !isPhValid ||
      !isRainfallValid ||
      !isCityValid
    )
      return;

    const userData = {
      nitrogen: enteredNitrogen,
      potassium: enteredPotassium,
      phosphorus: enteredPhosphorus,
      ph: enteredPh,
      rainfall: enteredRainfall,
    };

    resetNitrogen();
    resetPhosphorus();
    resetPotassium();
    resetRainfall();
    resetPh();
    resetCity();

    props.onSaveUserData(userData);
  };

  return (
    <section className={classes.container}>
      <div className={classes.secondaryHeading}>
        <Heading2 style={classes.heading__secondary} text="To know about us" />
      </div>

      <div className={classes.cropDetail}>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.form__group}>
            <label htmlFor="name" className={classes.form__label}>
              Nitrogen
            </label>
            <input
              type="text"
              id="name"
              onChange={NitrogenHandler}
              onBlur={NitrogenBlurHandler}
              vlaue={enteredNitrogen}
              className={NitrogenInputClasses}
            />
            {NitrogenInputHasError && (
              <p className={classes.error}>Please enter a value</p>
            )}
          </div>

          <div className={classes.form__group}>
            <label htmlFor="name" className={classes.form__label}>
              Potassium
            </label>
            <input
              type="text"
              id="name"
              onChange={PotassiumHandler}
              onBlur={PotassiumBlurHandler}
              vlaue={enteredPotassium}
              className={PotassiumInputClasses}
            />
            {PotassiumInputHasError && (
              <p className={classes.error}>Please enter a value</p>
            )}
          </div>

          <div className={classes.form__group}>
            <label htmlFor="name" className={classes.form__label}>
              Phosphorus
            </label>
            <input
              type="text"
              id="name"
              onChange={PhosphorusHandler}
              onBlur={PhosphorusBlurHandler}
              vlaue={enteredPhosphorus}
              className={PhosphorusInputClasses}
            />
            {PhosphorusInputHasError && (
              <p className={classes.error}>Please enter a value</p>
            )}
          </div>

          <div className={classes.form__group}>
            <label htmlFor="name" className={classes.form__label}>
              PH
            </label>
            <input
              type="text"
              id="name"
              onChange={PhHandler}
              onBlur={PhBlurHandler}
              vlaue={enteredPh}
              className={PhInputClasses}
            />
            {PhInputHasError && (
              <p className={classes.error}>Please enter a value</p>
            )}
          </div>

          <div className={classes.form__group}>
            <label htmlFor="name" className={classes.form__label}>
              Rainfall
            </label>
            <input
              type="text"
              id="name"
              onChange={RainfallHandler}
              onBlur={RainfallBlurHandler}
              vlaue={enteredRainfall}
              className={RainfallInputClasses}
            />
            {RainfallInputHasError && (
              <p className={classes.error}>Please enter a value</p>
            )}
          </div>

          <div className={classes.form__group}>
            <label htmlFor="name" className={classes.form__label}>
              City
            </label>
            <input
              type="text"
              id="name"
              onChange={CityHandler}
              onBlur={CityBlurHandler}
              vlaue={enteredCity}
              className={CityInputClasses}
            />
            {CityInputHasError && (
              <p className={classes.error}>Please enter a value</p>
            )}
          </div>
          <div className={classes.form__actions}>
            <button disabled={!isFormValid}>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CropDetail;
