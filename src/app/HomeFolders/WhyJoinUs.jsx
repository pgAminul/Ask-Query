import React from "react";
import Title from "../Components/ReusableComponent/Title";
import Image from "next/image";
import team from "../../../public/team.jpeg";
export default function WhyJoinUs() {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Title
            title="Why Join With Us?"
            description="Discover the benefits of our community"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src={team}
                alt="Community members discussing"
                fill
                className="object-cover"
                sizes="w-full h-full"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="lg:w-1/2 space-y-8">
            <div className="flex gap-4">
              <div className="text-primary mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Instant Knowledge Boost
                </h3>
                <p className="">
                  Get answers to your questions within minutes from our active
                  community of experts and enthusiasts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-primary mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Build Your Network</h3>
                <p className="">
                  Connect with like-minded professionals and expand your circle
                  in the tech community.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-primary mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Verified Solutions</h3>
                <p className="">
                  All answers are peer-reviewed and verified by community
                  moderators for accuracy.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-primary mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="">
                  Get early access to the latest trends, technologies, and best
                  practices in your field.
                </p>
              </div>
            </div>

            <button className="my-6 btn btn-primary px-8">
              Join Community Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
