"use client";
import BlogPost, { Section } from "@/components/blog/BlogPost";

export default function Page() {
  const sections: Section[] = [
    {
      type: "imageGroup",
      images: [
        {
          src: "/blog/longines.png",
          alt: "longines"
        }
      ]
    },
    {
      type: "text",
      content: `It's 8:09 am, Wednesday, July 27, 2022. I'm currently taking the train to work in person in downtown Toronto. Unlike previous business casual fits, hidden underneath my left sleeve today is a special piece of accessory. Here's the story of my first mechanical watch.`
    },
    {
      type: "text",
      content: `An unspoken rule in the watch industry is that you can, and must only, purchase a timepiece on a special occasion or hitting a particular milestone. For me, it's the long-awaited goal to get into my dream university program. After three years of hard work, many sleepless nights, and tons of manifestation, I received my offer to Ivey Business School this summer. Looking back, it's honestly hard to describe the joy that filled me when I read the acceptance email.`
    },
    {
      type: "text",
      content: `Immediately I called my parents, sharing with them this exciting news that I've been anxiously waiting for so long. After congratulating me and knowing I'd been wanting a proper watch for years, they asked what I had in mind. To me the answer was clear—it seemed only appropriate to look from the same brand my dad had purchased his first watch from, Longines.`
    },
    {
      type: "text",
      content: `Founded in 1832, Longines is older than almost every major Swiss watchmaker today. There's no question that this is a name built on tradition and heritage. Needless to say, I was beyond excited when walking into the boutique at Yorkdale. Fast forwarding, now having spent almost two weeks binging watch reviews and reading up on the history of certain timepieces, I've recently fallen into a deep rabbit hole of the watch industry.`
    },
    {
      type: "text",
      content: `It's absolutely fascinating to me how a piece of accessory can cost more than a car, or even a house. Watches like the iconic JLC Reverso and Speedmaster Professional have made me fall in love with horology, the art of watchmaking. From learning about how the Royal Oak saved Audemars Piguet during the Quartz Crisis, to understanding how the Grand Seiko spring drive works, I dream to build my own collection of classic timepieces.`
    },
    {
      type: "text",
      content: `To me, this watch holds much more than just its dollar value. Wearing it reminds me of the hard work I put in to reach where I am today. To me, it doesn't just tell me the time. Rather, this watch makes me value time. Each tick of its meticulous movement is a constant reminder that life has no rewind — so do my best for everything and appreciate what I have today. Above all, the sentimental value of this timepiece is priceless. I'm not interested in its value appreciation, as I hope to pass my first watch on to generations to come.`
    },
  ];

  return (
    <BlogPost
      title="From Crown to Caliber"
      date="Jul 27, 2022"
      readTime="2 min read"
      sections={sections}
    />
  );
}
