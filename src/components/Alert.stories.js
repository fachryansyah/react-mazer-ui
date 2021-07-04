import React from "react";
import Alert from "./Alert";

export default {
    title: 'Example/Alert',
    component: Alert,
    argTypes: {

    }
};

const Template = (args) => <Alert {...args} />;

export const AlertPrimary = Template.bind({});
AlertPrimary.args = {
    content: "This is primary alert.",
    status: "primary"
};

export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
    content: "This is success alert.",
    status: "success"
};

export const AlertWarning = Template.bind({});
AlertWarning.args = {
    content: "This is warning alert.",
    status: "warning"
};

export const AlertDanger = Template.bind({});
AlertDanger.args = {
    content: "This is danger alert.",
    status: "danger"
};

export const AlertDark = Template.bind({});
AlertDark.args = {
    content: "This is dark alert.",
    status: "dark"
};

export const AlertSecondary = Template.bind({});
AlertSecondary.args = {
    content: "This is secondary alert.",
    status: "secondary"
};

export const AlertLight = Template.bind({});
AlertLight.args = {
    content: "This is light alert.",
    status: "light"
};

export const AlertInfo = Template.bind({});
AlertInfo.args = {
    content: "This is info alert.",
    status: "info"
};

// ---

export const AlertLightPrimary = Template.bind({});
AlertLightPrimary.args = {
    content: "This is primary alert.",
    status: "primary",
    light: true
};

export const AlertLightSuccess = Template.bind({});
AlertLightSuccess.args = {
    content: "This is success alert.",
    status: "success",
    light: true
};

export const AlertLightWarning = Template.bind({});
AlertLightWarning.args = {
    content: "This is warning alert.",
    status: "warning",
    light: true
};

export const AlertLightDanger = Template.bind({});
AlertLightDanger.args = {
    content: "This is danger alert.",
    status: "danger",
    light: true
};

export const AlertLightDark = Template.bind({});
AlertLightDark.args = {
    content: "This is dark alert.",
    status: "dark",
    light: true
};

export const AlertLightSecondary = Template.bind({});
AlertLightSecondary.args = {
    content: "This is secondary alert.",
    status: "secondary",
    light: true
};

export const AlertLightLight = Template.bind({});
AlertLightLight.args = {
    content: "This is light alert.",
    status: "light",
    light: true
};

export const AlertLightInfo = Template.bind({});
AlertLightInfo.args = {
    content: "This is info alert.",
    status: "info",
    light: true
};

export const AlertHeading = Template.bind({});
AlertHeading.args = {
    heading: "Primary",
    content: "This is primary alert.",
    status: "primary"
};

export const AlertDismissable = Template.bind({});
AlertDismissable.args = {
    content: "This is primary alert.",
    status: "primary",
    dismissable: true
};