import { createContext, useContext } from "react";

export const PictureContext = createContext<[string[], (pictures: string[]) => void]>([[], () => {}]);

export const usePictures = () => useContext(PictureContext);