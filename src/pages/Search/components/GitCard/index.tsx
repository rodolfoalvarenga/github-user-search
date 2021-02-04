import Button from 'core/components/Button';
import { Github } from 'core/types/Github';
import { makeRequest } from 'core/utils/request';
import React, { useEffect, useState } from 'react';
import ImageLoader from '../Loaders/ImageLoader';
import InfoLoader from '../Loaders/InfoLoader';
import './styles.scss';

type Props = {
  gitUserName: string;
};

const GitCard = ({ gitUserName }: Props) => {
  const [user, setUser] = useState<Github>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    makeRequest({ url: `/${gitUserName}` })
      .then((response) => setUser(response.data))
      .finally(() => setIsLoading(false));
  }, [gitUserName]);

  return (
    <div className="gitcard-container">
      <div className="gitcard-content">
        {isLoading ? (
          <ImageLoader />
        ) : (
          <div className="gitcard-image-btn">
            <div className="gitcard-image">
              <img src={user?.avatar_url} alt={user?.name} />
            </div>
            <div className="btn-position">
              <a href={user?.html_url} target="_blank" rel="noreferrer">
                <Button text="Ver perfil" />
              </a>
            </div>
          </div>
        )}
        {isLoading ? (
          <InfoLoader />
        ) : (
          <div className="gitcard-info-container">
            <div className="gitcard-items-info">
              <div className="item-info">
                Repositórios públicos: {user?.public_repos}
              </div>
              <div className="item-info">Seguidores: {user?.followers}</div>
              <div className="item-info">Seguindo: {user?.following}</div>
            </div>
            <div className="gitcard-user-info">
              <h6 className="gitcard-text-title">Informações</h6>
              <div className="user-info">
                Empresa: <span className="text-info">{user?.company}</span>
              </div>
              <div className="user-info">
                Website/Blog: <span className="text-info">{user?.blog}</span>
              </div>
              <div className="user-info">
                Localidade: <span className="text-info">{user?.location}</span>
              </div>
              <div className="user-info">
                Membro desde:{' '}
                <span className="text-info">{user?.created_at}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitCard;
