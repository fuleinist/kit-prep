import { render } from 'react-testing-library';
import { Form } from './Form.component';

describe(`<Form />`, () => {
  it(`should render without crash`, async () => {
    const { unmount } = render(
      <div>
        <Form inputs={[]} />
      </div>,
    );
    unmount();
  });
});
