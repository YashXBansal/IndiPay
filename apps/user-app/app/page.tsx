"use client";
import React from "react";
import { useSession } from "next-auth/react";
import CTASection from "./../../../packages/ui/src/CTASection";
import FeatureSection from "./../../../packages/ui/src/FeatureSection";
import Footer from "./../../../packages/ui/src/Footer";
import { FaLock, FaChartLine, FaHeadset } from "react-icons/fa";
import { Appbar } from "../../../packages/ui/src/Appbar";

function LandingPage() {
  const { data: session, status } = useSession();

  // Define features
  const features = [
    {
      title: "Secure Payments",
      description:
        "We ensure that your transactions are safe and secure with top-notch encryption and fraud protection.",
      icon: <FaLock size={32} />,
    },
    {
      title: "Investment Tools",
      description:
        "Access a suite of investment tools to help you grow your wealth and achieve your financial goals.",
      icon: <FaChartLine size={32} />,
    },
    {
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any inquiries.",
      icon: <FaHeadset size={32} />,
    },
  ];

  // Determine which CTA section to show
  const showFirstCTA = !session?.user;

  return (
    <div className="bg-gray-100 text-gray-900">
      <Appbar />
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to IndiPay</h1>
          <p className="text-xl mb-8">
            Empowering your financial journey with cutting-edge technology.
          </p>
          <a
            href="#features"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
          >
            Learn More
          </a>
        </div>
      </section>

      <div>
        <FeatureSection features={features} />
      </div>

      <div>
        {showFirstCTA ? (
          <CTASection
            title="Get Started Today"
            description="Sign up now and take control of your financial future with FinTech Solutions."
            buttonText="Sign Up Now"
            buttonLink="/signup"
          />
        ) : (
          <CTASection
            title="Tap to Start"
            description=""
            buttonText="Start Paying"
            buttonLink="/payments"
          />
        )}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
