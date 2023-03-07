<script lang="ts">
  import Tree from "./Tree.svelte";
  import TreeItem from "./TreeItem.svelte";
  import Group from "./Group.svelte";
</script>

<Tree>
  <TreeItem>
    <span> Projects </span>
    <Group>
      <TreeItem>project-1.docx</TreeItem>
      <TreeItem>project-2.docx</TreeItem>
      <li role="treeitem" aria-expanded="false" aria-selected="false">
        <span> Project 3 </span>
        <Group>
          <TreeItem>project-3A.docx</TreeItem>
          <TreeItem>project-3B.docx</TreeItem>
          <TreeItem>project-3C.docx</TreeItem>
        </Group>
      </li>
      <TreeItem>project-4.docx</TreeItem>
      <li role="treeitem" aria-expanded="false" aria-selected="false">
        <span> Project 5 </span>
        <Group>
          <TreeItem>project-5A.docx</TreeItem>
          <TreeItem>project-5B.docx</TreeItem>
          <TreeItem>project-5C.docx</TreeItem>
        </Group>
      </li>
    </Group>
  </TreeItem>

  <li role="treeitem" aria-expanded="false" aria-selected="false">
    <span> Reports </span>
    <Group>
      <li role="treeitem" aria-expanded="false" aria-selected="false">
        <span> report-1 </span>
        <Group>
          <TreeItem>report-1A.docx</TreeItem>
          <TreeItem>report-1B.docx</TreeItem>
          <TreeItem>report-1C.docx</TreeItem>
        </Group>
      </li>
      <li role="treeitem" aria-expanded="false" aria-selected="false">
        <span> report-2 </span>
        <Group>
          <TreeItem>report-2A.docx</TreeItem>
          <TreeItem>report-2B.docx</TreeItem>
          <TreeItem>report-2C.docx</TreeItem>
        </Group>
      </li>
      <li role="treeitem" aria-expanded="false" aria-selected="false">
        <span> report-3 </span>
        <Group>
          <TreeItem>report-3A.docx</TreeItem>
          <TreeItem>report-3B.docx</TreeItem>
          <TreeItem>report-3C.docx</TreeItem>
        </Group>
      </li>
    </Group>
  </li>
</Tree>

<p>
  <label
    >File or Folder Selected: <input
      id="last_action"
      type="text"
      size="15"
      readonly=""
    /></label
  >
</p>
