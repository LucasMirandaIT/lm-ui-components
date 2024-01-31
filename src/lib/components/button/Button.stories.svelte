<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';
  let count = 0;
  function handleClick() {
    count += 1;
  }
</script>

<Meta
  title="Button"
  component={Button}
  argTypes={{
  // color: {control: {type: 'color'}}
  }}
/>

<Template let:args>
  <Button
    type="button"
    {...args}
    on:click
    on:click={handleClick}
  >
    {args.text}
  </Button>

  You clicked: {count} times
</Template>

<Story
  name="Default"
  args={{
    text: 'Click me',
    loading: false,
    disabled: false,
    color: 'primary',
    textColor: '',
    type: 'filled',
    width: '100%',
    height: '48px',
    padding: '5px 24px',
  }}
/>
