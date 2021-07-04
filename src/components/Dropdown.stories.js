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