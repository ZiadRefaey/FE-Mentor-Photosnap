import Feature from "./Feature";
import responsive from "/features/desktop/responsive.svg";
import noLimit from "/features/desktop/no-limit.svg";
import embed from "/features/desktop/embed.svg";
export default function HomeFeatures() {
  return (
    <div className="flex flex-col gap-14 px-8 py-20 xl:flex-row xl:gap-[30px] xl:m-auto xl:max-w-[1110px]">
      <Feature
        img={responsive}
        alt={"computer,tablet and mobile icon"}
        title={"100% Responsive"}
      >
        No matter which the device you&apos;re on, our site is fully responsive
        and stories look beautiful on any screen.
      </Feature>
      <Feature
        img={noLimit}
        alt={"infinity icon"}
        title={"No Photo Upload Limit"}
      >
        Our tool has no limits on uploads or bandwidth. Freely upload in bulk
        and share all of your stories in one go.
      </Feature>
      <Feature
        img={embed}
        alt={"social media icons"}
        title={"Available to Embed"}
      >
        Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos,
        Google Maps, and more.
      </Feature>
    </div>
  );
}
