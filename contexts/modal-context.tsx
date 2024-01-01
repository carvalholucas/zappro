import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface LinkProps {
  anchor: string;
  slug: string;
}

interface ModalProps {
  isOpen: boolean;
  link: LinkProps;
  setLink: Dispatch<SetStateAction<LinkProps>>;
  toggleModal: () => void;
}

interface ContextProviderProps {
  children?: ReactNode;
}

const initialStateLink = {
  anchor: "",
  slug: "",
};

const ModalContext = createContext<ModalProps>({
  isOpen: false,
  link: initialStateLink,
  setLink: () => {},
  toggleModal: () => {},
});

export const ModalProvider = ({ children }: ContextProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [link, setLink] = useState<LinkProps>(initialStateLink);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const state = {
    isOpen,
    link,
    setLink,
    toggleModal: toggleModal,
  };

  return (
    <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
