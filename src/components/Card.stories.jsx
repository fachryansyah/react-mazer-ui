import React from "react";
import Card from "./Card";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import Button from "./Button";
import Image from "./Image";

export default {
    title: 'Example/Card',
    component: Card,
    argTypes: {

    }
};

const Template = (args) => <Card {...args} />;

export const CardWithHeaderFooter = Template.bind({});
CardWithHeaderFooter.args = {
    children: (
        <div>
            <CardBody>
                <CardHeader title="Card With Header And Footer" />
                <p>
                    Gummies bonbon apple pie fruitcake icing biscuit apple pie jelly-o sweet roll. Toffee sugar plum sugar plum jelly-o jujubes bonbon dessert carrot cake.
                </p>
                <Image source="https://zuramai.github.io/mazer/demo/assets/images/samples/banana.jpg" />
            </CardBody>
            <CardFooter className="d-flex justify-content-between">
                <span>Card Footer</span>
                <Button label="Read More" status="primary" />
            </CardFooter>
        </div>
    )
};