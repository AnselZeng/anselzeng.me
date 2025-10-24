'use client';

import BlogPost from '@/components/blog/BlogPost';

export default function HarbinPage() {
  const sections = [
    {
      type: 'text' as const,
      content: `It's 4:07 pm, Thursday, February 6, 2025. I just returned home with my Grandpa after joining him on his daily walk. As I listened to his numerous travels and adventures, I felt inspired to write down my recent solo trip to the chilly city of Harbin.`,
    },
    {
      type: 'imageGroup' as const,
      images: [
        {
          src: '/blog/harbin/1.png',
          alt: 'harbin-1',
        },
        {
          src: '/blog/harbin/2.png',
          alt: 'harbin-2',
        },
        {
          src: '/blog/harbin/3.png',
          alt: 'harbin-3',
        },
      ],
    },
    {
      type: 'text' as const,
      content: `Located in China's northernmost and easternmost province, Heilongjiang, the area is notoriously known for its bitterly cold winters. When I stepped off the high-speed rail, I was greeted by what felt like a cool breeze. But wow, did I underestimate just how cold negative 27 degrees Celsius could be. Within minutes, my legs began to tremble, and my vision blurred from the amount of steam rising from my breathing. In hindsight, I definitely should've prepared my heat pads and hand warmers in advance.`,
    },
    {
      type: 'text' as const,
      content: `As I strolled around in this new city, I couldn't help but notice the uniqueness of its architecture. Having grown up in Beijing, I'm used to traditional Chinese buildings—stunning red wooden pagodas and golden rooftops topped with figures of mythical creatures. Harbin, however, was full of onion domes and Gothic-styled residential buildings. Intrigued by this European influence, I did some digging into Harbin's early beginnings.`,
    },
    {
      type: 'imageGroup' as const,
      images: [
        {
          src: '/blog/harbin/4.png',
          alt: 'harbin-4',
        },
        {
          src: '/blog/harbin/5.png',
          alt: 'harbin-5',
        },
        {
          src: '/blog/harbin/6.png',
          alt: 'harbin-6',
        },
      ],
    },
    {
      type: 'text' as const,
      content: `Harbin's transformation into an international city can be traced back to the Chinese Eastern Railway, a project financed by the Russian Empire. This railway not only connected rural cities across Northeastern China but also provided Russia with a link between Inner Siberia and its port cities. The project brought over the first wave of Russians into Harbin, who eventually became the majority population, outnumbering the Chinese residents. Following the October Revolution, Harbin saw a second wave of migration, as defeated officers of the Russian Empire and refugees retreated to Harbin. By this time, Harbin already had a well-established Russian community, with Russian-language newspapers and even schools that taught Russian.`,
    },
    {
      type: 'text' as const,
      content: `With this historical context in mind, it became clear that Harbin's past had left a lasting imprint on its present—evident in its iconic onion domes and strikingly wide pedestrian streets, a distinctly Parisian feature of the city's urban planning.`,
    },
    {
      type: 'imageGroup' as const,
      images: [
        {
          src: '/blog/harbin/7.png',
          alt: 'harbin-7',
        },
        {
          src: '/blog/harbin/8.png',
          alt: 'harbin-8',
        },
        {
          src: '/blog/harbin/9.png',
          alt: 'harbin-9',
        },
      ],
    },
    {
      type: 'text' as const,
      content: `Now I have to admit, it wasn't videos about the city's Russian past that initially caught my interest. Rather, my social media feeds were flooded with images of massive snowmen and the most intricately carved ice sculptures I'd ever seen. I'm talking about the annual Harbin Ice & Snow World, a massive theme park built on ice—using ice. Stepping onto the island felt like entering a real-life winter wonderland. The sculptures ranged from extremely detailed, human-sized ice carvings to enormous ice-block buildings that towered all around the park. Most of these large projects were replicas of famous landmarks, such as the Burj Khalifa, Taj Mahal, Osaka Castle, and Temple of Heaven. The sheer scale and artistry of it all left me in awe, especially after the colourful lights were turned on.`,
    },
    {
      type: 'imageGroup' as const,
      images: [
        {
          src: '/blog/harbin/10.png',
          alt: 'harbin-10',
        },
        {
          src: '/blog/harbin/11.png',
          alt: 'harbin-11',
        },
        {
          src: '/blog/harbin/12.png',
          alt: 'harbin-12',
        },
      ],
    },
    {
      type: 'text' as const,
      content: `Aside from having accumulated over 115k steps during my exploration of this beautiful Russian-influenced city, I also learned about a dark chapter in Harbin's history. During the Imperial Japanese Army's occupation of Northeastern China, horrific war crimes were committed, including biological weapons testing on live victims. These human experiments were carried out by a special organization, led by Unit 731, whose main complex was headquartered in Harbin. My visit to the museum, built on the grounds of the former bioweapons facility, was both eye-opening and gut-wrenching. Upon leaving the museum, visitors are guided through a long, dark tunnel, with their heads always facing forward, marching toward the bright exit illuminated by sunlight.`,
    },
    {
      type: 'imageGroup' as const,
      images: [
        {
          src: '/blog/harbin/13.png',
          alt: 'harbin-13',
        },
        {
          src: '/blog/harbin/14.png',
          alt: 'harbin-14',
        },
        {
          src: '/blog/harbin/15.png',
          alt: 'harbin-15',
        },
      ],
    },
    {
      type: 'text' as const,
      content: `Reflecting on my time in Harbin, I'm struck by the city's vibrant cultural fusion, stunning winter landscapes, and the shadows of its history. From having Madier Ice Cream on Central Street to eating Dalieba in the historic Chinese Baroque block, my five days here offered a glimpse into a city unlike any other. I hope to return someday, with even more stories to tell!`,
    },
    {
      type: 'imageGroup' as const,
      images: [
        {
          src: '/blog/harbin/16.png',
          alt: 'harbin-16',
        },
        {
          src: '/blog/harbin/17.png',
          alt: 'harbin-17',
        },
        {
          src: '/blog/harbin/18.png',
          alt: 'harbin-18',
        },
      ],
    },
  ];

  return (
    <BlogPost
      title="Five Days in Harbin"
      date="Feb 6, 2025"
      readTime="5 min read"
      category="Adventure"
      color="orange"
      coverImage="/blog/harbin/cover.png"
      sections={sections}
    />
  );
}
