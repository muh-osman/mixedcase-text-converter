import { useState } from "react";
import "./Main.scss";
import { MdOutlineDownloadDone } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { BsFillSendPlusFill } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

export default function Main() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(
    "lOrEm iPsUm dOlOr sIt aMeT CoNsEcTeTuR AdIpIsIcInG ElIt. NaM ExErCiTaTiOnEm, FaCeRe sIt qUiBuSdAm sOlUtA Ad tEmPoRa sEd aLiAs aSpErIoReS EiUs sEqUi dElEnItI RePeLlEnDuS QuOd qUiS. nEmO, iLlO InCiDuNt? SaPiEnTe, QuIs!"
  );
  const [buttonIcon, setButtonIcon] = useState(true);

  const convertToMixedCase = (value) => {
    const words = value.split("");

    const mixedCaseWords = words.map((word, index) => {
      if (index % 2 === 0) {
        return word.toLowerCase();
      } else {
        return word.toUpperCase();
      }
    });
    const mixedCaseString = mixedCaseWords.join("");
    setOutput(mixedCaseString);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    convertToMixedCase(value);
    setButtonIcon(true);
  };

  return (
    <main>
      <div className="head">
        <div><h1>mIxEdCaSe tExT CoNvErTeR!</h1></div>
        <div><a href="#"><AiOutlineGithub /> GitHub</a></div>
      </div>
      

      <div className="box">
        <h2>
          {output}
          <button
            onClick={() => {
              navigator.clipboard.writeText(output);
              setButtonIcon(false);
            }}
          >
            {buttonIcon ? <MdContentCopy /> : <MdOutlineDownloadDone />}
          </button>
        </h2>

        <div className="input-box">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter Your Text Here..."
          />
          <div>
            <BsFillSendPlusFill />
          </div>
        </div>
      </div>
    </main>
  );
}
