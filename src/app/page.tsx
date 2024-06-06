import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { AuroraBackgroundDemo } from "@/components/ui/AuroraBackgroundDemo";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
   <Container>
    <AuroraBackgroundDemo />  
      <Hero />         
      <SectionTitle
        preTitle="Johannesburg Institute of Engineering and Technology.
        "
        title="Let the Journey Begin At Jiet College"
      >
        Join our Open Day to learn about upcoming programmes for this Mid-Year. Reserve Your Spot!
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        Let us be your partner to your exciting lifelong learning experience with us.
      </SectionTitle>

      <Video videoId="06afe8lY5NE" />

      <SectionTitle
        preTitle="Testimonials"
        title="Raving Satisfied Fans"
      >
        We produce industry ready graduates.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Welcome to our FAQ! Here, you wll find answers to the most commonly asked questions about our product/service. If you can not find what you are looking for, feel free to contact us and we will be happy to help.
      </SectionTitle>
    
      <Faq />
      <Cta />
    </Container>
  );
}
