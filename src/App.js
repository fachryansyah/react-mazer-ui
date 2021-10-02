import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "./components";

function App() {
  return (
    <Card>
      <CardBody>
        <CardHeader title="Im Header" />
          im card content
      </CardBody>
      <CardFooter>
        iam card footer
      </CardFooter>
    </Card>
  );
}

export default App;
