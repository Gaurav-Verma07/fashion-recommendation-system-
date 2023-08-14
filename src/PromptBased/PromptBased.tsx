import classes from "./promptBased.module.css"

const PromptBased = () => {
  return (
    <section>
      <textarea className={classes.textBox}  cols={30} rows={10} placeholder="Write some prompt for suggestions ..."></textarea>
    </section>
  );
};
export default PromptBased;
