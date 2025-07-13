import React from "react";
import Header from "./Header";
import AboutQuery from "./AboutQuery";
import HowItWorks from "./HowItWorks";
import TopUsers from "./TopUser";
import RecentQuestions from "./RecentQuestion";
import WhyJoinUs from "./WhyJoinUs";
import Testimonials from "./Testimonials";
import PopularTopics from "./PopularTopics";
import Community from "./Community";
import Example from "./Example";

export default function Home() {
  return (
    <div>
      <Example />
      <Header />
      <AboutQuery />
      <PopularTopics />
      <Community />
      <HowItWorks />
      <TopUsers />
      <RecentQuestions />
      <WhyJoinUs />
      <Testimonials />
    </div>
  );
}
