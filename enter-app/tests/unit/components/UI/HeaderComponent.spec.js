'use strict';

import { mount, RouterLinkStub } from '@vue/test-utils';
import HeaderComponent from '@/components/UI/HeaderComponent.vue';

describe('HelloWorld.vue', () => {
  const headerLinks = [
    {
      link: '/',
      text: 'Home',
    },
    {
      link: '/list',
      text: 'List',
    },
  ];
  const $route = {
    path: '/list'
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(HeaderComponent, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
      global: {
        mocks: {
          $route
        },
      },
      data() {
        return {
          headerLinks,
        };
      },
    });
  });

  test('it renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('it should contain inner links', () => {
    const links = wrapper.findAll('router-link')

    expect(links.length).toBe(2);
    expect(links[0].attributes('to')).toEqual(headerLinks[0].link);
    expect(links[1].attributes('to')).toEqual(headerLinks[1].link);
  });
});
