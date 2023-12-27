import React, {useEffect, useRef, useState} from "react";

interface props {
    config: { name: string; computerName: string };
}

/** Body of the Ubuntu terminal — where the commands are executed */
export const Body = (props: props) => {
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

      if (lowerCasedInput === 'clear') {
        setEnteredInputs([]);
      } else if (lowerCasedInput === 'help') {
        // Provide help information or execute specific logic for the 'help' command
        setEnteredInputs([...enteredInputs, 'Hello there. You can use following commands: echo; clear; help; ls; pwd; whoami; date; cat; cd; mkdir; touch; rm; rmdir; mv; cp; sudo; apt-get; exit;']);
      } else if (lowerCasedInput.startsWith('echo ')) {
        const echoedText = terminalInput.substring(5);
        setEnteredInputs([...enteredInputs, echoedText]);
      } else if (lowerCasedInput === 'ls') {
        // Simulate 'ls' command
        setEnteredInputs([...enteredInputs, 'home.tsx  about.tsx  projects.tsx  contact.tsx']);
      } else if (lowerCasedInput === 'pwd') {
        // Simulate 'pwd' command
        setEnteredInputs([...enteredInputs, '/home/lazare']);
      } else if (lowerCasedInput === 'whoami') {
        // Simulate 'whoami' command
        setEnteredInputs([...enteredInputs, 'lazare']);
      } else if (lowerCasedInput === 'date') {
        // Simulate 'date' command
        setEnteredInputs([...enteredInputs, new Date().toString()]);
      } else if (lowerCasedInput.startsWith('cat ')) {
        // Simulate 'cat' command
        const fileName = terminalInput.substring(4);
        setEnteredInputs([...enteredInputs, `Content of ${fileName}...`]);
      } else if (lowerCasedInput.startsWith('cd ')) {
        // Simulate 'cd' command
        const directory = terminalInput.substring(3);
        // Handle changing directory (you may need to track the current directory state)
        setEnteredInputs([...enteredInputs, `Change directory to ${directory}`]);
      } else if (lowerCasedInput.startsWith('mkdir ')) {
        const folderName = terminalInput.substring(6);
        setEnteredInputs([...enteredInputs, `Create folder: ${folderName}`]);
      } else if (lowerCasedInput.startsWith('touch ')) {
        const fileName = terminalInput.substring(6);
        setEnteredInputs([...enteredInputs, `Create file: ${fileName}`]);
      } else if (lowerCasedInput.startsWith('rm ')) {
        const fileName = terminalInput.substring(3);
        setEnteredInputs([...enteredInputs, `Remove file: ${fileName}`]);
      } else if (lowerCasedInput.startsWith('rmdir ')) {
        const folderName = terminalInput.substring(6);
        setEnteredInputs([...enteredInputs, `Remove folder: ${folderName}`]);
      } else if (lowerCasedInput.startsWith('mv ')) {
        const [source, destination] = terminalInput.substring(3).split(' ');
        setEnteredInputs([...enteredInputs, `Move ${source} to ${destination}`]);
      } else if (lowerCasedInput.startsWith('cp ')) {
        const [source, destination] = terminalInput.substring(3).split(' ');
        setEnteredInputs([...enteredInputs, `Copy ${source} to ${destination}`]);
      } else if (lowerCasedInput.startsWith('sudo ')) {
        const command = terminalInput.substring(5);
        setEnteredInputs([...enteredInputs, `Run sudo command: ${command}`]);
      } else if (lowerCasedInput.startsWith('apt-get ')) {
        const packageCommand = terminalInput.substring(8);
        setEnteredInputs([...enteredInputs, `Run apt-get command: ${packageCommand}`]);
      } else if (lowerCasedInput === 'exit') {
        window.location.reload();
      } else {
        // Default behavior: add the input to the list
        const inputs = [...enteredInputs, terminalInput];
        setEnteredInputs(inputs);
      }

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
};
