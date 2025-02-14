import React = require('react');
import {render} from '@testing-library/react';
import '../../src/themes/default';
import {render as amisRender} from '../../src/index';
import {makeEnv} from '../helper';

test('Renderer:json', () => {
  const {container} = render(
    amisRender(
      {
        type: 'page',
        body: {
          type: 'json',
          value: {
            a: 'a',
            b: 'b',
            c: {
              d: 'd'
            }
          }
        }
      },
      {},
      makeEnv({})
    )
  );

  expect(container).toMatchSnapshot();
});
