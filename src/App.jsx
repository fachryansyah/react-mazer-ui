import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  ProgressBar,
} from "./components";
import HorizontalLayout from "./layouts/HorizontalLayout";

function App() {
  return (
    <HorizontalLayout>
      <Card>
        <CardBody>
          <CardHeader title="Im Header" />
          Im card content
        </CardBody>
        <CardFooter>Im card footer</CardFooter>
      </Card>

      <ProgressBar
        status="danger"
        size="lg"
        value="78"
        min="20"
        max="50"
        label="true"
        striped="true"
      />
    </HorizontalLayout>
  );
}

export default App;
