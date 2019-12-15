import { render } from 'react-testing-library';
import ItemEditor from './ItemEditor.component';

describe(`<ItemEditor />`, () => {
  it(`should render without crash`, async () => {
    const { unmount } = render(
      <div>
        <ItemEditor name="inventory" />
      </div>,
    );
    unmount();
  });
});
