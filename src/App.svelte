<script lang="ts">
  import Tooltip from "./components/Tooltip/Tooltip.svelte";
  import Tab from "./components/Tab/Tab.svelte";
  import SampleTreeview from "./components/Treeview/SampleTreeview.svelte";

  import { sampleTabData } from "./components/Tab/sampleTabData";
</script>

<main>
  <div class="m-16">
    <!-- <Tooltip />
    <Tab data={sampleTabData} /> -->
    <SampleTreeview />
  </div>
</main>
