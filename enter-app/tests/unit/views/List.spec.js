'use strict';

import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import List from '@/views/List.vue';

describe('List.vue', () => {
  let wrapper;
  const posts = [
    {
      id: 0,
      title: 'post0',
      body: 'post 0 body',
    },
    {
      id: 1,
      title: 'post1',
      body: 'post 1 body',
    },
  ];
  const actions = {
    getPosts: jest.fn(),
  };
  const store = createStore({
    modules: {
      listStore: {
        state: {
          posts,
        },
        actions,
        namespaced: true,
      },
    },
  });

  beforeEach(() => {
    wrapper = mount(List, {
      global:{
        provide: {
          store,
        },
      },
    });
  });

  test('it renders', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  test('it calls getting post from the namespaced store', () => {
    expect(actions.getPosts).toHaveBeenCalled();
  });

  test ('it renders posts from the store', () => {
    expect(wrapper.html()).toContain(posts[0].body);
    expect(wrapper.html()).toContain(posts[1].body);
  });
});
