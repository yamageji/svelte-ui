<script lang="ts">
  type Content = {
    id: number;
    title: string;
  };

  export let data: Content[];
</script>

<div class="@container">
  <ul class="@[528px]:grid-cols-2 grid grid-cols-1 gap-x-6 gap-y-10">
    {#each data as item (item.id)}
      <li>
        {item.title}
      </li>
    {/each}
  </ul>
</div>
