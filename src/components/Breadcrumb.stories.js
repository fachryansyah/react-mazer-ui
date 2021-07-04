import React from "react";
import Breadcrumb from "./Breadcrumb";

export default {
    title: 'Example/Breadcrumb',
    component: Breadcrumb,
    argTypes: {

    }
};

const Template = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
    item: [
        {
            label: "Home",
            link: "/home"
        },
        {
            label: "Library",
            link: "/library"
        },
        {
            label: "Data",
            active: true
        }
    ]
};