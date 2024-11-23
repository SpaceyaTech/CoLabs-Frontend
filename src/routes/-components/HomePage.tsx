import { LandingPageNavbar } from "@/components/navigation/LandingPageNavbar";
import FeedbackSection from "./FeedbackSection";
import FaqSection from "./FaqSection";

import { Link } from "@tanstack/react-router";

import { feedbacks } from "@/data/feedback";
import { faqs } from "@/data/faqs";

export function HomePage() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <LandingPageNavbar />
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-3 font-ff-poppins">
        {/* landing page goes here  */}
        <p className="rounded-2xl border border-primary p-5 text-3xl">
          Landing page goes here
        </p>
        <Link to="/dashboard" className="btn btn-outline">
          Go to Dashboard
        </Link>
      </div>
      <FeedbackSection feedbacks={feedbacks} />
      <FaqSection faqs={faqs} />
    </div>
  );
}
