<script lang="ts">
  // export let bg = '';
  // export let color = '';
  // export let triangleSize = '';
  // export let gap = '';

  let isShow = true;
  let position = 'top';
  const toggleShow = () => (isShow = !isShow);
  const togglePossition = () => {
    if (position === 'top') {
      position = 'bottom';
    } else if (position === 'bottom') {
      position = 'left';
    } else if (position === 'left') {
      position = 'right';
    } else if (position === 'right') {
      position = 'top';
    }
  };

  $: triangleStyle = (position: string) => {
    switch (position) {
      case 'top':
        return 'bottom-[calc(100%+8px+4px)] left-1/2 -translate-x-1/2 translate-y-[0px] before:left-0 before:right-0 before:-bottom-[8px] before:border-t-[8px] before:border-b-0 before:border-l-[8px] before:border-r-[8px] before:border-t-[#000] before:border-b-transparent before:border-l-transparent before:border-r-transparent';
      case 'bottom':
        return 'top-[calc(100%+8px+4px)] left-1/2 -translate-x-1/2 translate-y-[0px] before:left-0 before:right-0 before:-top-[8px] before:border-t-0 before:border-b-[8px]  before:border-l-[8px] before:border-r-[8px] before:border-t-transparent before:border-b-[#000] before:border-l-transparent before:border-r-transparent';
      case 'left':
        return 'bottom-[50%] right-[calc(100%+8px+4px)] translate-x-[0px] translate-y-1/2 before:-right-[8px] before:top-0 before:bottom-0 before:border-t-[8px] before:border-b-[8px]  before:border-l-[8px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#000] before:border-r-transparent';
      case 'right':
        return 'bottom-[50%] left-[calc(100%+8px+4px)] translate-x-[0px] translate-y-1/2 before:-left-[8px] before:top-0 before:bottom-0 before:border-t-[8px] before:border-b-[8px]  before:border-l-0 before:border-r-[8px] before:border-t-transparent before:border-b-transparent before:border-l-transparent before:border-r-[#000]';
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

<div class="mb-20">
  <button
    type="button"
    on:click={togglePossition}
    class="mb-4 rounded-md bg-gray-700 p-1 text-white"
  >
    位置切り替え
  </button>
</div>

<a href="/" class={`${potisionFromParentStyle} group relative inline-block`}>
  リンク（ツールチップ上）
  <span class="" role="tooltip">
    <span
      class={`${triangleStyle(
        position
      )} z-1 invisible absolute block w-max max-w-[160px] rounded-md bg-[#000] py-2 px-3 text-left text-sm text-[#fff] opacity-0 before:absolute before:m-auto before:block before:h-0 before:w-0 before:border-solid before:content-[''] group-hover:visible group-hover:opacity-100`}
    >
      テキストが入ります。テキストが入ります。
    </span>
  </span>
</a>
