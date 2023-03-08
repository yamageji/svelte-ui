<script lang="ts">
  let isExpanded: boolean = false;
  let isSelected: boolean = false;

  const toggle = () => {
    isExpanded = !isExpanded;
  };
  const handleKeydown = (event: KeyboardEvent) => {
    console.log(event.key);
    if (event.key === 'Enter') toggle();
  };
</script>

<!-- 子要素を持つ場合のみaria-expandedを付与する？ -->
{#if $$slots.default}
  <li
    role="treeitem"
    aria-selected={isSelected}
    on:click={toggle}
    on:keydown={handleKeydown}
    class=""
    tabindex="0"
  >
    <slot />
  </li>
{/if}

{#if $$slots.list}
  <li
    role="treeitem"
    aria-expanded={isExpanded}
    aria-selected={isSelected}
    class="hidden  aria-expanded:block"
  >
    <slot name="list" />
  </li>
{/if}
