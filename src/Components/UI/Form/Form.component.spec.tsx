import { render } from 'react-testing-library';
import Test from '../../../Containers/Test/Test.container'
import { Form } from './Form.component';

describe(`<Form />`, () => {
  it(`should render without crash`, async () => {
    const { unmount } = render(
      <Test>
        <Form inputs={[]} />
      </Test>,
    );
    unmount();
  });
});
