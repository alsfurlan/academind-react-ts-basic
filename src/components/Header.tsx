import { type FC, type ReactNode } from 'react';

type Image = {
  src: string;
  alt: string;
};

type HeaderProps = {
  image: Image;
  children: ReactNode;
};

const Header: FC<HeaderProps> = ({ image, children }) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
