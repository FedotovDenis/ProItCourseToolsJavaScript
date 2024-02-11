import Counter from "../component/Counter";

export default {
  title: 'Counter Component',
  component: Counter,
};

function Template() {
  return <Counter />;
}

export const Default = Template.bind({});
