export type Feedback = {
  fullname: string;
  message: string;
  title: string;
  imageLink: string;
};

type Props = {
  feedbacks: Feedback[];
};

export default function FeedbackSection({ feedbacks }: Props) {
  console.log(feedbacks);

  return (
    <section className="border-y border-[#294740] px-5 pb-16 pt-5">
      <h2 className="text-center text-[31px]/[37px] font-semibold text-[#B3B8B7]">
        Reviews
      </h2>
      <p className="text-sm/base mt-[10px] text-center text-[#C6C6C6]/80">
        Reviews From the builders of Colabs to contributors, Colabs is changing
        how devs view open-source.
      </p>
      <div className="mt-10 grid gap-8">
        {feedbacks.map((feedback, index) => (
          <FeedbackComponent feedback={feedback} key={index} />
        ))}
      </div>
    </section>
  );
}

type FeedbackProps = {
  feedback: Feedback;
};

function FeedbackComponent({ feedback }: FeedbackProps) {
  return (
    <div className="border p-5">
      <p className="text-sm/base mt-[10px] text-center text-[#C6C6C6]/80">
        {feedback.message}
      </p>
    </div>
  );
}
