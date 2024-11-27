import { useState } from "react";

export type Faqs = {
  question: string;
  answer: string;
};

type Props = {
  faqs: Faqs[];
};

export default function FaqSection({ faqs }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    // Set the active index, or null if the same question is clicked
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="w-full overflow-hidden border-y border-[#294740] px-8 pb-16 pt-5">
      <h2 className="text-center text-[31px]/[37px] font-semibold text-[#B3B8B7]">
        FAQs
      </h2>
      <div className="mx-auto mt-8 flex flex-col gap-8 lg:flex-row">
        <div className="w-full lg:w-2/3">
          <div className="rounded-[12px] border border-[#14A97C]/80">
            {faqs.map((faq, index) => (
              <FaqItem
                faq={faq}
                key={index}
                isOpen={activeIndex === index}
                toggle={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>

        <div className="w-full rounded-[12px] border border-[#14A97C]/80 p-6 text-center lg:w-1/3">
          <h3 className="text-lg font-semibold text-[#B3B8B7]">
            Got an additional question?
          </h3>
          <p className="mt-2 text-sm text-[#C6C6C6]/80">
            If you have any additional questions, we’d be happy to answer them.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block rounded-md bg-[#14A97C] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0f8e69]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

type FaqItemProps = {
  faq: Faqs;
  isOpen: boolean;
  toggle: () => void;
};

function FaqItem({ faq, isOpen, toggle }: FaqItemProps) {
  return (
    <div
      className={`p-4 ${
        isOpen ? "bg-[#294740]/20" : "hover:bg-[#294740]/10"
      } cursor-pointer`}
      onClick={toggle}
    >
      <div className="flex items-center">
        <p>M &nbsp; </p>
        <h4 className="text-base font-medium text-[#B3B8B7]">{faq.question}</h4>
        <button
          aria-label={`Toggle answer for ${faq.question}`}
          className="ml-auto text-3xl text-[#14A97C]"
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>
      {isOpen && <p className="mt-3 text-sm text-[#C6C6C6]/80">{faq.answer}</p>}
    </div>
  );
}
