<script lang="ts">
  // export let bg = '';
  // export let color = '';
  // export let triangleSize = '';
  // export let gap = '';

  let position = 'top';
  const togglePosition = () => {
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

  // 変数候補 bg=#000 text=#fff 8px=triangle-size 4px=gap-size
  $: triangleStyle = (position: string) => {
    switch (position) {
      case 'top':
        return 'bottom-[calc(100%+8px+4px)] left-1/2 -translate-x-1/2 translate-y-[4px] before:left-0 before:right-0 before:-bottom-[8px] before:border-t-[8px] before:border-b-0 before:border-l-[8px] before:border-r-[8px] before:border-t-[#000] before:border-b-transparent before:border-l-transparent before:border-r-transparent group-focus-within:translate-y-0 group-hover:translate-y-0 group-focus-visible:translate-y-0 group-active:translate-y-0';
      case 'bottom':
        return 'top-[calc(100%+8px+4px)] left-1/2 -translate-x-1/2 -translate-y-[4px] before:left-0 before:right-0 before:-top-[8px] before:border-t-0 before:border-b-[8px]  before:border-l-[8px] before:border-r-[8px] before:border-t-transparent before:border-b-[#000] before:border-l-transparent before:border-r-transparent group-focus-within:translate-y-0 group-hover:translate-y-0 group-focus-visible:translate-y-0 group-active:translate-y-0';
      case 'left':
        return 'bottom-[50%] right-[calc(100%+8px+4px)] translate-x-[4px] translate-y-1/2 before:-right-[8px] before:top-0 before:bottom-0 before:border-t-[8px] before:border-b-[8px]  before:border-l-[8px] before:border-r-0 before:border-t-transparent before:border-b-transparent before:border-l-[#000] before:border-r-transparent group-focus-within:translate-x-0 group-hover:translate-x-0 group-focus-visible:translate-x-0 group-active:translate-x-0';
      case 'right':
        return 'bottom-[50%] left-[calc(100%+8px+4px)] -translate-x-[4px] translate-y-1/2 before:-left-[8px] before:top-0 before:bottom-0 before:border-t-[8px] before:border-b-[8px]  before:border-l-0 before:border-r-[8px] before:border-t-transparent before:border-b-transparent before:border-l-transparent before:border-r-[#000] group-focus-within:translate-x-0 group-hover:translate-x-0 group-focus-visible:translate-x-0 group-active:translate-x-0';
    }
  };
  $: transparentBackgroundStyle = (position: string) => {
    const basic =
      'after:absolute after:content-[""] after:block after:w-full after:h-full after:-z-1';
    switch (position) {
      case 'top':
        return (
          basic + 'after:top-full after:left-0 after:h-[calc(8px+4px+4px)]'
        );
      case 'bottom':
        return (
          basic + 'after:bottom-full after:left-0 after:h-[calc(8px+4px+4px)]'
        );
      case 'left':
        return basic + '';
      case 'right':
        return basic + '';
    }
  };
</script>

<div class="mb-10">
  <button
    type="button"
    on:click={togglePosition}
    class="mb-4 rounded-md bg-gray-700 p-1 text-white"
  >
    位置切り替え
  </button>
</div>

<a href="/" class="group relative inline-block underline underline-offset-2">
  リンクテキスト
  <span
    class={`${triangleStyle(position)} ${transparentBackgroundStyle(
      position
    )} z-1 invisible absolute block w-max max-w-[160px] rounded-md bg-[#000] py-2 px-3 text-left text-sm text-[#fff] opacity-0 duration-100 before:absolute before:m-auto before:block before:h-0 before:w-0 before:border-solid before:content-[''] group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100 group-active:visible group-active:opacity-100`}
    role="tooltip"
  >
    <span
      class="block before:absolute before:m-[-1px] before:h-[1px] before:w-[1px] before:truncate before:p-0 before:content-['ツールチップあり：']"
    >
      テキストが入りますテキストが入ります
    </span>
  </span>
</a>
