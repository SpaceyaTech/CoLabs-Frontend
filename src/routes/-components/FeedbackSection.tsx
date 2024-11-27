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
  return (
    <section className="overflow-hidden border-y border-[#294740] px-8 pb-16 pt-5">
      <h2 className="text-center text-[31px]/[37px] font-semibold text-[#B3B8B7]">
        Reviews
      </h2>
      <p className="text-sm/base mt-[10px] text-center text-[#C6C6C6]/80">
        Reviews From the builders of Colabs to contributors, Colabs is changing
        how devs view open-source.
      </p>
      <div className="mx-auto mt-6 flex flex-wrap gap-4 lg:-mr-14">
        {feedbacks.map((feedback, index) => (
          <FeedbackComponent feedback={feedback} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

type FeedbackProps = {
  feedback: Feedback;
  index: number;
};

function FeedbackComponent({ feedback, index }: FeedbackProps) {
  return (
    <div
      // style={{
      //   background:
      //     "radial-gradient(circle at top right,  rgb(20 169 124 / 0.8) -80%, rgb(140 158 153 / 0.15) 50%)",
      // }}
      className={`w-full rounded-[12px] border border-[#14A97C]/80 bg-[#8C9E99]/15 bg-gradient-to-tr from-base-100 via-base-100/70 to-primary/10 p-3 sm:w-[calc((100%-16px)/2)] md:px-6 lg:w-[calc((100%-32px)/3)] ${index < 2 ? "lg:basis-[25%]" : ""}`}
    >
      <p className="text-sm/base mb-10 mt-[10px] text-[#C6C6C6]/80">
        {feedback.message}
      </p>
      <div className="text flex items-center justify-between">
        <div>
          <h4>{feedback.fullname}</h4>
          <p>{feedback.title}</p>
        </div>
        <img
          src={feedback.imageLink}
          alt={`Profile picture of ${feedback.fullname}`}
          className="h-12 w-12 rounded-[8px] object-cover"
        />
      </div>
    </div>
  );
}
