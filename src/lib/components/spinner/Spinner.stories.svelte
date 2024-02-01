<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Spinner from './Spinner.svelte';
</script>

<Meta
  title="Spinner"
  component={Spinner}
  argTypes={{
  color: {control: {type: 'color'}}
  }}
/>

<Template let:args>
  <Spinner
    {...args}
  >
  </Spinner>
</Template>

<Story
  name="Default"
  args={{
  color: 'red'
  }}
/>
