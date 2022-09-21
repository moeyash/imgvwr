import { Button, ButtonProps, Input, InputProps } from "@chakra-ui/react";
import { useState } from "react";

interface MorphButtonProps {
  children: React.ReactNode;

  button?: ButtonProps;
  input?: InputProps;
  shared: ButtonProps & InputProps;

  clearOnEnter?: boolean;
  keepTextOnEsc?: boolean;

  onEnterKey?: (text: string) => void;
}

export const MorphButton: React.FC<MorphButtonProps> = ({ children, shared, button, input, clearOnEnter, keepTextOnEsc, onEnterKey }) => {
  const [isInput, setInput] = useState(false);
  const [text, setText] = useState("");

  return (
    isInput ?

      <Input
        {...shared}
        {...input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={e => {
          if (e.key == "Escape") {
            setInput(false);
            !keepTextOnEsc && setText("");
          };

          if (e.key == "Enter") {
            onEnterKey && onEnterKey(text);
            clearOnEnter && setText("");
          }
        }}
      /> :

      <Button
        {...shared}
        {...button}
        onClick={() => setInput(true)}>
        {children}
      </Button>
  )
}