export type Faqs = {
  question: string;
  answer: string;
};

type Props = {
  faqs: Faqs[];
};

export default function FaqSection({ faqs }: Props) {
  console.log(faqs);

  return (
    <section className="w-full border-y border-[#294740] pb-16 pt-5">
      <h2 className="text-center text-[31px]/[37px] font-semibold text-[#B3B8B7]">
        FAQs
      </h2>
    </section>
  );
}
