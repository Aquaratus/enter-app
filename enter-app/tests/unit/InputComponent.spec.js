'use strict';

import { mount } from '@vue/test-utils';
import InputComponent from '@/components/UI/InputComponent.vue';

describe('HelloWorld.vue', () => {
  const type = 'text';
  const val = '';
  let wrapper;

  beforeEach(() => {
    wrapper = mount(InputComponent, {
      props: { type, val },
    });
  });

  test('it renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('it should emit event with its value on input', () => {
    let str = 't';
    const inputEl = wrapper.find('input');

    inputEl.trigger('input', str);
    expect(wrapper.emitted()).toHaveProperty('update:val');

    expect(wrapper.emitted().input[0][0]['0']).toEqual(str);
  });
});
