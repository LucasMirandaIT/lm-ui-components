<script>
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
    import Tag from './Tag.svelte';
</script>
  <Meta
    title="Tag"
    component={Tag}
    argTypes={{
    }}
  />
  
  <Template let:args>
    <Tag
      {...args}
    >
    Tag Test
    </Tag>
  </Template>
  
  <Story
    name="Default"
    args={{
    color: 'red',
    size: 'lg',
    padding: '4px 16px'
    }}
  />
  