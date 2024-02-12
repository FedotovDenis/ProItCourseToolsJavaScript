import { mount } from '@cypress/react';

describe('Hello component', () => {
  it('should render a greeting with the name prop', () => {
    const component = mount(<Hello name="John" />);

    expect(component).to.contain('Hello, John!');
  });

  it('should render a generic greeting if no name prop is provided', () => {
    const component = mount(<Hello />);

    expect(component).to.contain('Hey, stranger');
  });
});
