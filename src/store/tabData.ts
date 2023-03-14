import { readable } from 'svelte/store';

const contents = [
  {
    id: 1,
    title: 'tab1',
    content: [
      {
        id: 1,
        title: 'item1',
      },
      {
        id: 2,
        title: 'item2',
      },
      {
        id: 3,
        title: 'item3',
      },
    ],
  },
  {
    id: 2,
    title: 'tab2',
    content: [
      {
        id: 1,
        title: 'item1',
      },
      {
        id: 2,
        title: 'item2',
      },
      {
        id: 3,
        title: 'item3',
      },
    ],
  },
  {
    id: 3,
    title: 'tab3',
    content: [
      {
        id: 1,
        title: 'item1',
      },
      {
        id: 2,
        title: 'item2',
      },
      {
        id: 3,
        title: 'item3',
      },
    ],
  },
];

const tabData = readable(contents);
export { tabData };
