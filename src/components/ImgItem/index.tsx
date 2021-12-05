import * as Styled from './styles';

interface ImgItemProps {
  isActive: boolean;
  src: string;
  alt: string;
  onClick: () => void;
}

export function ImgItem({ isActive, src, alt, onClick }: ImgItemProps) {
  return (
    <Styled.Container isActive={isActive} onClick={onClick}>
      <Styled.Img
        style={{ 'backgroundImage': `url(${src})` }}
        aria-label={alt}
      />
    </Styled.Container>
  );
}
