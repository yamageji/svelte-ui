<script lang="ts">
  import Tree from './Tree.svelte';
  import TreeTitle from './TreeTitle.svelte';
  import TreeItem from './TreeItem.svelte';
  import Group from './Group.svelte';
  import IconFolder from '../Icons/IconFolder.svelte';
  import IconFolderOpen from '../Icons/IconFolderOpen.svelte';
  import IconDocument from '../Icons/IconDocument.svelte';
</script>

<Tree>
  <TreeTitle class="mb-5 text-2xl font-bold">My Documents</TreeTitle>
  <TreeItem let:open>
    <span class="mt-2 flex items-center gap-1">
      {#if open}
        <IconFolderOpen class="h-5 w-5" />
      {:else}
        <IconFolder class="h-5 w-5" />
      {/if}
      Projects
    </span>
    <Group slot="list" class="ml-4">
      <TreeItem let:open>
        <span class="mt-2 flex items-center gap-1">
          <IconDocument class="h-5 w-5" />
          project-1.docx
        </span>
      </TreeItem>
      <TreeItem let:open>
        <span class="mt-2 flex items-center gap-1">
          <IconDocument class="h-5 w-5" />
          project-2.docx
        </span>
      </TreeItem>
      <TreeItem let:open>
        <span class="mt-2 flex items-center gap-1">
          {#if open}
            <IconFolderOpen class="h-5 w-5" />
          {:else}
            <IconFolder class="h-5 w-5" />
          {/if}
          Project3
        </span>
        <Group slot="list" class="ml-4">
          <TreeItem let:open>
            <span class="mt-2 flex items-center gap-1">
              <IconDocument class="h-5 w-5" />
              project-3A.docx
            </span>
          </TreeItem>
          <TreeItem let:open>
            <span class="mt-2 flex items-center gap-1">
              <IconDocument class="h-5 w-5" />
              project-3B.docx
            </span>
          </TreeItem>
        </Group>
      </TreeItem>
    </Group>
  </TreeItem>

  <TreeItem let:open>
    <span class="mt-2 flex items-center gap-1">
      {#if open}
        <IconFolderOpen class="h-5 w-5" />
      {:else}
        <IconFolder class="h-5 w-5" />
      {/if}
      Reports
    </span>
    <Group slot="list" class="ml-4">
      <TreeItem let:open>
        <span class="mt-2 flex items-center gap-1">
          {#if open}
            <IconFolderOpen class="h-5 w-5" />
          {:else}
            <IconFolder class="h-5 w-5" />
          {/if}
          Report1
        </span>
        <Group slot="list" class="ml-4">
          <TreeItem let:open>
            <span class="mt-2 flex items-center gap-1">
              <IconDocument class="h-5 w-5" />
              report-1A.docx
            </span>
          </TreeItem>
          <TreeItem let:open>
            <span class="mt-2 flex items-center gap-1">
              <IconDocument class="h-5 w-5" />
              report-1B.docx
            </span>
          </TreeItem>
          <TreeItem let:open>
            <span class="mt-2 flex items-center gap-1">
              <IconDocument class="h-5 w-5" />
              report-1C.docx
            </span>
          </TreeItem>
        </Group>
      </TreeItem>
    </Group>
  </TreeItem>
</Tree>

<p>
  <label
    >File or Folder Selected:
    <input id="last_action" type="text" size="15" readonly />
  </label>
</p>
