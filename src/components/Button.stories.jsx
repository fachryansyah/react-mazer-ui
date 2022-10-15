import React from 'react';

import Button from './Button';
import ButtonGroupComponent from "./ButtonGroup";
import Icon from "./Icon";

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {

    }
};

const Template = (args) => <Button {...args} />;
const ButtonGroupWrapper = (args) => <ButtonGroupComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Secondary",
    status: "secondary"
};

export const Info = Template.bind({});
Info.args = {
    label: "Info",
    status: "info"
};

export const Warning = Template.bind({});
Warning.args = {
    label: "Warning",
    status: "warning"
};

export const Danger = Template.bind({});
Danger.args = {
    label: "Danger",
    status: "danger"
};

export const Success = Template.bind({});
Success.args = {
    label: "Success",
    status: "success"
};

export const Light = Template.bind({});
Light.args = {
    label: "Light",
    status: "light"
};

export const Dark = Template.bind({});
Dark.args = {
    label: "Dark",
    status: "dark"
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
    label: "Primary Outline",
    status: "primary-outline"
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
    label: "Secondary Outline",
    status: "secondary-outline"
};

export const InfoOutline = Template.bind({});
InfoOutline.args = {
    label: "Info Outline",
    status: "info-outline"
};

export const WarningOutline = Template.bind({});
WarningOutline.args = {
    label: "Warning Outline",
    status: "warning-outline"
};

export const DangerOutline = Template.bind({});
DangerOutline.args = {
    label: "Danger Outline",
    status: "danger-outline"
};

export const SuccessOutline = Template.bind({});
SuccessOutline.args = {
    label: "Success Outline",
    status: "success-outline"
};

export const LightOutline = Template.bind({});
LightOutline.args = {
    label: "Light Outline",
    status: "light-outline"
};

export const DarkOutline = Template.bind({});
DarkOutline.args = {
    label: "Dark Outline",
    status: "dark-outline"
};

export const ButtonRounded = Template.bind({});
ButtonRounded.args = {
    label: "Button Rounded",
    isRounded: true
};

export const ButtonSmall = Template.bind({});
ButtonSmall.args = {
    label: "Button Small",
    size: "small"
};

export const ButtonNormal = Template.bind({});
ButtonNormal.args = {
    label: "Button Normal",
};

export const ButtonLarge = Template.bind({});
ButtonLarge.args = {
    label: "Button Large",
    size: "large"
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
    label: "Button Disabled",
    disabled: true
};

export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
    label: "Button Icon",
    icon: <Icon name="bi bi-alarm-fill" />
};

export const ButtonGroup = ButtonGroupWrapper.bind({});
ButtonGroup.args = {
    children: (
        <>
            <Button label="left" />
            <Button label="middle" />
            <Button label="right" />
        </>
    )
};