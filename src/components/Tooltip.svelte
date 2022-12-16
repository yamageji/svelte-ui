<script lang="ts">
  // export let bg = '';
  // export let color = '';
  // export let triangleSize = '';
  // export let gap = '';

  let isShow = true;
  const toggleShow = () => (isShow = !isShow);

  $: showClass = isShow ? 'visible opacity-100' : 'invisible opacity-0';

  $: triangleStyle = (position: string) => {
    switch (position) {
      case 'top':
        return ' bottom-[calc(100%+8px+4px)] left-1/2 -translate-x-1/2 translate-y-[0px] before:left-0 before:right-0 before:-bottom-[8px] before:border-t-[8px] before:border-b-0 before:border-l-[8px] before:border-r-[8px] before:border-t-[#000] before:border-b-transparent before:border-l-transparent before:border-r-transparent ';
      case 'bottom':
        return ' before:left-0 before:right-0 before:-top-[8px] before:border-t-0 before:border-b-[8px]  before:border-l-[8px] before:border-r-[8px] before:border-t-transparent before:border-b-[#000]  before:border-l-transparent before:border-r-transparent ';
      case 'left':
        return '';
      case 'right':
        return '';
    }
  };

  $: potisionFromParentStyle = (position: string) => {
    switch (position) {
      case 'top':
        return '';
      case 'bottom':
        return '';
      case 'left':
        return '';
      case 'right':
        return '';
    }
  };
</script>

<div class="" />

<button
  type="button"
  on:click={toggleShow}
  class="mb-4 rounded-md bg-gray-700 p-1 text-white"
>
  切り替え
</button>

<a href="/" class={`${potisionFromParentStyle} relative`}>
  リンク（ツールチップ上）
  <span class="" role="tooltip">
    <span
      class={`${showClass} ${triangleStyle(
        'top'
      )} z-1 absolute block w-max max-w-[160px] rounded-md bg-[#000] py-2 px-3 text-left text-sm text-[#fff]  before:absolute before:m-auto before:block before:h-0 before:w-0 before:border-solid before:content-['']`}
    >
      テキストが入ります。テキストが入ります。
    </span>
  </span>
</a>
