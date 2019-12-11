import { render } from 'react-testing-library';
import { Input } from './Input.component';

describe(`<Form />`, () => {
  it(`should render without crash`, async () => {
    const { unmount } = render(
      <div>
        <Input />
      </div>,
    );
    unmount();
  });
});
