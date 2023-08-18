import { Text, Title } from "@mantine/core";
import classes from "./Herobox.module.css";

const Herobox = () => {
  return (
    <section className={classes.main}>
      <div className={classes.body}>
        <Title mb= {30} > Welcome to While Collection </Title>
        <Text>
          At Fashion Flair, we believe that fashion is more than just clothing,
          it's an expression of your personality and a way to showcase your
          unique style. Our app is designed to empower you with the latest
          fashion trends, AI-driven outfit suggestions, and a curated collection
          of top-quality clothing, accessories, and footwear.
        </Text>
      </div>
    </section>
  );
};

export default Herobox;
