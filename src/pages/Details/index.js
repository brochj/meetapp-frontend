import React from 'react';
import { MdDeleteForever, MdEdit, MdPlace, MdDateRange } from 'react-icons/md';
import {
  Container,
  Content,
  Description,
  Banner,
  Info,
  Footer,
} from './styles';
import banner from '~/assets/banner.png';
import Button from '~/components/Button';

export default function Details({ match, location }) {
  const meetup = location.state.state;
  console.tron.log(location.state);

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <div>
          <Button background="#4DBAF9">
            <MdEdit />
            Editar
          </Button>
          <Button>
            <MdDeleteForever />
            Cancelar
          </Button>
        </div>
      </header>

      <Content>
        <Banner src={banner} />
        <Description>
          <p>{meetup.description}</p>
        </Description>
        <Footer>
          <Info>
            <MdDateRange />
            <span>{meetup.timezonedDate}</span>
          </Info>
          <Info>
            <MdPlace />
            <span>{meetup.location}</span>
          </Info>
        </Footer>
      </Content>
    </Container>
  );
}
