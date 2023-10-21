import Feature from "./Feature";

import responsive from "/features/desktop/responsive.svg";
import noLimit from "/features/desktop/no-limit.svg";
import embed from "/features/desktop/embed.svg";
import exposure from "/features/desktop/boost-exposure.svg";
import domain from "/features/desktop/custom-domain.svg";
import dragDrop from "/features/desktop/drag-drop.svg";
const featuresList = [
  {
    img: responsive,
    text: "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.",
    alt: "Responsive Icon",
    title: "100% Responsive",
  },
  {
    img: noLimit,
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    alt: "Infinity Icon",
    title: "No Photo Upload Limit",
  },
  {
    img: embed,
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    alt: "Embeding Icon",
    title: "Available to Embed",
  },
  {
    img: domain,
    text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    alt: "Domain Icon",
    title: "Custom Domain",
  },

  {
    img: exposure,
    text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    alt: "Exposure Icon",
    title: "Boost Your Exposure",
  },
  {
    img: dragDrop,
    text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    alt: "Drag and Drop Icon",
    title: "Drag & Drop Image",
  },
];
export default function FeaturesPageList() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 px-8 py-20 xl:flex-row xl:gap-[30px] xl:m-auto xl:max-w-[1110px]">
      {featuresList.map((feature, index) => (
        <Feature
          key={index}
          title={feature.title}
          alt={feature.alt}
          img={feature.img}
        >
          {feature.text}
        </Feature>
      ))}
    </section>
  );
}
