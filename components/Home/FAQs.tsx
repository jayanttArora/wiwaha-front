"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What types of events does Wiwaha host?",
      answer:
        "Be it an intimate wedding, lavish ceremony or any other pre- and post-wedding gathering, our venue ticks off all the boxes.",
    },
    {
      question: "Does the venue have open-air spaces?",
      answer:
        "Yes, we have beautiful open-air spaces perfect for outdoor ceremonies and receptions.",
    },
    {
      question: "What is the catering policy?",
      answer:
        "We offer in-house catering with a variety of cuisines. Outside catering is allowed with prior permission.",
    },
    {
      question: "Can we organise a DJ and live music?",
      answer:
        "Absolutely! We have designated areas for music and entertainment. Sound restrictions apply after 10 PM.",
    },
    {
      question: "Does the venue offer accomodation?",
      answer:
        "Yes, we have luxury suites and guest rooms available for the wedding party and guests.",
    },
  ];

  return (
    <section className="py-16" style={{ backgroundColor: "#f3eeea" }}>
      <div className="container mx-auto px-4 w-full 480:max-w-[700px] 650:max-w-[900px] 1080:max-w-[1200px] 1440:max-w-[1400px]">
        <div className="flex flex-col 1080:flex-row gap-8 justify-between">
          {/* Left Box */}
          <div className="flex flex-col">
            {/* Heading */}
            <h2 className="font-prata font-normal text-[64px] leading-[100%] text-[#4C5637] max-w-[540px]">
              Frequently Asked Questions
            </h2>

            {/* Description Text */}
            <p className="font-dm-sans font-medium text-[16px] text-[#585858] mt-8 mb-8 max-w-[540px]">
              Curious about drones or aerial photography? Our experts answer the
              most common questions to help you choose the right drone, master
              flying skills, and capture stunning shots with confidence and ease.
            </p>

            {/* Contact Button */}
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-[50px] h-[50px] rounded-full bg-[#D2C094] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/icons/contact.svg"
                  alt="Contact"
                  width={18}
                  height={18}
                />
              </div>
              <span className="font-roboto font-semibold text-[16px] text-[#4C5637] tracking-[2px]">
                CONTACT US
              </span>
            </div>
          </div>

          {/* Right Box (FAQ List) */}
          <div className="flex flex-col gap-4 flex-1 items-end">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`w-full max-w-[640px] rounded-[28px] p-6 transition-all duration-300 cursor-pointer bg-[#EAE0D7]`}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3
                    className={`font-prata font-normal text-[20px] text-left ${
                      openIndex === index ? "text-[#4C5637]" : "text-[#1C1C1C]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <div className="shrink-0 w-[40px] h-[40px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
                    {openIndex === index ? (
                      <X className="w-4 h-4 text-[#D2C094]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#1C1C1C]" />
                    )}
                  </div>
                </div>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-[200px] opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-dm-sans font-normal text-[16px] text-[#585858] text-left max-w-[550px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
