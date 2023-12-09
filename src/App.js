import "./App.css";
import CodebookTerminal from "codebook-terminal";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import React, { useState, useEffect } from "react";
import git from "./asset/git.png";
import npm from "./asset/images (2).png";
function useMediaQuery(query) {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (event) => setMatches(event.matches);

    mediaQuery.addListener(handler);
    setMatches(mediaQuery.matches);

    return () => {
      mediaQuery.removeListener(handler);
    };
  }, [query]);

  return matches;
}

function App() {
  const userCommands = {
    about: {
      description: "To know about us ...",
      fn: () =>
        "<<<<<<<<<<<<<<<<<<this is online code editor for developer and creater>>>>>>>>>>>>>>>>>>>>>>\n<<<<<<<<<<<<<<<<.............................................................>>>>>>>>>>>>>>>>",
    },
  };

  const setoutpout = (event) => {
    setOutput(event.target.value);
  };

  const isMobile = useMediaQuery("(max-width: 767px)");
  const [progress, setProgress] = useState(0);
  const fontSize = isMobile ? 14 : 24;
  const [input, setInput] = useState();
  const [output, setOutput] = useState();
  const [out, setout] = useState();

  return (
    <div className="App">
      <div>
        <h1 className="main-heading">Codebook-terminal</h1>
        <div className="desc">
          <h1 className="des">
            🌈Welcome to the Colorful World of CodeBook Terminal!{" "}
          </h1>
          <div>
            <div>
              Absolutely, here's a colorful and vibrant description of CodeBook
              Terminal, packed with emojis and spanning around 800 words:
              Welcome to the Colorful World of CodeBook Terminal! Dive into a
              mesmerizing coding adventure with CodeBook Terminal – where
              functionality meets flair in the most captivating way possible!
              This spectacular terminal component isn't just a tool; it's a
              canvas for your imagination, a playground for your code, and a
              symphony of colors that transforms your coding experience into an
              immersive journey through the vibrant landscapes of creativity!
            </div>
            <div>
              <h1>Key Features</h1>
              <h2 className="list">Sleek Design: </h2> A visually alluring
              terminal that makes coding an art form, captivating your senses
              and inspiring innovation with every line of code.
              <h2 className="list">Customizable Themes: </h2> Tailor the
              appearance to match your coding personality! Dive into an array of
              themes, each bursting with its own unique palette of colors,
              inviting you to paint your code with a touch of individuality.
              <h2 className="list">User-Friendly Interface: </h2> Whether you're
              a seasoned developer or just stepping into the world of coding,
              our terminal simplifies the complex and makes coding an intuitive
              and stylish affair for everyone.
              <h2 className="list">Dynamic Commands: </h2> Explore a treasure
              trove of commands, each shining with its distinct personality,
              empowering you to craft your code like a virtuoso artist.
            </div>
          </div>
        </div>
        <div>
          <h1 className="title"> User command mode </h1>
          <div className="demo">
            <div className="editor">
              <SyntaxHighlighter
                language="javascript"
                style={materialDark}
                className="high"
                codeTagProps={{ style: { fontSize } }}
              >
                {` <div className="codebook">
  <CodebookTerminal
    userCommands={userCommands}
    welcomeMessage={"type "about" to see the user command "}
  />
</div>`}
              </SyntaxHighlighter>
            </div>
            <div className="codebook">
              <CodebookTerminal
                userCommands={userCommands}
                welcomeMessage={`type "about" to see the user command `}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="title"> User progress mode </h1>
          <div className="progressarea">
            <div className="demo">
              <div className="editor">
                <SyntaxHighlighter
                  language="javascript"
                  style={materialDark}
                  className="high"
                  codeTagProps={{ style: { fontSize } }}
                >
                  {` <div className="codebook">
   <CodebookTerminal
      mode="progressBar"
      progres={progress}
      welcomeMessage={"Press the below button to increase the progress bar "}
     />
  </div>`}
                </SyntaxHighlighter>
              </div>
              <div className="codebook">
                <CodebookTerminal
                  mode="progressBar"
                  progres={progress}
                  welcomeMessage={`Press the below button to increase the progress bar`}
                />
              </div>
            </div>
            <div>
              <button
                className="progressbutton"
                onClick={() => {
                  setProgress(progress + 5);
                  if (progress > 100) {
                    setProgress(0);
                  }
                }}
              >
                Increasse Progress
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className="title"> User command mode </h1>
          <div className="progressarea">
            <div className="demo">
              <div className="editor">
                <SyntaxHighlighter
                  language="javascript"
                  style={materialDark}
                  className="high"
                  codeTagProps={{ style: { fontSize } }}
                >
                  {` <CodebookTerminal
                mode="command"
                userOutput={out}
                setUserInput={setInput}
                progres={progress}
                welcomeMessage={ "Enter any text in terminal and go for also enter any text in input areat and press the button "}
              />`}
                </SyntaxHighlighter>
              </div>
              <div className="codebook">
                <CodebookTerminal
                  mode="command"
                  userOutput={out}
                  setUserInput={setInput}
                  progres={progress}
                  welcomeMessage={`Enter any text in terminal and go for also enter any text in input areat and press the button  `}
                />
              </div>
            </div>
            <div className="inputa">
              <input
                onChange={setoutpout}
                className="textinput"
                placeholder="Enter any text"
              />
              <button
                onClick={() => {
                  setout(output);
                }}
                className="button"
              >
                Set output
              </button>
              <input value={input} className="textoutput" readOnly />
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="name">
            <p> Codebook-terminal</p>
            <p>Terminal emulater </p>
          </div>
          <div className="follow">
            Follow us on...
          </div>
          <div className="images">
            
            <img
              src={npm}
              alt="git logo"
              className="gitlogo"
              onClick={() => {
                window.open("https://www.npmjs.com/package/codebook-terminal");
              }}
            />
            <img
              
              src={git}
              alt="git logo"
              className="npmlogo"
              onClick={() => {
                window.open(
                  "https://github.com/adhithyankrishna/codebook-terminal"
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
