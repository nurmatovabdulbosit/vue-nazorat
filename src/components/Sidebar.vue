<template>
	<input type="checkbox" id="nav-toggle">
	<div class="sidebar">
		<div class="sidebar-brand">
			<h2><span class="material-icons">monitor_heart</span><span>Invest nazorat</span></h2>
		</div>
		<div class="sidebar-menu">
			<ul>
				<li>
				<router-link to="/" class="button">
					<a href="" class="active"><span class="material-icons">home</span>
					<span class="text">Bosh sahifa</span></a>
				</router-link>
				</li>
				<li>
					<router-link to="/gip" class="button">
						<span class="material-icons">language</span>
						<span class="text">Horijiy investitsiya (GIP)</span>
					</router-link>
				</li>
				<li>
					<router-link to="/rip" class="button">
						<span class="material-icons">public</span>
						<span class="text">Hududiy investitsiya (RIP)
						</span>
					</router-link>
				</li>
				<li>
					<router-link to="/about" class="button">
						<span class="material-icons">clear_all</span>
						<span class="text">Yo'nalishlar kesmida</span>
					</router-link>
				</li>
				<li>
					<router-link to="/uchrashuvlar" class="button">
						<span class="material-icons">group</span>
						<span class="text">Uchrashuvlar</span>
					</router-link>
				</li>
				<li>
					<router-link to="/muammo" class="button">
						<span class="material-icons">event_busy</span>
						<span class="text">Muammoli loyihalar</span>
					</router-link>
				</li>
				<li>
					<router-link to="/loyiha" class="button">
						<span class="material-icons">email</span>
						<span class="text">Loyihalar (turlari buyicha)</span>
					</router-link>
				</li>
				<li>
					<router-link to="/sohaloyiha" class="button">
						<span class="material-icons">event_note</span>
						<span class="text">Loyihalar (soxalar buyicha)</span>
					</router-link>
				</li>
				<li>
					<router-link to="/payments" class="button">
						<span class="material-icons">attach_money</span>
						<span class="text">Payments</span>
					</router-link>
				</li>
				<li>
					
				</li>
			</ul>
			
		</div>
	</div>
	
	
	

		
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>