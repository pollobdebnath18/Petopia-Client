"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How can I adopt a pet from Petopia?",
      a: "To adopt a pet, simply browse our available pets, open the pet profile, and click on the 'Adopt Now' button. After submitting your request, our team will review your application and connect you with the pet owner. Once verified, you can complete the adoption process and welcome your new companion home.",
    },
    {
      q: "Are all pets on Petopia healthy and vaccinated?",
      a: "Yes. Every pet listed on Petopia goes through a basic health verification process. Most pets are vaccinated, dewormed, and checked by a vet before being listed. Each pet profile clearly shows the current health and vaccination status so you can adopt with confidence.",
    },
    {
      q: "Is there any adoption fee and why is it required?",
      a: "Yes, a small adoption fee is required for most pets. This fee helps cover medical checkups, vaccination costs, food, and rescue care. It also ensures that adopters are responsible and committed to providing a safe and loving home for the pet.",
    },
    {
      q: "What happens after I submit an adoption request?",
      a: "After you submit a request, our team will review your details and may contact you for confirmation. In some cases, we may arrange a short communication with the current pet owner. Once everything is verified, you will receive approval instructions to complete the adoption process.",
    },
    {
      q: "Can I adopt a pet if I live in a different city?",
      a: "Yes, adoption is possible from different cities depending on the pet owner’s preference. In such cases, transport and handover arrangements will be discussed between both parties. Our goal is to ensure safe and responsible adoption regardless of location.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Find clear answers about adoption process, safety, and how Petopia
            works.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition cursor-pointer"
              >
                <span className="font-semibold text-gray-800">
                  <span className="text-green-600 mr-2 font-bold ">
                    {index + 1}.
                  </span>
                  <span className="text-xl"> {item.q}</span>
                </span>

                <span className="text-2xl font-bold text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-lg leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
