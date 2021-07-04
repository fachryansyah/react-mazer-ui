import React from "react";
import Badge from "./Badge";

export default {
    title: 'Example/Badge',
    component: Badge,
    argTypes: {

    }
};

const Template = (args) => <Badge {...args} />;

export const BadgePrimary = Template.bind({});
BadgePrimary.args = {
    label: "Primary",
    status: "primary"
};

export const BadgeSecondary = Template.bind({});
BadgeSecondary.args = {
    label: "Secondary",
    status: "secondary"
};

export const BadgeDanger = Template.bind({});
BadgeDanger.args = {
    label: "Danger",
    status: "danger"
};

export const BadgeWarning = Template.bind({});
BadgeWarning.args = {
    label: "Warning",
    status: "warning"
};

export const BadgeInfo = Template.bind({});
BadgeInfo.args = {
    label: "Info",
    status: "info"
};

export const BadgeDark = Template.bind({});
BadgeDark.args = {
    label: "Dark",
    status: "dark"
};

// light
export const BadgePrimaryLight = Template.bind({});
BadgePrimaryLight.args = {
    label: "Primary",
    status: "primary",
    light: true
};

export const BadgeSecondaryLight = Template.bind({});
BadgeSecondaryLight.args = {
    label: "Secondary",
    status: "secondary",
    light: true
};

export const BadgeDangerLight = Template.bind({});
BadgeDangerLight.args = {
    label: "Danger",
    status: "danger",
    light: true
};

export const BadgeWarningLight = Template.bind({});
BadgeWarningLight.args = {
    label: "Warning",
    status: "warning",
    light: true
};

export const BadgeInfoLight = Template.bind({});
BadgeInfoLight.args = {
    label: "Info",
    status: "info",
    light: true
};