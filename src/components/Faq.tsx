"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Where is the institute located?",
    answer: "Our institute is located in the heart of Braamfontein JHB,Pretoria CBD & Polokwane CBD within easy access to public transport (park station / Bree taxi rank / bus routes), shopping centers, recreational facilities, student accommodation. Refer to the map on the website.",
  },
  {
    question: "What programmes are offered at JIET and at what level?",
    answer: "JIET is a private FET institute that offers courses at an affordable rate and are aligned to the National Qualification Framework (NQF) with levels ranging from NQF Level 2-4 , Nated Courses in Business studies, Leisure & Hospitality studies from N4-N6 & Engineering courses from N1-N6 & various short skills programmes from 1 week to 6 months.",
  },
  {
    question: "Are you accredited / registered or have any affiliations? ",
    answer:
      "Johannesburg Institute of Engineering & Technology is Provisionally Accredited (FET00896PA) with Umalusi Council of Quality Assurance in General & Further Education & Training in terms of section 29 & 35 of Further Education & Training Colleges act, 2006 (Act No. 16 of 2006) MICT-SETA LPA/00/2012/07/884.Exam centre Number 899998888.JIET (Pty) Ltd. Reg No.2012/008964/07. Our Programmes are completely aligned with the National Department of Higher Education, Umalusi, SAQA, members of APPETD.",
  },
  {
    question: "Who issues certificates & Diplomas upon the completion of each programme? ",
    answer:
      "All our learners obtain certification & Diplomas from the National Department of Higher Education, MICT-SETA, and MERSETA upon their successful completion of each level or year that are recognized by Higher institutions of learning, employment agencies, reputable companies.",
  },
  {
    question: "What experience has your institution got in training & learning? ",
    answer:
      "Since 2002, we have strongly worked on improving & building Quality Teaching & Curriculum, Implementation of developing Performance Plans for administrators and teaching staff, closed the Gap between Indigenous and non-Indigenous students, introduced up to 95% of our students to Work Readiness Programmes with various organisations in partnership that have prepared our students to serve & excel in our fast growing yet demanding economy.",
  },
  {
    question: "Do you offer Bursaries? ",
    answer:
      "Yes, the institute has until now offered up to 250 achievers bursaries to learners from disadvantaged communities, and those that have extremely excelled in academics, cultural & sports events through our campaign nationwide themed “Giving back to our deserved communities.” Contact us to find out more about the bursary programme.",
  },
  {
    question: "What facilities does the institute provide for student support? ",
    answer:
      "The institute’s resource center was designed to meet the needs of education & training practices our “Loan-A-book” campaign stands to assist all students that may need to loan books from resource center up to 2 weeks for further reading, conducting research. Our cyber center hosts e-library with over 600 informative sites, journals & other educational literature that learners can find useful in their study fields.",
  },
  {
    question: "Toggle Title ",
    answer:
      "The institute’s resource center was designed to meet the needs of education & training practices our “Loan-A-book” campaign stands to assist all students that may need to loan books from resource center up to 2 weeks for further reading, conducting research. Our cyber center hosts e-library with over 600 informative sites, journals & other educational literature that learners can find useful in their study fields.",
  },
  {
    question: "Is Extra-Mural Activities & Social Network available at the institution?",
    answer:
      "Yes, we encourage students to participate in various sports and social events as organized by SRC & the students events coordinator, every year the institute organizes “ talent shows” inter-departmental, inter-campus tournaments in sports, beauty pageants (Mr & Ms JIET) Free internet facility is available to students at the cyber center not only for academics but also to build pillars of networking with friends/family/relatives from different walks of life in sharing experiences with the rest of the world and improving on effective communication skills.",
  },
  {
    question: "How do you assist learners fit into today’s competitive job market?",
    answer:
      "First of all we engage all the students in our Work Readiness Programme (WRP) to prepare them for work place demands. The institute secures for students that have not been placed to companies the for their internship programmes which develops & shapes them with the necessary experience & exposure to working environment.",
  },
];
