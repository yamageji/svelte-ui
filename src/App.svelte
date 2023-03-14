<script lang="ts">
  import Tooltip from "./components/Tooltip/Tooltip.svelte";
  import Tab from "./components/Tab/Tab.svelte";
  import SampleTreeview from "./components/Treeview/SampleTreeview.svelte";

  import { tabData } from "./store/tabData";
  import { treeData } from "./store/treeData";
</script>

<main>
  <div class="m-16">
    <!-- <Tooltip /> -->
    <!-- <Tab data={tabData} /> -->
    <SampleTreeview data={treeData} />
  </div>
</main>
