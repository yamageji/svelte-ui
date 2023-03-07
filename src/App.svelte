<script lang="ts">
  import Tooltip from "./components/Tooltip/Tooltip.svelte";
  import Tab from "./components/Tab/Tab.svelte";
  import Treeview from "./components/Treeview/Treeview.svelte";

  import { sampleTabData } from "./components/Tab/sampleTabData";
</script>

<main>
  <div class="m-16">
    <Tooltip />
    <Tab data={sampleTabData} />
    <Treeview />
  </div>
</main>
