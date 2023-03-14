<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { Keys } from "../../lib/keyboard";

  let isExpanded: boolean = false;
  let isSelected: boolean = false;
  let tabIndex: 0 | -1 = 0;

  const dispatch = createEventDispatcher();

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
        if (isSelected === true) return;
        isSelected = true;
        break;
      case Keys.ArrowRight:
        if (isExpanded === true) return;
        isExpanded = true;
        break;
      case Keys.ArrowLeft:
        if (isExpanded === false) return;
        isExpanded = false;
        break;
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
    class={isSelected ? "text-red-500" : ""}
  >
    <slot open={isExpanded} />
  </li>
{/if}

{#if $$slots.list}
  <li
    role="treeitem"
    aria-expanded={isExpanded}
    aria-selected={isSelected}
    class="hidden aria-expanded:block {$$restProps.class || ''}"
    tabindex={tabIndex}
  >
    <slot name="list" />
  </li>
{/if}
