import React from "react";
import Dropdown from "./Dropdown";
import DropdownToggle from "./DropdownToggle";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";

export default {
    title: 'Example/Dropdown',
    component: Dropdown,
    argTypes: {

    },
    parameters: {
        height: {
            values: 300
        }
    }
};

const Template = (args) => <Dropdown {...args} />;

export const DropdownPrimary = Template.bind({});
DropdownPrimary.args = {
    children: (
        <div>
            <DropdownToggle id="dropdown-1" status="primary">
                Primary
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Menu A</DropdownItem>
                <DropdownItem>Menu B</DropdownItem>
                <DropdownItem>Menu C</DropdownItem>
                <DropdownItem>Menu D</DropdownItem>
            </DropdownMenu>
        </div>
    )
};

export const DropdownSecondary = Template.bind({});
DropdownSecondary.args = {
    children: (
        <div>
            <DropdownToggle id="dropdown-1" status="secondary">
                Secondary
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Menu A</DropdownItem>
                <DropdownItem>Menu B</DropdownItem>
                <DropdownItem>Menu C</DropdownItem>
                <DropdownItem>Menu D</DropdownItem>
            </DropdownMenu>
        </div>
    )
};

export const DropdownSuccess = Template.bind({});
DropdownSuccess.args = {
    children: (
        <div>
            <DropdownToggle id="dropdown-1" status="success">
                Success
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Menu A</DropdownItem>
                <DropdownItem>Menu B</DropdownItem>
                <DropdownItem>Menu C</DropdownItem>
                <DropdownItem>Menu D</DropdownItem>
            </DropdownMenu>
        </div>
    )
};

export const DropdownInfo = Template.bind({});
DropdownInfo.args = {
    children: (
        <div>
            <DropdownToggle id="dropdown-1" status="info">
                Info
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Menu A</DropdownItem>
                <DropdownItem>Menu B</DropdownItem>
                <DropdownItem>Menu C</DropdownItem>
                <DropdownItem>Menu D</DropdownItem>
            </DropdownMenu>
        </div>
    )
};

export const DropdownDanger = Template.bind({});
DropdownDanger.args = {
    children: (
        <div>
            <DropdownToggle id="dropdown-1" status="danger">
                Danger
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Menu A</DropdownItem>
                <DropdownItem>Menu B</DropdownItem>
                <DropdownItem>Menu C</DropdownItem>
                <DropdownItem>Menu D</DropdownItem>
            </DropdownMenu>
        </div>
    )
};

export const DropdownWarning = Template.bind({});
DropdownWarning.args = {
    children: (
        <div>
            <DropdownToggle id="dropdown-1" status="warning">
                Warning
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Menu A</DropdownItem>
                <DropdownItem>Menu B</DropdownItem>
                <DropdownItem>Menu C</DropdownItem>
                <DropdownItem>Menu D</DropdownItem>
            </DropdownMenu>
        </div>
    )
};

export const DropdownDark = Template.bind({});
DropdownDark.args = {
    children: (
        <div>
            <DropdownToggle id="dropdown-1" status="dark">
                Dark
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Menu A</DropdownItem>
                <DropdownItem>Menu B</DropdownItem>
                <DropdownItem>Menu C</DropdownItem>
                <DropdownItem>Menu D</DropdownItem>
            </DropdownMenu>
        </div>
    )
};