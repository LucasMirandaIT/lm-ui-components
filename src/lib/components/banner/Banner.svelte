<script>
  import { Button } from '$lib/index.ts';
  import { createEventDispatcher } from 'svelte';

  export let onlyTitle = false;
  export let bgColor = '';
  export let padding = '16px 24px';
  export let textColor = '';
  export let iconPath = '';
  export let title = '';
  export let description = '';
  export let button = {
    label: '',
    type: 'filled',
    color: 'blue',
  };

  const dispatch = createEventDispatcher();

  const triggerClickOnBanner = () => {
    dispatch('click');
  };
</script>

<section class="banner-container" style="background-color: {bgColor}; color: {textColor}">
  {#if iconPath}
    <img
      class="icon"
      src={iconPath}
      alt="Icon"
    />
  {/if}
  <section class="info-wrapper">
    <div class="info">
      {#if onlyTitle}
        <span class="title">{title}</span>
      {:else}
        <p class="title">{title}</p>
        <p class="description">{description}</p>
      {/if}
    </div>
    <div class="button">
      <Button
        type={button.type}
        color={button.color}
        height="32px"
        on:click={triggerClickOnBanner}
        >{button.label}
      </Button>
    </div>
  </section>
</section>

<style lang="scss">
  .banner-container {
    display: flex;
    border-radius: 8px;
    padding: 16px;
    align-items: center;

    .icon {
      margin-right: 16px;
      width: 24px;
      height: 24px;
      align-self: flex-start;
    }

    .info-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      gap: 8px;

      .info {
        flex-grow: 1;

        .title,
        .description {
          margin: 0 0 2px 0;
        }

        .title {
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
        }

        .description {
          font-size: 12px;
          line-height: 18px;
          font-weight: 400;
        }

        .button {
          align-self: flex-start;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .banner-container {
      .icon {
        width: 42px;
        height: 42px;
      }

      .info-wrapper {
        flex-direction: row;
        align-items: center;

        .info {
          margin-right: 16px;

          .title {
            font-size: 16px;
            line-height: 22px;
          }

          .description {
            font-size: 14px;
            line-height: 20px;
          }

          .button {
            align-self: center;
          }
        }
      }
    }
  }
</style>
