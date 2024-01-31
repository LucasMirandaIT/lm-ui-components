<script>
  export let size = '68px';
  export let color = '#205191';
  export let width = '6px';

  const spinnerColor = `background: radial-gradient(farthest-side, ${color} 94%, #0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%, ${color})`;
  const mask = `-webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - ${width}), #000 0)`;
</script>

<div
  class="spinner"
  style="height: {size}; width: {size}; {spinnerColor}; {mask}"
></div>

<style>
  @keyframes s3 {
    100% {
      transform: rotate(1turn);
    }
  }

  .spinner {
    border-radius: 50%;
    animation: s3 1s infinite linear;
  }
</style>
