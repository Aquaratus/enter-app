'use strict';

import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  let wrapper;
  const homeLabelStr = 'mockHomeLabel';

  beforeEach(() => {
    wrapper = mount(Home, {
        global: {
            provide: {
                homeLabel: homeLabelStr,
            },
        },
    });
  });

  test('it renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('it renders injected text', () => {
    expect(wrapper.get('h1').text()).toBe(homeLabelStr);
  });

  test('it updates model of InputComponent', async () => {
    const inputComponent = wrapper.findComponent('#input-component');
    const str = 't';

    await inputComponent.setValue(str);

    expect(inputComponent.emitted('update:modelValue')[0][0]).toEqual(str);
  });
});
