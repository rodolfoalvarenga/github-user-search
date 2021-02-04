import Button from 'core/components/Button';
import React from 'react';
import './styles.scss';

const GitCard = () => {
  return (
    <div className="gitcard-container">
      <div className="gitcard-content">
        <div className="gitcard-image-btn">
          <div className="gitcard-image"></div>
          <div className="btn-position">
            <Button text="Ver perfil" />
          </div>
        </div>
        <div className="gitcard-info-container">
          <div className="gitcard-items-info">
            <div className="item-info">Repositórios públicos: </div>
            <div className="item-info">Seguidores: </div>
            <div className="item-info">Seguindo: </div>
          </div>
          <div className="gitcard-user-info">
            <h6 className="gitcard-text-title">Informações</h6>
            <div className="user-info">Empresa:</div>
            <div className="user-info">Website/Blog:</div>
            <div className="user-info">Localidade:</div>
            <div className="user-info">Membro desde:</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitCard;
