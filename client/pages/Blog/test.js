import React from 'react';
import Header from 'components/Header';
import List from 'components/List/List';

const listItems = [
  { title: 'four' },
  { title: 'five' },
  { title: 'six' },
  { title: 'seven' }
];

export default () => (
    <List items={listItems} />
);
