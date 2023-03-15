<script lang="ts">
  import type { Readable } from "svelte/store";

  import { Keys } from "../../lib/keyboard";
  import Tree from "./Tree.svelte";
  import TreeTitle from "./TreeTitle.svelte";
  import TreeItem from "./TreeItem.svelte";
  import Group from "./Group.svelte";
  import IconFolder from "../Icons/IconFolder.svelte";
  import IconFolderOpen from "../Icons/IconFolderOpen.svelte";
  import IconDocument from "../Icons/IconDocument.svelte";

  type Item = {
    title: string;
    child: string | Item[];
  };

  export let data: Readable<[Item]>;

  const items: HTMLElement[] = [];

  let activeIndex: number = 0;
  let selectedItem: string;

  const onClickItem = (index: number) => {
    if (activeIndex === index) return;
    activeIndex = index;
  };

  const onFocusItem = (index: number) => (activeIndex = index);
  const focusItem = (index: number) => items[index].focus();

  const handleKeydown = (event: KeyboardEvent) => {
    switch (event.key) {
      case Keys.ArrowUp:
        // if (index === 0) return;
        activeIndex--;
        break;
      case Keys.ArrowDown:
        // 最後のインデックスで return;
        activeIndex++;
        break;
    }
  };
</script>

<Tree>
  <TreeTitle class="mb-5 text-2xl font-bold">My Documents</TreeTitle>
  {activeIndex}

  {#each $data as { title, child }, i}
    {@const currentActive = activeIndex === i}
    {@const onClick = () => onClickItem(i)}

    <TreeItem let:open>
      <span
        class="mt-2 flex w-fit items-center gap-1"
        tabindex={currentActive ? 0 : -1}
        on:click={onClick}
        on:keydown={handleKeydown}
      >
        {#if open}
          <IconFolderOpen class="h-5 w-5" />
        {:else}
          <IconFolder class="h-5 w-5" />
        {/if}
        {title}
      </span>

      <Group slot="list" class="ml-4">
        {#each child as item, index}
          {#if typeof item === "string"}
            <TreeItem>
              <span class="mt-2 flex items-center gap-1">
                <IconDocument class="h-5 w-5" />
                {item}
              </span>
            </TreeItem>
          {:else}
            ----- itemを再帰的に表示する -----
          {/if}
        {/each}
      </Group>
    </TreeItem>
  {/each}
</Tree>

<p>
  <label
    >File or Folder Selected:
    <input id="last_action" type="text" size="15" readonly />
  </label>
</p>
