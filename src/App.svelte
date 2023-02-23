<script lang="ts">
  import Tooltip from "./components/Tooltip/Tooltip.svelte";
  import Tab from "./components/Tab/Tab.svelte";

  const sampleTabData = [
    {
      id: 1,
      title: "tab1",
      content: [
        {
          id: 1,
          title: "item1",
        },
        {
          id: 2,
          title: "item2",
        },
        {
          id: 3,
          title: "item3",
        },
      ],
    },
    {
      id: 2,
      title: "tab2",
      content: [
        {
          id: 1,
          title: "item1",
        },
        {
          id: 2,
          title: "item2",
        },
        {
          id: 3,
          title: "item3",
        },
      ],
    },
    {
      id: 3,
      title: "tab3",
      content: [
        {
          id: 1,
          title: "item1",
        },
        {
          id: 2,
          title: "item2",
        },
        {
          id: 3,
          title: "item3",
        },
      ],
    },
  ];
</script>

<main>
  <div class="m-16">
    <Tooltip />
    <Tab data={sampleTabData} />
  </div>
</main>
