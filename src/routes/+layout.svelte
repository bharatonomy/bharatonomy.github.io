<script>
	import '../app.pcss';
	import Toggledark from '../components/ToggleDark.svelte';
	import NavBar from '../components/NavBar.svelte';
</script>

<main class="flex flex-row text-center">
	<Toggledark />
	<NavBar />

	<slot />
</main>
