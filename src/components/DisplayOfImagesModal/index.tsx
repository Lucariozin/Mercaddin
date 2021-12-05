import * as Styled from './styles';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Modal from 'react-modal';

import { IoMdClose } from 'react-icons/io';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { AllImagesContainer } from '../AllImagesContainer';

Modal.setAppElement('#__next');

interface DisplayOfImagesModalProps {
  isOpen: boolean;
  closeModal: () => void;
  imgArray: string[];
  currentImgSrc: string;
  setCurrentImgSrc: Dispatch<SetStateAction<string>>;
}

export function DisplayOfImagesModal({ isOpen, closeModal, imgArray, currentImgSrc, setCurrentImgSrc }: DisplayOfImagesModalProps) {
  const [indexOfCurrentImg, setIndexOfCurrentImg] = useState(0);

  useEffect(() => {
    imgArray.forEach((imgSrc, index) => {
      if (imgSrc === currentImgSrc) setIndexOfCurrentImg(index);
    });
    
  }, [imgArray, currentImgSrc]);

  function handleSetCurrentImgSrc(src: string) {
    if (currentImgSrc === src) return;

    setCurrentImgSrc(src);
  }

  function handleDisplayNextImg() {
    if (indexOfCurrentImg + 1 >= imgArray.length) {
      return setCurrentImgSrc(imgArray[0]);
    };

    const nextImg = imgArray[indexOfCurrentImg + 1];
    setCurrentImgSrc(nextImg);
  }

  function handleDisplayBackImg() {
    if (indexOfCurrentImg - 1 < 0) {
      return setCurrentImgSrc(imgArray[imgArray.length - 1]);
    };

    const backImg = imgArray[indexOfCurrentImg - 1];
    setCurrentImgSrc(backImg);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="display-of-images-modal-overlay"
      className="display-of-images-modal-content"
    >
      <Styled.CurrentImgContainer>
        <Styled.CloseButton type="button" onClick={closeModal}>
          <IoMdClose size="25" />
        </Styled.CloseButton>

        <Styled.BackImg type="button" onClick={handleDisplayBackImg}>
          <MdKeyboardArrowLeft size="40" />
        </Styled.BackImg>

        <Styled.CurrentImg
          style={{ 'backgroundImage': `url(${currentImgSrc})` }}
          aria-label="Imagem do produto"
        />

        <Styled.NextImg type="button" onClick={handleDisplayNextImg}>
          <MdKeyboardArrowRight size="40" />
        </Styled.NextImg>
      </Styled.CurrentImgContainer>


      <AllImagesContainer
        imgArray={imgArray}
        currentImgSrc={currentImgSrc}
        handleSetCurrentImgSrc={handleSetCurrentImgSrc}
      />
    </Modal>
  );
}
