import * as Styled from './styles';

import { ImgItem } from "../ImgItem";
import { Dispatch, SetStateAction } from 'react';

interface AllImagesContainerProps {
  imgArray: string[];
  currentImgSrc: string;
  handleSetCurrentImgSrc: Dispatch<SetStateAction<string>>
}

export function AllImagesContainer({ imgArray, currentImgSrc, handleSetCurrentImgSrc }: AllImagesContainerProps) {
  return (
    <Styled.Container>
      <ImgItem
        src={imgArray[0]}
        alt="Imagem do produto"
        isActive={currentImgSrc === imgArray[0]}
        onClick={() => handleSetCurrentImgSrc(imgArray[0])}
      />

      <ImgItem
        src={imgArray[1]}
        alt="Imagem do produto"
        isActive={currentImgSrc === imgArray[1]}
        onClick={() => handleSetCurrentImgSrc(imgArray[1])}
      />

      <ImgItem
        src={imgArray[2]}
        alt="Imagem do produto"
        isActive={currentImgSrc === imgArray[2]}
        onClick={() => handleSetCurrentImgSrc(imgArray[2])}
      />

      <ImgItem
        src={imgArray[3]}
        alt="Imagem do produto"
        isActive={currentImgSrc === imgArray[3]}
        onClick={() => handleSetCurrentImgSrc(imgArray[3])}
      />
    </Styled.Container>
  );
}
