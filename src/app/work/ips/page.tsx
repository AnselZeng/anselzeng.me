import React from 'react';
import { Box, Container, Flex, Image } from "@chakra-ui/react";
import Header from '../../../components/work/Header';
import Takeaways from '../../../components/work/Takeaways';
import Overview from '../../../components/work/Overview';
import BannerText from '../../../components/work/BannerText';
import BasicText from '../../../components/work/BasicText';
import Showcase from '../../../components/work/Showcase';

export default function Page() {
  const sec1colors = {
    lightGray: '#ADADAD',
    black: '#1D1D1F',
    primaryColour: '#1A783C',
    gray: '#727272',
  };

  const sec5colors = {
    lightGray: '#ADADAD',
    black: '#1D1D1F',
  };

  const takeawayscolors = {
    secondaryColour: '#ADADAD',
    subtitleColor: '#1D1D1F',
    primaryColour: '#1A783C',
  };

  const takeaways = [
    { number: '01', text: 'Lack of user interactions' },
    { number: '02', text: 'Values listening activity' },
    { number: '03', text: 'Lack of customization' },
    { number: '04', text: 'Potential social media app' },
    { number: '05', text: 'Praises smart algorithm' },
    { number: '06', text: 'Discoverability struggles' },
  ];

  const showcases = [
    { src: '/ips/artist.png', alt: 'spotify artist', description: 'User flow for adding a showcase featuring their', boldText: 'favourite artist' },
    { src: '/ips/song.png', alt: 'spotify song', description: 'User flow for adding a showcase featuring their', boldText: 'favourite song' },
    { src: '/ips/all.png', alt: 'spotify all', description: 'Other potential showcase options, including', boldText: 'Spotify Wrapped' },
  ];

  return (
    <Container bg="#FFF8EB" maxW="100%" p={0}>
      <Flex py={6} maxWidth="container.xl" m="auto" />

      <Header
        tag="FELLOWSHIP"
        title="Ivey Product Society 🎧"
        subtitle="Enhancing Spotify's social experience through customization on the profile page"
      />

      <Box display="flex" justifyContent="center">
        <Image src="/ips/ips_hero.png" alt="ips hero" />
      </Box>

      <Overview
        heading="01 | OVERVIEW"
        overviewTitle="the path to product"
        overviewText={[
          "The Ivey Product Fellowship is an alumni-facilitated bootcamp where students engage in product-management-focused curriculum and showcase a capstone product to industry professionals. As someone who had little to no prior experience in the product realm, I was thrilled to be surrounded by a community of accomplished alumni.",
          "Having listened to 164,498 minutes of music in just the past year, it was natural for me to select Spotify as the app for my capstone project. As an avid music streamer from morning till night, I've become intimately familiar with the app's latest features and intricate UX/UI design details. However, this immersion also led me to harbor complaints and a persistent feeling that something was missing.",
          "IPS (Ivey Product Society) presented an ideal opportunity for me to address these challenges head-on while gaining valuable insights into the world of product management.",
        ]}
        roles={['Product Management', 'Fellow']}
        team={['Ansel (Me 😄)', 'Brennan (Program Lead)', 'David (Alumni Coach)', 'Rohan (Student Mentor)']}
        tools={['Notion', 'Figma']}
        timeline={['Jan – Apr 2023']}
        colors={sec1colors}
      />

      <BannerText
        heading="02 | THE CHALLENGE"
        mainText="How can Spotify effectively boost user engagement and encourage a higher frequency of platform usage?"
        primaryColour="#1A783C"
        secondaryColour="#A1D3BB"
        textColor="white"
      />
      
      <BasicText
        heading="03 | PROBLEM ALIGNMENT"
        subtitle="is there really something wrong?"
        texts={[
          "Spotify's limited social capabilities hinder meaningful interaction between users, resulting in difficulties with music discovery, playlist sharing, and engagement with friends' listening habits. This issue can potentially impede user retention and underutilization of the platform.",
          "To overcome this challenge, Spotify should prioritize enhancing its social features. By introducing customizable profile pages and fostering music-centered social groups, users can connect, share playlists, and discover music more seamlessly. This approach aims to boost user engagement, satisfaction, and retention by creating a more interactive and socially connected platform experience.",
        ]}
        colors={sec5colors}
      />
      
      <Takeaways
        sectionTitle="04 | RESEARCH"
        subtitle="gaining some user insights"
        description="To understand Spotify usage among different demographics, I interviewed a diverse group of individuals from around the school. The interviews revealed that while some users enjoy the platform's customization options and algorithm-generated playlists, others found the lack of new content and limited social features to be a drawback."
        takeawaysTitle="These are six main takeaways from the conducted UXR (User Experience Research)."
        takeaways={takeaways}
        colors={takeawayscolors}
      />
      
      <BannerText
        heading="05 | VALUE PROPOSITION"
        mainText="By enhancing its social features through customizable profile pages, Spotify can offer a richer and more rewarding user experience, leading to increased engagement, retention, and satisfaction."
        primaryColour="#1A783C"
        secondaryColour="#A1D3BB"
        textColor="white"
      />

      <BasicText
        heading="06 | SOLUTION DETAILS"
        subtitle="unveiling your melodic persona"
        texts={[
          "The proposed solution to enhance the user experience on Spotify is the introduction of Customizable Profile Pages. This feature empowers users to personalize their profiles, showcasing their unique personalities and music preferences. Users can fully customize their profile page by adding a featured showcase to display a variety of awards or statistics. This visual customization allows users to express their musical tastes and create visually appealing profiles that capture attention.",
        ]}
        colors={sec5colors}
      />
      
      <Showcase
        title="showcases"
        items={showcases}
        bgColor="#EBEBEB"
        textColor="#1D1D1F"
      />
      
      <BasicText
        heading="07 | THE FINALE"
        subtitle="end of the beginning"
        texts={[
          "As the curtains draw on my journey with Ivey Product Society, I’m filled with gratitude for the immense growth and learning I have experienced. From creating a Product Requirements Document to conducting user research, the hands-on nature of the program not only sharpened my product skills but also taught me the art of translating ideas into tangible solutions.",
          "Undoubtedly, one of the standout moments was presenting my capstone project to a panel of PMs from Meta and Wealthsimple. The intensity of the technical questions definitely put me on the spot, but the thorough feedback I received left a lasting mark on my product mindset and thought process. It was a transformative experience that propelled me to new heights.",
          "I extend my heartfelt appreciation to the dedicated Ivey alumni who selflessly dedicate their valuable time to the fellowship. Their mentorship and guidance have opened doors I never imagined possible. This incredible opportunity has ignited an unquenchable thirst for product innovation within me, and I eagerly look forward to the exciting journey ahead!",
        ]}
        colors={sec5colors}
      />
    </Container>
  );
}
