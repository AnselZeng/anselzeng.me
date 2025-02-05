import { 
  Avatar, 
  Container, 
  Flex, 
  Heading, 
  HStack, 
  Image, 
  Text, 
  VStack 
} from "@chakra-ui/react";

export default function Page() {
  const content = `
    It’s 3:09 pm, Wednesday, June 26, 2024. I’m sitting with my Dad on our flight from Lhasa to Chengdu and eventually back home to Beijing. Today marks the end of our 10-day journey in Tibet. This is undoubtedly one of the most memorable trips I’ve ever taken. From the 40-hour train ride that took us from sea level to an altitude of over 3,000 m, to visiting Buddhist monasteries and learning about the history of this beautiful religion, there’s one event that’s etched into my memory the most: spending a night on Mount Everest Base Camp.

    After adjusting to the high altitude of Tibet for a couple of days, on the morning of day four, our tour group set out to Everest’s North Base Camp, located in Tingri. As our van pulled up to the second hotel to pick up the other half of our tour group, I noticed fewer people standing in the lobby. As it turned out, a couple from New Zealand had symptoms of altitude sickness that worsened and visited a local hospital overnight. Now with two empty seats in the van, we began our drive from Shigatse to the Himalayan mountains.

    Along the way, we drove through 350 km of nerve-racking mountain highways and crossed the famous “heavenly ladder”, a 108-turn road (it was indeed 108 turns… seriously, a hundred and eight twists and turns climbing up these humongous mountain ranges). After a gruelling 10 hours since leaving the comfy hotel, I finally caught my first glimpse of Base Camp.

    My first words were… well, nothing. I was completely speechless. I was in complete awe standing 5,200 m above sea level, staring at the peak of Mount Everest. There stood a large slab of stone with “the third pole of the Earth” carved on it; believe me, that statement could not be truer.

    I followed the guide into our tent, where I immediately noticed the modern heating unit and a sticker with Free Wifi printed on it. I think it’s safe to say that everyone had the same reaction, which was this is a thousand times more luxurious than expected. There were wooden boards put up in each sub-unit of the tent that separated sleeping rooms, and somehow a sink in the corner. Extra blankets, medical oxygen, and even hot water were all available.

    After asking around, I learned that due to the thinning glacier below, the North Base Camp was relocated 4 km lower than its original spot. This new camp was built with a bigger budget and had many more of the necessary amenities to make it feel like a comfy place to stay.

    It was now an hour before sunset, so our guide took us to tour the highest monastery in the world, Rongbuk Monastery. Inside, a Buddhist nun greeted us and offered butter tea, a traditional Tibetan drink found in every household.

    As we stepped outside the monastery and were still trying to catch our breath adjusting to the new altitude level, everyone’s eyes locked right at Everest’s peak. Usually, at such a high elevation, it’s rare to see the Himalayan mountains’ peaks. But this sunset, it was clear as day. We all rushed higher on the Base Camp, trying to get the picture of a lifetime.

    After finally getting the perfect shot, I put my phone down and simply stared at Earth’s third pole — watching the sun slowly gaze higher and higher up the mountain, eventually leaving this sliver of a golden peak. Then the sky began to turn pink, and combined with the massive snow mountains, I knew this was a once-in-a-lifetime moment.

    Back in my tent, the altitude of Everest Base Camp at 5,200 m finally began to hit me. It felt like my skull was trying to compress my brain with each heartbeat. I’d been extremely lucky that the only symptoms I experienced at around 3,000 m and 4,000 m early in the week were simply light headaches. But at over 5,000 m, it’s a completely new challenge.

    For the rest of the evening, especially during dinner, I felt the most persistent headache in the upper right back of my head. This wasn’t any type of pain I had ever experienced; it wasn’t exactly pain even, I was feeling so disgusted that I felt like I might vomit. Looking back, I should’ve given up on trying to go through this entire trip without ever using supplemental oxygen. Before sleeping, I Googled the level of oxygen at such a high altitude and found out it was around 50% less than at sea level. I still can’t comprehend how people reach 8,000 m (also known as the death zone on Everest), and some make it to the peak at 8,848.86 m, the highest point on Earth.

    Nevertheless, I forced myself to sleep around 2 am and woke up at 6 with the same level of headache I had slept with. I left the tent to catch the sunrise with a couple of other early birds, but it unfortunately wasn’t nearly as jaw-dropping as Everest’s sunset.

    This pretty much marks the end of my night on the tallest mountain in the world, as after a warm breakfast we headed back down to the 4,000 m level and made our way back to Shigatse.

    The airplane announcement just came on that we’re now beginning our descent and I’m trying to think of a way to end this long rant. I’m not sure if there’s a point I’m trying to make or even a lesson learned that I’m trying to share. So, I’ll just leave a message to my future self: Congratulations on summiting Mount Everest!
  `;

  return (
    <Container bg="#FFF8EB" maxW="100%" p={0}>
      <Container maxW="container.xl" p={0}>
        <Flex py={6} maxW="container.xl" m="auto" />
        <Container px={12} py={{ base: 12, lg: 24 }} maxW="container.lg">
          <VStack align="start" spacing={6}>
            <Heading size="2xl">A Night on Everest</Heading>
            <HStack>
              <Avatar name="Ansel Zeng" src="/blog/pfp.png" />
              <VStack spacing={0} align="start">
                <Text>Ansel Zeng</Text>
                <Text fontSize="small">Jun 26, 2024 • 5 min read</Text>
              </VStack>
            </HStack>
            <Image src="/blog/everest/everest.png" alt="everest" />
            {content.split("\n\n").map((paragraph, index) => (
              <Text key={index}>{paragraph.trim()}</Text>
            ))}
          </VStack>
        </Container>
      </Container>
    </Container>
  );
}
