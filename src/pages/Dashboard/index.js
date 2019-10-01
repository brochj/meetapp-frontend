import React, { useEffect, useState, useMemo } from 'react';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { useSelector, useDispatch } from 'react-redux';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';

import Button from '~/components/Button';
import { Container, Content, ContentItem, Date } from './styles';

import { getMeetupsRequest } from '~/store/modules/meetup/actions';

// const meetups = [
//   {
//     title: 'Meetapp de react native',
//     past: false,
//     date: '2019-02-13T00:00:00.000Z',
//   },
//   {
//     title: 'Meetapp de react native',
//     past: false,
//     date: '2019-04-13T03:00:00.000Z',
//   },
//   {
//     title: 'Meetapp de react native',
//     past: true,
//     date: '2019-12-13T13:12:00.000Z',
//   },
//   {
//     title: 'Meetapp de react native',
//     past: true,
//     date: '2019-12-13T22:00:00.000Z',
//   },
// ];

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);
  // const [loading, setLoading] = useSelector(state => state.meetup.loading);

  useEffect(() => {
    dispatch(getMeetupsRequest());
  }, []); // eslint-disable-line

  const data = useMemo(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formattedMeetups = meetups.map(meetup => {
      const timeZonedDate = utcToZonedTime(meetup.date, timezone);

      return {
        ...meetup,
        timezonedDate: format(timeZonedDate, "d 'de' MMMM ', às ' HH'h'", {
          locale: pt,
        }),
      };
    });
    console.tron.log(formattedMeetups);
    return formattedMeetups;
  }, [meetups]);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Button>
          <MdAddCircleOutline />
          Novo Meetup
        </Button>
      </header>

      <Content>
        {data.map(meetup => (
          <ContentItem key={String(meetup.id)}>
            <strong>{meetup.title}</strong>

            <Date>
              <span>{meetup.timezonedDate}</span>
              <MdChevronRight />
            </Date>
          </ContentItem>
        ))}
      </Content>
    </Container>
  );
}
