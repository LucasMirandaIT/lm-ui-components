<script>
  import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
  import Banner from './Banner.svelte';
  let count = 0;

    const handleClick = () => {
        count += 1;
    }
</script>

<Meta
  title="Banner"
  component={Banner}
  argTypes={{
    // color: {control: {type: 'color'}}
  }}
/>

<Template let:args>
  <Banner
    {...args}
    on:click
    on:click={handleClick}
  ></Banner>
    Check on your browser's console to see the action of the button being triggered
    Clicked {count} times.
</Template>

<Story
  name="Default"
  args={{
    onlyTitle: false,
    bgColor: '#FEFEFE',
    padding: '16px 24px',
    textColor: '',
    iconPath: '',
    title: 'Test',
    description: 'Lorem ipsum dot',
    button: {
      label: 'Test',
      type: 'filled',
      color: 'blue',
    },
  }}
/>
