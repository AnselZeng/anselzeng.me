'use client';

import BlogPost from '@/components/blog/BlogPost';
import { Text } from '@chakra-ui/react';

export default function ChapterPage() {
  const sections = [
    {
      type: 'text' as const,
      content: `It's 11:56 am, Friday, November 14, 2025. This morning I went out for a nice walk around the neighbourhood, through the forest and past the train tracks to grab a cup of coffee from Timmies. Going on walks has become more routine lately, since it feels like I'm just counting down the days, sitting at home aimlessly, in a way that weirdly reminds me of quarantine five years ago. Each walk feels like downtime for my eyes and brain after spending nearly every waking minute staring at my monitor, which pretty much sums up my day-to-day.`,
    },
    {
      type: 'text' as const,
      content: `Somehow it's already been 23 days since I walked across the stage at my undergrad convocation, and in 20 days from today, I turn 23. Just last night, my parents and I booked our flights to LA, as they send me off for grad school. That leaves only 47 days living with my parents. With the move about to happen, a career ahead, and eventually my own family, this last month and a half has really hit me. It feels like the official end of the first chapter of life, under the wings of my mom and dad.`,
    },
    {
      type: 'text' as const,
      content: (
        <>
          Funny enough, our flight will land in LA at 12:49 am on January 1st, 2026. It'll be the first time I ever set foot in the city, and well, officially moving to live in a new country. I could not have started a new chapter of my life more <Text as="span" fontStyle="italic">literally</Text>, on New Year's Day. I have to admit, it's slightly nerve-racking to be so far from home, moving from the East Coast to the West Coast all the way across the continent, to a city where I have no friends, no family, and no connections. I'll definitely be missing my bed, my closet, my neighbourhood, and craving home-cooked meals.
        </>
      ),
    },
    {
      type: 'text' as const,
      content: (
        <>
          Maybe it's just my immature thinking, but I've come to realize that the whole "frontal lobe development" thing is so real. So many things in life become clearer as the years pass and we all grow older. And I'm not even talking about the basic realizations like "everyone's on their own timeline" or "it's your parents' first time living too." These were things I always <Text as="span" fontStyle="italic">knew</Text>, but I don't think I fully understood them until recently. What's really hitting me now is how different people's paths actually turn out to be in reality, not just in theory. Seeing my friends' lives unfold in such varied ways — some switching career paths, some going to law school, some struggling at work, some striving, some taking a gap year to do more internships before graduating, and some already getting promoted — it's fascinating how diverse life really is. As open as I'd like to think my eyes have been to the broader world, I know there's so much more out there to discover and learn.
        </>
      ),
    },
    {
      type: 'text' as const,
      content: `Since coming back from exchange and finishing my last undergrad semester abroad four months ago, I feel like I've changed drastically as a person. I remember in those first weeks home, friends kept asking whether the experience had changed me, studying and travelling across the other side of the planet, and I always said no. But I think I just needed time for everything to settle in.`,
    },
    {
      type: 'text' as const,
      content: (
        <>
          The past four months had been full of twists and turns, ups and downs. When I touched down, reality hit immediately. The biggest question that used to linger at the back of my mind now jumped to the forefront, staring me down: <Text as="span" fontStyle="italic">what now</Text>? What direction do I take my life in? What are my true interests? What should I specialize in? Where are my strengths? This one was extra hard to answer because I know I'm a generalist at heart.
        </>
      ),
    },
    {
      type: 'text' as const,
      content: `As I reflect on the past four months, so much has happened. I began working as a research assistant on this eye-opening sustainable agriculture project at Ivey. The entire field was completely new to me, coming from a background in SWE and tech, and meeting farmers in person for the first time was a deeply meaningful experience. It completely shifted my perspectives and unlocked thoughts I had never explored before. Alongside this project, I also applied to and got into my dream school in LA. Since sophomore year, I had told some of my close friends that I wanted to move there after school. The city always held a strange appeal for me, and I knew I wanted to spend my 20s there. Who knows how long I'll end up staying.`,
    },
    {
      type: 'text' as const,
      content: `During this time, my mom and I took a two-week road trip around Austria and Czechia. I'm very grateful to have spent this time with her, because we both knew this was very likely the last chance I'd get to do something like that before a new chapter began, and I'd be swamped with work, making it hard to find time for family. What else — oh yeah, convocation. Officially the end of that chapter at Western University. After the ceremony, I took my parents for a long walk around the buildings I held deep memories with: benches where I had spent countless hours studying, and hallways where I stressed over exams.`,
    },
    {
      type: 'text' as const,
      content: `This morning, on my way back from Timmies, I passed people walking their dogs, morning runners, and parents dropping their kids off at school. As corny as it sounds, slowing down sometimes really makes you appreciate the simple things in life. The autumn breeze, the sunrises and sunsets, and honestly, the past four months have really cemented that for me. I'll go continue packing my clothes now, getting ready to flip the page — starting a new chapter.`,
    },
  ];

  return (
    <BlogPost
      title="Starting a New Chapter"
      date="Nov 14, 2025"
      readTime="4 min read"
      category="Reflection"
      color="orange"
      coverImage="/blog/chapter.png"
      sections={sections}
    />
  );
}

