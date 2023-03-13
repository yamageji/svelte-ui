<script lang="ts">
  export let as: "h2" | "h3" | "h4" | "h5" | "h6" = "h2";
</script>

<svelte:element this={as} id="tree_label" {...$$restProps}>
  <slot />
</svelte:element>
