<script lang="ts">

	import wood from '$assets/wood.png';

	export let showModal: boolean

	export let handleClose: () => void;

	let dialog: HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	class="w-[24em] rounded-md border-none p-0"
	bind:this={dialog}
	on:close={() => { handleClose(); showModal = false; }}
	on:click|self={() => { dialog.close(); }}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="p-4 bg-wood" on:click|stopPropagation>
		<slot name="header" />
		<slot />
		<button class="mx-auto font-sans" on:click={() => { dialog.close(); }}>Continuer</button>
	</div>
</dialog>

<style>

		/*.bg-wood {*/
		/*		background: url({wood}) no-repeat center center;*/
		/*}*/

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.5);
				backdrop-filter: blur(2px);
    }
    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>