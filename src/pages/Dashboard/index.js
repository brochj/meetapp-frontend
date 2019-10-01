import React from 'react';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';
import { Container, Content, ContentItem, Date } from './styles';

import Button from '~/components/Button';

const meetups = [
  {
    title: 'Meetapp de react native',
    past: false,
    date: '12 de Dezembro, às 20h',
  },
  {
    title: 'Meetapp de react native',
    past: false,
    date: '31 de Outubro, às 12h',
  },
  {
    title: 'Meetapp de react native',
    past: true,
    date: '24 de Junho, às 20h',
  },
  {
    title: 'Meetapp de react native',
    past: true,
    date: '24 de Junho, às 20h',
  },
];

export default function Dashboard() {
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Button>
          <>
            <MdAddCircleOutline />
            Novo Meetup
          </>
        </Button>
      </header>

      <Content>
        {meetups.map(meetup => (
          <ContentItem>
            <strong>{meetup.title}</strong>

            <Date>
              <span>{meetup.date}</span>
              <MdChevronRight />
            </Date>
          </ContentItem>
        ))}
      </Content>
    </Container>
  );
}
