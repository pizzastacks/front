import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {MenuList} from "./menu-list.component";

export default {
    title: 'Menu/MenuList',
    component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args: any) => <MenuList {...args}/>;

export const View = Template.bind({});
