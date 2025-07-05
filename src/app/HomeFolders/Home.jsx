import React from "react";
import Header from "./Header";
import AboutQuery from "./AboutQuery";
import HowItWorks from "./HowItWorks";
import TopUsers from "./TopUser";
import RecentQuestions from "./RecentQuestion";
import WhyJoinUs from "./WhyJoinUs";
import Testimonials from "./Testimonials";
import Posts from "../Components/UserPosts/Posts";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutQuery />
      <HowItWorks />
      <TopUsers />
      <RecentQuestions />
      <WhyJoinUs />
      <Testimonials />
      <Posts />
    </div>
  );
}
