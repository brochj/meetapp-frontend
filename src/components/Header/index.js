import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '~/components/Logo';
import Button from '~/components/Button';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <Logo size={40} />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <Button>Sair</Button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
