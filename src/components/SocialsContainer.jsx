import TwitterIcon from "./Socials/TwitterIcon";
import YoutubeIcon from "./Socials/YoutubeIcon";
import InstagramIcon from "./Socials/InstagramIcon";
import FacebookIcon from "./Socials/FacebookIcon";
import PintersetIcon from "./Socials/PintersetIcon";
import { Link } from "react-router-dom";

import { useReducer } from "react";
const SocialStates = {
  instagramColor1: "#fff",
  instagramColor2: "#fff",
  instagramColor3: "#fff",
  twitterColor1: "#fff",
  twitterColor2: "#fff",
  youtubeColor1: "#fff",
  youtubeColor2: "#fff",
  facebookColor1: "#fff",
  facebookColor2: "#fff",
  pintersetColor1: "#fff",
  pintersetColor2: "#fff",
};
function reducer(state, action) {
  switch (action.type) {
    case "instagramEnter":
      return {
        ...state,
        instagramColor1: "#FFC593",
        instagramColor2: "#BC7198",
        instagramColor3: "#5A77FF",
      };
    case "instagramLeave":
      return {
        ...state,
        instagramColor1: "#FFF",
        instagramColor2: "#FFF",
        instagramColor3: "#FFF",
      };
    case "twitterEnter":
      return {
        ...state,
        twitterColor1: "#65FFEB",
        twitterColor2: "#27718A",
      };
    case "twitterLeave":
      return {
        ...state,
        twitterColor1: "#FFF",
        twitterColor2: "#FFF",
      };
    case "facebookEnter":
      return {
        ...state,
        facebookColor1: "#63AFDB",
        facebookColor2: "#6028F1",
      };
    case "facebookLeave":
      return {
        ...state,
        facebookColor1: "#FFF",
        facebookColor2: "#FFF",
      };
    case "pintersetEnter":
      return {
        ...state,
        pintersetColor1: "#F6C683",
        pintersetColor2: "#DE3838",
      };
    case "pintersetLeave":
      return {
        ...state,
        pintersetColor1: "#FFF",
        pintersetColor2: "#FFF",
      };
    case "youtubeEnter":
      return {
        ...state,
        youtubeColor1: "#D3205A",
        youtubeColor2: "#FF5A5A",
      };
    case "youtubeLeave":
      return {
        ...state,
        youtubeColor1: "#FFF",
        youtubeColor2: "#FFF",
      };
  }
}
export default function SocialsContainer() {
  const [
    {
      instagramColor1,
      instagramColor2,
      instagramColor3,
      twitterColor1,
      twitterColor2,
      youtubeColor1,
      youtubeColor2,
      facebookColor1,
      facebookColor2,
      pintersetColor1,
      pintersetColor2,
    },
    dispatch,
  ] = useReducer(reducer, SocialStates);
  return (
    <div className="w-full flex items-center justify-center gap-3 md:justify-start md:order-3">
      <Link
        to="https://www.instagram.com"
        onMouseEnter={() => dispatch({ type: "instagramEnter" })}
        onMouseLeave={() => dispatch({ type: "instagramLeave" })}
      >
        <InstagramIcon
          color1={instagramColor1}
          color2={instagramColor2}
          color3={instagramColor3}
          dispatch={dispatch}
        />
      </Link>

      <Link
        to="https://www.Facebook.com"
        onMouseEnter={() => dispatch({ type: "facebookEnter" })}
        onMouseLeave={() => dispatch({ type: "facebookLeave" })}
      >
        <FacebookIcon
          color1={facebookColor1}
          color2={facebookColor2}
          dispatch={dispatch}
        />
      </Link>
      <Link
        to="https://www.twitter.com"
        onMouseEnter={() => dispatch({ type: "twitterEnter" })}
        onMouseLeave={() => dispatch({ type: "twitterLeave" })}
      >
        <TwitterIcon
          color1={twitterColor1}
          color2={twitterColor2}
          dispatch={dispatch}
        />
      </Link>
      <Link
        to="https://www.pinterest.com"
        onMouseEnter={() => dispatch({ type: "pintersetEnter" })}
        onMouseLeave={() => dispatch({ type: "pintersetLeave" })}
      >
        <PintersetIcon
          color1={pintersetColor1}
          color2={pintersetColor2}
          dispatch={dispatch}
        />
      </Link>
      <Link
        to="https:www.youtube.com"
        onMouseEnter={() => dispatch({ type: "youtubeEnter" })}
        onMouseLeave={() => dispatch({ type: "youtubeLeave" })}
      >
        <YoutubeIcon
          color1={youtubeColor1}
          color2={youtubeColor2}
          dispatch={dispatch}
        />
      </Link>
    </div>
  );
}
