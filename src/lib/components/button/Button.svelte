<script lang='ts'>
  import { createEventDispatcher } from 'svelte';
  import Spinner from '../spinner/spinner.svelte';
  import { checkHexIsLight } from '$lib/utils/colors.js';
  
  export let disabled = false;
  export let loading = false;
  export let color = 'primary';
  export let textColor = '';
  export let type = 'filled';
  export let width = '100%';
  export let height = '48px';
  export let padding = '5px 24px';
  
  const dispatch = createEventDispatcher();

  const spinnerSize = `${((+height.replace('px', '')) - 14)}px`;

  const colorsArray = ['primary', 'secondary', 'tertiary']

  function handleClick() {
    if (!disabled && !loading) {
      dispatch('click');
    }
  }


  function handleColorClass() {
    if(colorsArray.includes(color)) {
      return color;
    }
    return '';
  }

  function handleBgColor() {
    if(colorsArray.includes(color)) return;
    if(type === 'outlined') return 'transparent';
    return color;
  };
  function handleBorderColor() {
    if(colorsArray.includes(color)) return;
    if(type === 'outlined') return color;
  };
  function handleTextColor() {
    if(colorsArray.includes(color)) return;
    if(type === 'outlined') return color;
    if(textColor && !disabled) return textColor;
    const parsedColor = checkHexIsLight(color) ? '#000' : '#FFF';
    console.log('ParsedColor ::: ', parsedColor);
    return parsedColor;
  };

  $: btnClass = `${handleColorClass()} ${type} ${disabled ? 'disabled' : ''}`;
</script>

<style>
  .button {
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 22px;
    white-space: nowrap;
    appearance: none;
    border: 0;
    cursor: pointer;
    transition: .5s all;

    &.loading {
      cursor: default;
    }

    &.disabled {
      cursor: not-allowed;
      pointer-events: none;
      user-select: none;
      &:not(.outlined) {
        background-color: #CCC !important;
        color: #7e7e7e !important;

        transition: .5s all;
      }
      &.outlined {
        border-color: #CCC !important;
        color: #b0b0b0 !important;
        transition: .5s all;
      }
    }

    &.outlined {
      border-width: 1px;
      border-style: solid;
    }

    &.primary {
      &:not(.outlined) {
        background: #1D4F91;
        color: #FFF;
      }
      &.outlined {
        background: #FFF;
        color: #1D4F91;
        border-color: #1D4F91;
      }
    }

    &.secondary {
      &:not(.outlined) {
        background: #E63888;
        color: #FFF;
      }
      &.outlined {
        background: #FFF;
        color: #E63888;
        border-color: #E63888;
      }
    }

    &.tertiary {
      &.outlined {
        background: #FFF;
        color: #C43E9F;
        border-color: #C43E9F;
      }
    }
  }
</style>

<button
  class="button {btnClass} {loading ? 'loading' : ''}"
  {disabled}
  style="
    width: {width};
    height: {height};
    padding: {padding};
    background-color: {handleBgColor()};
    color: {handleTextColor()};
    border-color: {handleBorderColor()}
    "
  on:click={handleClick}
>
{#if !loading}
  <slot></slot>
{:else}
<div style="position: relative">
  <Spinner color="red" size="{spinnerSize}" width="5px"/>
</div>
{/if}
</button>
