"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
// import Protected from "./hooks/useProtected";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activateItem, setActivateItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div>
      {/* <Protected> */}
        <Heading
          title="ELearning"
          description="Elearning is a platform for students to learn and get help from teacgers."
          keywords="Programming, MERN, Pedux,Machine Learning"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activateItem}
          setRoute={setRoute}
          route={route}
        />
         <Hero/>
      {/* </Protected> */}
    </div>
  );
};

export default Page;
