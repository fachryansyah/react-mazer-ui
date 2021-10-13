import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "./components";
import HorizontalLayout from "./layouts/HorizontalLayout";

function App() {
  return (
      <HorizontalLayout>
          <Card>
              <CardBody>
                  <CardHeader title="Im Header" />
                  im card content
              </CardBody>
              <CardFooter>
                  iam card footer
              </CardFooter>
          </Card>
      </HorizontalLayout>
  );
}

export default App;
