import { createElement, ReactElement } from 'react';
import { map } from 'lodash';
import { MappletsComponentDescriptor } from '@mapples/mapplets-types';

import { RendererComponentSet } from './constants';
import { RendererComponentType } from './types';

export function render(
  component: MappletsComponentDescriptor<RendererComponentType>
): ReactElement {
  return createElement(
    RendererComponentSet[component.type],
    component.props,
    map(component.children, render)
  );
}

export default render;
