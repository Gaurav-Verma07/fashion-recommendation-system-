import { Button, Text, Title } from "@mantine/core";
import classes from "./Herobox.module.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/uc1.png";
import logo1 from "../../assets/uc3.png";
import logo2 from "../../assets/uc2.png";
import logo3 from "../../assets/uc4.png";

const Herobox = () => {
  const navigate = useNavigate();

  return (
    <section>
      <section className={classes.main}>
        <div className={classes.body}>
          <Title color="grey" mb={30}>
            {" "}
            Welcome to While Collection{" "}
          </Title>
          <Text>
            At Fashion Flair, we believe that fashion is more than just
            clothing, it's an expression of your personality and a way to
            showcase your unique style. Our app is designed to empower you with
            the latest fashion trends, AI-driven outfit suggestions, and a
            curated collection of top-quality clothing, accessories, and
            footwear.
          </Text>
          <Button
            className={classes.generateBtn}
            pb={10}
            pt={10}
            onClick={() => {
              navigate("/generate");
            }}
          >
            Let's Create
          </Button>
        </div>
      </section>
      <div className={classes.container}>
        <div className={classes.uc1}>
          <div className={classes.uc1Image}>
            <img src={logo} alt="" />
          </div>
          <div className={classes.uc1Content}>
            <h1>Sales Order Creation</h1>
            <p>
              Offer personalized outfit suggestions using past purchases,
              browsing history, and style preferences to improve shopping and
              boost successful buys.
            </p>
          </div>
        </div>
        <div className={classes.uc1}>
          <div className={classes.uc2Content}>
            <h1>Learning and Recommendation</h1>
            <p>
              Provide trend insights via social media analysis, keeping users
              stylish and informed about current fashion.
            </p>
          </div>
          <div className={classes.uc2Image}>
            <img src={logo1} alt="" />
          </div>
        </div>
        <div className={classes.uc1}>
          <div className={classes.uc3Image}>
            <img src={logo2} alt="" />
          </div>
          <div className={classes.uc1Content}>
            <h1>Virtual Stylist</h1>
            <p>
              Act as a virtual stylist, offering personalized outfit advice for
              different occasions, boosting users' fashion confidence.
            </p>
          </div>
        </div>
        <div className={classes.uc1}>
          <div className={classes.uc2Content}>
            <h1>Chat Bot Integration</h1>
            <p>
              Allow users to upload wardrobe photos; AI suggests outfits using
              current items and new buys
            </p>
          </div>
          <div className={classes.uc4Image}>
            <img src={logo3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herobox;
