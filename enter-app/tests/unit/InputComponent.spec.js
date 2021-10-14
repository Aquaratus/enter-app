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

  it('it renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
