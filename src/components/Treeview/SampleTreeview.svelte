<script lang="ts">
  import Tree from "./Tree.svelte";
  import TreeTitle from "./TreeTitle.svelte";
  import TreeItem from "./TreeItem.svelte";
  import Group from "./Group.svelte";
</script>

<Tree>
  <TreeTitle class="text-2xl font-bold">My Documents</TreeTitle>
  <TreeItem>
    <span> Projects </span>
    <Group slot="list">
      <TreeItem>project-1.docx</TreeItem>
      <TreeItem>project-2.docx</TreeItem>
      <TreeItem>
        <span> Project 3 </span>
        <Group slot="list">
          <TreeItem>project-3A.docx</TreeItem>
          <TreeItem>project-3B.docx</TreeItem>
          <TreeItem>project-3C.docx</TreeItem>
        </Group>
      </TreeItem>
    </Group>
  </TreeItem>

  <TreeItem>
    <span> Reports </span>
    <Group slot="list">
      <TreeItem>
        <span> report-1 </span>
        <Group slot="list">
          <TreeItem>report-1A.docx</TreeItem>
          <TreeItem>report-1B.docx</TreeItem>
          <TreeItem>report-1C.docx</TreeItem>
        </Group>
      </TreeItem>
      <TreeItem>
        <span> report-2 </span>
      </TreeItem>
      <TreeItem>
        <span> report-3 </span>
      </TreeItem>
    </Group>
  </TreeItem>
</Tree>

<p>
  <label
    >File or Folder Selected: <input
      id="last_action"
      type="text"
      size="15"
      readonly
    /></label
  >
</p>
