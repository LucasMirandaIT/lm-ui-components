<script lang="ts">
  import { checkHexIsLight } from '$lib/utils/colors.js';

  export let bgColor: string = '#4CD02E';
  export let borderColor: string = 'transparent';
  export let color: string = '#FFF';
  export let size: string = 'sm';
  export let padding: string = '4px 16px';

  const fontSizes = {
    sm: '10px',
    md: '12px',
    lg: '14px',
  };

  function handleFontSize(): string {
    return fontSizes[size as keyof typeof fontSizes];
  }

  function handleTextColor(): string {
    if (color) return color;
    const parsedColor = checkHexIsLight(bgColor) ? '#000' : '#FFF';
    return parsedColor;
  }
</script>

<span
  class="badge"
  style="
  background-color: {bgColor}; 
  border-color: {borderColor}; 
  color: {handleTextColor()}; 
  font-size: {handleFontSize()};
  padding: {padding}
  ">
  <slot />
</span>

<style>
  .badge {
    border-radius: 4px;
    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    border: 1px solid;
  }
</style>
