// @flow

import React, {useEffect, useRef, useState} from "react";

interface props {
    config: { name: string; computerName: string };
}

/** Body of the Ubuntu terminal — where the commands are executed */
export const Body = React.memo((props: props) => {
  const [enteredInputs, setEnteredInputs] = useState<string[]>([]);
  const [terminalInput, setInput] = useState<string>('Type "help" for more info.');
  const inputRef = useRef<any>();
  const { config } = props;

  /** Handles input being submitted */

  /** Handles input changes in ther terminal input line */
  const onInputChange = (event: any) => {
    const value = event.target.value;
    setInput(value);
  };

  useEffect(() => {

    const submitInput = () => {
      const lowerCasedInput = terminalInput.trim().toLowerCase();

      const commandHandlers: Record<string, () => void> = {
        'clear': () => setEnteredInputs([]),
        'help': () => setEnteredInputs([...enteredInputs, 'Hello there. You can use following commands: echo; clear; help; ls; pwd; whoami; date; cat; cd; mkdir; touch; rm; rmdir; mv; cp; sudo; apt-get; exit;']),
        'ls': () => setEnteredInputs([...enteredInputs, 'home.tsx  about.tsx  projects.tsx  contact.tsx']),
        'pwd': () => setEnteredInputs([...enteredInputs, '/home/lazare']),
        'whoami': () => setEnteredInputs([...enteredInputs, 'lazare']),
        'date': () => setEnteredInputs([...enteredInputs, new Date().toString()]),
        'echo': () => {
          const echoedText = terminalInput.substring(5);
          setEnteredInputs([...enteredInputs, echoedText]);
        },
        'cat': () => {
          const fileName = terminalInput.substring(4);
          setEnteredInputs([...enteredInputs, `Content of ${fileName}...`]);
        },
        'cd': () => {
          const directory = terminalInput.substring(3);
          setEnteredInputs([...enteredInputs, `Change directory to ${directory}`]);
        },
        'mkdir': () => {
          const folderName = terminalInput.substring(6);
          setEnteredInputs([...enteredInputs, `Create folder: ${folderName}`]);
        },
        'touch': () => {
          const fileName = terminalInput.substring(6);
          setEnteredInputs([...enteredInputs, `Create file: ${fileName}`]);
        },
        'rm': () => {
          const fileName = terminalInput.substring(3);
          setEnteredInputs([...enteredInputs, `Remove file: ${fileName}`]);
        },
        'rmdir': () => {
          const folderName = terminalInput.substring(6);
          setEnteredInputs([...enteredInputs, `Remove folder: ${folderName}`]);
        },
        'mv': () => {
          const [source, destination] = terminalInput.substring(3).split(' ');
          setEnteredInputs([...enteredInputs, `Move ${source} to ${destination}`]);
        },
        'cp': () => {
          const [source, destination] = terminalInput.substring(3).split(' ');
          setEnteredInputs([...enteredInputs, `Copy ${source} to ${destination}`]);
        },
        'sudo': () => {
          const command = terminalInput.substring(5);
          setEnteredInputs([...enteredInputs, `Run sudo command: ${command}`]);
        },
        'apt-get': () => {
          const packageCommand = terminalInput.substring(8);
          setEnteredInputs([...enteredInputs, `Run apt-get command: ${packageCommand}`]);
        },
        'exit': () => window.location.reload(),
        'default': () => {
          const inputs = [...enteredInputs, terminalInput];
          setEnteredInputs(inputs);
        },
      };

      const handleCommand = commandHandlers[lowerCasedInput] || commandHandlers['default'];
      handleCommand();

      setInput("");
    };

    /** Listens for the enter key being pressed on main keyboard/numpad */
    const enterKeyListener = (event: any) => {
      if (event.code === "NumpadEnter" || event.code === "Enter" || event.keyCode === 13) {
        submitInput();
      }
    };

    // Registers the enter key listener on mount
    window.addEventListener("keydown", enterKeyListener);

    return () => {
      // Unregisters the enter key listener on unmount
      window.removeEventListener("keydown", enterKeyListener);
    };
  }, [terminalInput, enteredInputs]);

  /** Genereates the `user@computer:~$` line seen at the beginning of entered command inputs */
  const generateLine = () => {
    const { name, computerName } = config;
    return (
      <span className="command__green">
        {`${name}@${computerName}`}
        <span className="command__white">:</span>
        <span className="command__blue">~</span>
        <span className="command__white">$</span>{" "}
      </span>
    );
  };

  return (
    <div className="ubuntu__body" onClick={() => inputRef.current?.focus()}>
      {/** Renders the list of previously entered inputs */}
      {enteredInputs.map((input, index) => {
        return (
          <div key={index}>
            {generateLine()}
            {input}
          </div>
        );
      })}

      {/** Renders the command input line  */}
      <div className="input">
        {generateLine()}
        <input
            id="terminal-input"
            className="terminal-input"
            type="text"
            onChange={onInputChange}
            spellCheck={false}
            value={terminalInput}
            ref={inputRef}
        />
      </div>
    </div>
  );
});
