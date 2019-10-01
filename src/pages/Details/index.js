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

export default function Details() {
  return (
    <Container>
      <header>
        <h1>Meetup de React Native</h1>
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
          <p>
            O Meetup de React Native é um evento que reúne a comunidade de
            desenvolvimento mobile utilizando React a fim de compartilhar
            conhecimento. Todos são convidados.
          </p>
          <p>
            Caso queira participar como palestrante do meetup envie um e-mail
            para organizacao@meetuprn.com.br.
          </p>
        </Description>
        <Footer>
          <Info>
            <MdDateRange />
            <span>24 de Junho, às 20h</span>
          </Info>
          <Info>
            <MdPlace />
            <span>Rua Guilherme Gembala, 260</span>
          </Info>
        </Footer>
      </Content>
    </Container>
  );
}
