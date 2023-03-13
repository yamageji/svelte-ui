<script lang="ts">
  import { Keys } from "../../lib/keyboard";
  let isExpanded: boolean = false;
  let isSelected: boolean = false;
  let tabIndex: 0 | -1 = 0;

  const expanded = () => (isExpanded = true);
  const unExpanded = () => (isExpanded = false);
  const handleClick = () => {
    isSelected = true;
    isExpanded = !isExpanded;
  };

  const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case Keys.Enter:
      case Keys.Space:
        if (isSelected === false) {
          isSelected = true;
        }
        return;
      case Keys.ArrowRight:
        if (isExpanded === false) {
          isExpanded = true;
        }
        return;
      case Keys.ArrowLeft:
        if (isExpanded === true) {
          isExpanded = false;
        }
        return;
    }
  };
</script>

{#if $$slots.default}
  <li
    role="treeitem"
    aria-selected={isSelected}
    on:click={handleClick}
    on:keydown={handleKeydown}
    tabindex={tabIndex}
  >
    <slot />
  </li>
{/if}

{#if $$slots.list}
  <li
    role="treeitem"
    aria-expanded={isExpanded}
    aria-selected={isSelected}
    class="hidden aria-expanded:block"
    tabindex={tabIndex}
  >
    <slot name="list" />
  </li>
{/if}
