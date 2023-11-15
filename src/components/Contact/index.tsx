import React, { useState } from "react";
import * as ReactDOMServer from "react-dom/server";

import PageName from "components/UI/PageName";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Background from "../../helpers/svg/background";
import Divider from "../../helpers/svg/divider";

import { useSelector } from "react-redux";
import { useScroll, animated } from "@react-spring/web";

const Contact = () => {
  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);
  const { scrollYProgress } = useScroll({});

  const color = useSelector((state: any) => state.color);

  const sendEmail = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = new FormData(event.target);

    const email = {
      subject: data.get("subject"),
      email: data.get("email"),
      message: data.get("message"),
    };

    const response = await fetch("https://mybackend2020.herokuapp.com/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email),
    });

    if (response.status == 200) {
      (document.getElementById("form") as HTMLFormElement).reset();

      setErrorText("Email Sent");
      setLoading(false);
    } else if (response.status == 400) {
      setErrorText("Something went wrong");
      setLoading(false);
    }
  };

  const svgString = encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<Background color={color} />)
  );

  return (
    <animated.div
      /*  @ts-ignore */
      style={{
        opacity: scrollYProgress.to((val) => val * 6 - 4.8),
        display: scrollYProgress.to((val) =>
          val * 6 <= 4.8 ? "none" : "flex"
        ),
      }}
    >
      <div
        id="contact"
        style={{ backgroundImage: `url("data:image/svg+xml,${svgString}")` }}
      >
        {/* <div className="divider">
          <Divider />
        </div> */}
        <PageName name="Contact" />

        <Fade duration={2000}>
          <div className="contact_container">
            {/* <Slide duration={1500} top> */}
              <form id="form" onSubmit={sendEmail}>
                <Slide delay={300} left>
                  <p>
                    Stay in <span>touch</span> with me !
                  </p>
                </Slide>
                <Slide left delay={0} duration={1000}>
                  <input
                    className="input"
                    name="subject"
                    type="text"
                    placeholder="Subject:"
                    required
                  />
                  <br />
                </Slide>

                <Slide right delay={200} duration={1000}>
                  <input
                    className="input"
                    name="email"
                    type="email"
                    placeholder="Email:"
                    required
                  />
                  <br />
                </Slide>

                <Slide left duration={1500}>
                  <textarea
                    className="input"
                    name="message"
                    placeholder="Message:"
                    required
                  ></textarea>
                  <br />
                </Slide>

                <p
                  className="error_text"
                  style={{
                    color: errorText == "Email Sent" ? "#40d96f" : "#ff5959",
                  }}
                >
                  {errorText}
                </p>

                <Slide right delay={200} duration={1500}>
                  <input
                    className="send_button"
                    type="submit"
                    value={loading == true ? "Sending..." : "Send"}
                    disabled={loading == true ? true : false}
                    style={{
                      cursor: loading == true ? "default" : "pointer",
                    }}
                  />
                </Slide>
              </form>
            {/* </Slide> */}
          </div>
        </Fade>
      </div>
    </animated.div>
  );
};

export default Contact;
