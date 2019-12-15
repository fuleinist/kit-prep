import { render } from 'react-testing-library';
import ModeSwitch from './ModeSwitch';

describe(`<ModeSwitch />`, () => {
  it(`should render without crash`, async () => {
    const { unmount } = render(
      <div>
        <ModeSwitch />
      </div>,
    );
    unmount();
  });
});
