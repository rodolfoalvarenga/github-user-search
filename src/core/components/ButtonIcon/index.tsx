import React from 'react';
import './styles.scss';

type Props = {
  text: string;
};

const ButtonIcon = ({ text }: Props) => (
  <button className="btn">
    <h5>{text}</h5>
  </button>
);

export default ButtonIcon;
