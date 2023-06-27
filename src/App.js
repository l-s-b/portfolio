import { useEffect, useRef, useState }  from "react";
import './App.css';
import './Custom.css';
import Sun from './comps/Sun';
import Moon from './comps/Moon';
import Spain from "./comps/Spain";
import Britain from "./comps/Britain";
import en from "./locales/EN.json";
import es from "./locales/ES.json";

const lightHex = "#DDDDEE";
const darkHex = "#222233";
const bubbleSize = "12rem";

const locales = {
  "EN": en,
  "ES": es
}

function App() {
  //STATES
  const [primaryBg, setPrimaryBg] = useState("grey-bg");
  const [primaryText, setPrimaryText] = useState("white-bg");
  const [accentBg, setAccentBg] = useState("grey-bg")
  const [accentText, setAccentText] = useState("white-bg")
  const [lang, setLang] = useState(null);
  const [locale, setLocale] = useState(null);

  //REFS
  const bgRef = useRef(null);
  const sunRef = useRef(null);
  const moonRef = useRef(null);
  const esRef = useRef(null);
  const enRef = useRef(null);

  const returnOpposite = primary => primary === "light" ? "dark" : "light"
  //HANDLERS
  const handleTheme = e => {
    e.preventDefault();
    sunRef.current.classList.remove("_fromLeft")
    moonRef.current.classList.remove("_fromRight")
    sunRef.current.classList.add("_toLeft")
    moonRef.current.classList.add("_toRight")
    setPrimaryBg(e.currentTarget.id+"-bg")
    setPrimaryText(returnOpposite(e.currentTarget.id)+"-txt")
    setAccentBg(returnOpposite(e.currentTarget.id)+"-bg")
    setAccentText(e.currentTarget.id+"-txt")
    setLang("...")
  }
  const handleLanguage = async e => {
    e.preventDefault();
    const target = e.currentTarget;
    esRef.current.classList.remove("_fromLeft");
    enRef.current.classList.remove("_fromRight");
    esRef.current.classList.add("_toLeft");
    enRef.current.classList.add("_toRight");
    setTimeout(() => { 
      setLang(target.id);
      setLocale(locales[target.id])
    }, 1200);
    console.log(target.id)
  }

  const LanguageSelect = () => {   
    return (
      <div className="abs h100 w100 t400 flex flexCh wrap evenly centerY">
        <button id="ES" ref={esRef} onClick={handleLanguage} className="h-fit no-bg pill _fromLeft">
          <Spain size={bubbleSize} />
        </button>
        <button id="EN" ref={enRef} onClick={handleLanguage} className="h-fit no-bg pill _fromRight">
          <Britain size={bubbleSize} />
        </button>
      </div>
    )
  }

  const Greet = () => {
    return (
      <div className={`abs h100 w100 t400 flex col evenly centerY _fadeIn ${primaryText}`}>
        <h1 className="fs4">{locale.greet.title}</h1>
        <h3>{locale.greet.text}</h3>
      </div>
    )
  }

  return (
    <div ref={bgRef} className={`abs h100 w100 t400 flex flexCh wrap evenly centerY ${primaryBg}`}>
      <button id="light" ref={sunRef} onClick={handleTheme} className="h-fit no-bg pill bigShadow _fromLeft">
        <Sun size={bubbleSize} lightHex={lightHex} darkHex={darkHex} />
      </button>
      <button id="dark" ref={moonRef} onClick={handleTheme} className="h-fit no-bg pill bigShine _fromRight">
        <Moon size={bubbleSize} lightHex={lightHex} darkHex={darkHex} />
      </button>
      {lang === "..." && <LanguageSelect />}
      {["EN","ES"].includes(lang) && <Greet />}
    </div>
  );
}

export default App;
